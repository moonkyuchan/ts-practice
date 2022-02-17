import React from "react";

type HelloProps = {
  name: string;
};

const Hello: React.FC<HelloProps> = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Hello;
