import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x
import { fade } from "@material-ui/core/styles/colorManipulator";
import { request } from "../utils/api";
import { generateText } from "../utils/utils";

const Exercise2 = ({ mode }) => {
  const [value, setValue] = useState([]);
  const [firstValue, setFirstValue] = useState(0);
  const [lastValue, setLastValue] = useState(0);
  const [marks, setMarks] = useState(null);

  useEffect(() => {
    request("https://demo8878015.mockable.io/mangoRangeValues").then(
      (result) => {
        setFirstValue(result[0]);
        setLastValue(result[1]);
      }
    );
    return () => {};
  }, []);

  useEffect(() => {
    if (firstValue !== lastValue)
      request("http://demo8878015.mockable.io/mangoExercise2").then(
        (result) => {
          if (result) {
            setValue(result);
            result.unshift(firstValue);
            result.push(lastValue);

            setMarks(
              result.map((v) => {
                return {
                  value: v,
                  label: v === 0 ? `${v}` : `${v} €`,
                };
              })
            );
          }
        }
      );
    return () => {};
  }, [firstValue, lastValue]);

  const useStyles = makeStyles({
    typography: {
      marginBottom: 50,
      width: 1300,
      color: "#304ffe",
    },
    root: {
      marginTop: 100,
      marginLeft: 200,
      width: 1300,
    },
    dangerText: {
      marginTop: 10,
      width: 1300,
      color: "red",
    },
    statusBar: {
      marginTop: 20,
      width: 1300,
      color: "#304ffe",
    },
    labelDisplay: {
      fontSize: 9,
    },
  });

  const theme = createMuiTheme({
    overrides: {
      MuiSlider: {
        track: { backgroundColor: "green", height: 6 },
        thumb: {
          height: 24,
          width: 24,
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

  function valuetext(val) {
    return `${val}€`;
  }

  function valueLabelFormat(val) {
    return marks ? (
      <div className={classes.labelDisplay}>
        {marks.find((mark) => mark.value === val).label}
      </div>
    ) : null;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.typography}
        id="discrete-slider-restrict"
        variant="h4"
        gutterBottom
      >
        {mode && mode.toUpperCase()} RANGE
      </Typography>
      <MuiThemeProvider theme={theme}>
        <Slider
          value={[[...value].shift(), value.slice(-1).pop()]}
          onChange={handleChange}
          defaultValue={firstValue}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          valueLabelDisplay="auto"
          step={null}
          marks={marks}
          min={firstValue}
          max={lastValue}
        />
      </MuiThemeProvider>
      {value.length === 2 && (
        <Typography className={classes.statusBar}>
          {generateText(
            "Price Range Selected",
            (value[1] - value[0]).toFixed(2)
          )}
        </Typography>
      )}
      {value[0] === value[1] && (
        <Typography className={classes.dangerText}>
          {generateText(
            "Price Range not Valid:",
            (value[1] - value[0]).toFixed(2)
          )}
        </Typography>
      )}
    </div>
  );
};

Exercise2.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default memo(Exercise2);
