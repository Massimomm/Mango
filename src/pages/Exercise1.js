import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

// https://material-ui.com/components/slider/
const Exercise1 = () => {
  const [value, setValue] = useState([1, 1000]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // if (value[0] > value[1]) setValue([value[0] - 10, value[1] + 10]);
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
  });

  const theme = createMuiTheme({
    overrides: {
      MuiSlider: {
        track: { backgroundColor: "green" },
        thumb: { backgroundColor: "black" },
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

  // console.log("Exercise 1");

  const handleChange = (event, newValue) => {
    console.log(
      "handleChange",
      value,
      newValue,
      "min",
      newValue[0],
      "max",
      newValue[1]
    );
    if (newValue[0] > newValue[1])
      setValue([newValue[0] - 10, newValue[1] + 10]);
    else setValue(newValue);
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
          track={true}
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
    </div>
  );
};

Exercise1.defaultProps = {};

Exercise1.propTypes = {};

export default memo(Exercise1);
