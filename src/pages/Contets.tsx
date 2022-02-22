import React, { useContext } from "react";
import { test2CreateContext } from "../context/Context";

const Contets: React.FC = () => {
  console.log("Render Test : Contents");
  const { test2, setTest2 } = useContext(test2CreateContext);

  const toggleTest2 = () => {
    setTest2(test2 + 1);
  };

  return <h1 onClick={toggleTest2}>{test2}</h1>;
};

export default Contets;
