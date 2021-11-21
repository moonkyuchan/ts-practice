import React from "react";
import "./Style/App.scss";
import Hello from "./Hello";

const App: React.FC = () => {
  return (
    <div className="first">
      <Hello name="규찬" />
    </div>
  );
};

export default App;
