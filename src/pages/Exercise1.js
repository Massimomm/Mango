import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x
import { fade } from "@material-ui/core/styles/colorManipulator";

// https://material-ui.com/components/slider/
const Exercise1 = () => {
  const [value, setValue] = useState([1, 1000]);
  const [step] = useState(1);

  useEffect(() => {
    return () => {};
  }, [value]);

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
  });

  const theme = createMuiTheme({
    overrides: {
      MuiSlider: {
        track: { backgroundColor: "green", height: 6 },
        thumb: {
          height: 18,
          width: 18,
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

  const marks = [
    {
      value: 1,
      label: "1 €",
    },
    {
      value: 1000,
      label: "1000 €",
    },
  ];

  function valuetext(value) {
    return `${value} €`;
  }

  const handleChange = (event, newValue) => {
    // console.log("handleChange", event, "min", newValue[0], "max", newValue[1]);
    // https://github.com/mui-org/material-ui/issues/17228
    if (newValue && newValue.length) {
      if (newValue[1] - newValue[0] <= 50) {
        newValue[0] = newValue[0] - 50; // restrict the range to be 50
        newValue[1] = newValue[1] + 50; // restrict the range to be 50
        setValue(newValue);
      } else setValue(newValue);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        className={classes.typography}
        id="range-slider"
        variant="h4"
        gutterBottom
      >
        Normal range
      </Typography>

      <MuiThemeProvider theme={theme}>
        <Slider
          track={"normal"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          defaultValue={1}
          marks={marks}
          step={step}
          min={1}
          max={1000}
        />
      </MuiThemeProvider>

      {
        <Typography className={classes.typography}>
          Selected Price Range {value[1] - value[0]} €
        </Typography>
      }

      {value[1] - value[0] < 70 && (
        <Typography className={classes.dangerText}>
          The Price Range is low, Remember that Min value and Max value can't be
          crossed {value[0]} € - {value[1]} €
        </Typography>
      )}
    </div>
  );
};

Exercise1.defaultProps = {};

Exercise1.propTypes = {};

export default memo(Exercise1);
