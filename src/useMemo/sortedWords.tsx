import React, { useMemo } from "react";

type MemoProps = {
  words: [];
};

/*  */

const SortedWords: React.FC<MemoProps> = ({ words }) => {
  const delay = (ms: number) => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + ms) {}
  };

  const sortWords = () => {
    console.log("sortWords");
    delay(500);
    return words.sort();
  };

  // const newSortedWords = sortWords();
  const newSortedWords = useMemo(sortWords, [words]);
  return (
    <>
      <h2>Sorted Words</h2>
      <ul>
        {newSortedWords.map((word, idx) => {
          return <li key={idx}>{word}</li>;
        })}
      </ul>
    </>
  );
};

export default SortedWords;
