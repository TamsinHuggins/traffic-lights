/* eslint-disable react/prop-types */
import "../App.css";

const Light = (props) => {
  console.log(props.color);
  let lightColor = "greenOn";
  if (props.color === 0) {
    lightColor = "redOn";
  } else if (props.color === 1) {
    lightColor = "yellowOn";
  }

  return (
    <button
      id={lightColor}
      className={props.isOn ? lightColor : "lightOff"}
      onClick={props.handleClick}
    ></button>
  );
};

export default Light;
