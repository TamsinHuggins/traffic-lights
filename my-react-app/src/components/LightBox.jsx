/* eslint-disable react/jsx-key */
import { useState } from "react";
import Light from "./Light";

const LightBox = () => {
  const [lightSelected, setLightSelected] = useState([true, false, false]);
  console.log(lightSelected);

  // create a 3-array of true false based on state

  const handleClick = (keyClicked) => {
    let newArr = [false, false, false];
    newArr[keyClicked] = true;
    setLightSelected(newArr);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
      {lightSelected.map((onOrNot, index) => (
        <Light
          key={index}
          isOn={onOrNot}
          color={index}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
export default LightBox;
