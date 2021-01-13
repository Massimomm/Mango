import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x
import { fade } from "@material-ui/core/styles/colorManipulator";

const Exercise1 = ({ mode }) => {
  const [value, setValue] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [step] = useState(1);

  useEffect(() => {
    fetch("https://demo8878015.mockable.io/mangoExercise1")
      .then((res) => res.json())
      .then((result) => {
        const { range } = result;
        setValue(range);
        setMinValue(range[0]);
        setMaxValue(range[1]);
      });

    return () => {};
  }, []);

  const useStyles = makeStyles({
    typography: {
      marginBottom: 50,
      width: 500,
      color: "#304ffe",
    },
    root: {
      marginTop: 100,
      marginLeft: 550,
      width: 500,
    },
    dangerText: {
      width: 500,
      color: "red",
    },
    input: {
      marginLeft: 12,
      width: 54,
    },
  });

  const theme = createMuiTheme({
    overrides: {
      MuiSlider: {
        track: { backgroundColor: "green", height: 6 },
        thumb: {
          height: value[1] === value[0] ? 38 : 18,
          width: value[1] === value[0] ? 38 : 18,
          backgroundColor: "#fff",
          border: "2px solid #de235b",
          "&$focused, &:hover": {
            boxShadow: `0px 0px 0px ${8}px ${fade("#de235b", 0.16)}`,
          },
          "&$activated": {
            boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade("#de235b", 0.16)}`,
          },
          "&$jumped": {
            boxShadow: `0px 0px 0px ${8 * 4.5}px ${fade("#de235b", 0.16)}`,
          },
        },
        trackAfter: {
          backgroundColor: "#d0d7dc",
        },
        focused: {},
        activated: {},
        jumped: {},
      },
    },
  });

  function valuetext(value) {
    return `${value} €`;
  }

  const handleInputChange = (event) => {
    const {
      target: { value: val, id },
    } = event;

    let range = [];

    switch (id) {
      case "minValue":
        const min = val ? (+val <= value[1] ? +val : undefined) : 1;
        range[0] = min;
        range[1] = maxValue ?? value[1];
        setMinValue(+val);

        break;
      case "maxValue":
        const max = val ? (+val >= value[0] ? +val : undefined) : undefined;
        range[0] = minValue ?? value[0];
        range[1] = max;
        setMaxValue(+val);

        break;
      default:
        break;
    }

    setValue(range);
  };

  const handleChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
    setValue(newValue);
  };

  const classes = useStyles();

  console.log("Nan", maxValue, minValue, maxValue - minValue);
  return (
    <div className={classes.root}>
      <Typography
        className={classes.typography}
        id="range-slider"
        variant="h4"
        gutterBottom
      >
        {mode && mode.toUpperCase()} RANGE
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Input
            id={"minValue"}
            className={classes.input}
            value={minValue}
            margin="dense"
            onChange={(event) => handleInputChange(event)}
            inputProps={{
              step: { step },
              min: 1,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs>
          <MuiThemeProvider theme={theme}>
            <Slider
              track={"normal"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              defaultValue={1}
              step={step}
              min={1}
              max={1000}
            />
          </MuiThemeProvider>
        </Grid>
        <Grid item>
          <Input
            id={"maxValue"}
            className={classes.input}
            value={maxValue}
            margin="dense"
            onChange={(event) => handleInputChange(event)}
            inputProps={{
              step: { step },
              min: 1,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
      {
        <Typography className={classes.typography}>
          Range Price {value[1] - value[0]} €
        </Typography>
      }

      {maxValue - minValue < 0 && (
        <Typography className={classes.dangerText}>
          The Price Range Selected is NOT allowed! Min and Max value can't be
          crossed
        </Typography>
      )}
    </div>
  );
};

Exercise1.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default memo(Exercise1);
