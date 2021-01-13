import React, { memo } from "react";
import PropTypes from "prop-types";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";

const Range = ({ match }) => {
  const {
    params: { mode },
  } = match;

  return (
    <>
      {mode === "normal" ? (
        <Exercise1 mode={mode} />
      ) : (
        <Exercise2 mode={mode} />
      )}
    </>
  );
};

Range.propTypes = {
  match: PropTypes.string.isRequired,
};

export default memo(Range);
