import React from "react";
import _ from "lodash";

function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

export  const  RadialSeparators=({count, style}) => {
  const turns = 1 /count;
  return _.range(count).map(index => (
    <Separator turns={index * turns} style={style} />
  ));
}


