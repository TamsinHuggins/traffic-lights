import "../App.css";

import { useState } from "react";

const Light = () => {
  const [lightOn, setLightOn] = useState(false);

  return (
    <button
      className={lightOn ? "lightOn" : "lightOff"}
      onClick={() => {
        setLightOn(!lightOn);
      }}
    ></button>
  );
};

export default Light;
