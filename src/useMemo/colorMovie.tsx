import React, { useMemo } from "react";

interface ColorMovieProps {
  color: any;
  movie: any;
}

const getColorKor = (color: string) => {
  console.log("getColorKor");
  switch (color) {
    case "red":
      return "빨강";
    case "orange":
      return "주황";
    case "yellow":
      return "노랑";
    case "green":
      return "초록";
    case "blue":
      return "파랑";
    case "navy":
      return "남";
    case "purple":
      return "보라";
    default:
      return "레인보우";
  }
};

const getMovieGenreKor = (movie: string) => {
  console.log("getMovieGenreKor");
  switch (movie) {
    case "Her":
      return "드라마";
    case "Kingkong":
      return "액션";
    case "Avengers":
      return "슈퍼히어로";
    default:
      return "아직 잘 모름";
  }
};

const ColorMovie: React.FC<ColorMovieProps> = (color: any, movie: any) => {
  //   const colorKor = getColorKor(color);
  //   const movieGenreKor = getMovieGenreKor(movie);
  const colorKor = useMemo(() => getColorKor(color), [color]);
  const movieGenreKor = useMemo(() => getMovieGenreKor(movie), [movie]);

  return (
    <div>
      가장 좋아하는 색 {colorKor} 가장 좋아하는 장르 {movieGenreKor}
    </div>
  );
};

export default ColorMovie;
