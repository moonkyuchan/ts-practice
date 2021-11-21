import React from "react";

type HelloProps = {
  name: string;
};

const Hello: React.FC<HelloProps> = ({ name }) => {
  return <div>hello , {name}</div>;
};

export default Hello;
