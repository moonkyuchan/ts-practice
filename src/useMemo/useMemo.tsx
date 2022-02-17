import React, { useState } from "react";
import SortedWords from "./sortedWords";
import ColorMovie from "./colorMovie";

const useMemo: React.FC = () => {
  const [words, setWords] = useState<any>([]);
  const [word, setWord] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [movie, setMovie] = useState<string>("");
  // console.log(color, movie);

  const handleClick = () => {
    setWords([...words, word]);
    setWord("");
  };

  const handleColorMovie = (e: any) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  };

  return (
    <>
      <h1>useMemo Practice</h1>
      <div>
        <h2>1. SortedWord</h2>
        <SortedWords words={words} />
      </div>
      <input
        value={word}
        onChange={({ target: { value } }) => setWord(value)}
        placeholder="word"
      />
      <button onClick={handleClick}>+</button>
      <div style={{ marginTop: "100px" }}>
        <h2>2. Color , Movie</h2>
        <div>
          <label>
            what is your favorite color?
            <input id="color" value={color} onChange={handleColorMovie} />
          </label>
        </div>
        <div>
          what is your favorite movie among these?
          <label>
            <input
              type="radio"
              name="movie"
              value="Her"
              onChange={handleColorMovie}
            />
            Her
          </label>
          <label>
            <input
              type="radio"
              name="movie"
              value="Avengers"
              onChange={handleColorMovie}
            />
            Avengers
          </label>
          <label>
            <input
              type="radio"
              name="movie"
              value="Kingkong"
              onChange={handleColorMovie}
            />
            Kingkong
          </label>
        </div>
        <ColorMovie color={color} movie={movie} />
      </div>
    </>
  );
};

export default useMemo;
