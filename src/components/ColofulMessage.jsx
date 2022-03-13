import React from "react";

const ColofulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
