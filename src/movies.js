import { movies } from "./data.js";
// console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}
getAllDirectors(movies);
console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  const spielbergDrama = movies.filter(movie =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  return spielbergDrama.length;
}
howManyMovies(movies);
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const totalScore = movies.reduce((sum, movie) => sum + movie.score, 0);

  const averageScore = totalScore / movies.length;

  const roundedAverage = averageScore.toFixed(2);

  return roundedAverage;
}
scoresAverage(movies);
console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  const dramaScore = dramaMovies.reduce((sum, peli) => sum + peli.score, 0);

  const averageDrama = dramaScore / dramaMovies.length;

  const dramaAverage = averageDrama.toFixed(2);

  return dramaAverage;
}
dramaMoviesScore(movies);
console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  const sortedMovies = [...movies];

  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {

      return a.title.localeCompare(b.title);
    } else {

      return a.year - b.year;
    }
  });

  return sortedMovies;
}
orderByYear(movies);
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  
  const sortedMovies = [...movies];

  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  return first20Titles;
}
orderAlphabetically(movies)
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const updatedMovies = movies.map(movie => {
    const updatedMovie = { ...movie };
    const duration = updatedMovie.duration;
    
    const hours = duration.includes('h') ? parseInt(duration.split('h')[0]) : 0;
    const minutes = duration.includes('min') ? parseInt(duration.split('min')[0].split(' ')[1]) : 0;
    
   
    const durationInMinutes = (hours * 60) + minutes;
    updatedMovie.duration = durationInMinutes;
    
    return updatedMovie;
  });
  
  return updatedMovies;
}
turnHoursToMinutes(movies)
console.log(turnHoursToMinutes(movies));


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
 
  const yearScores = {};
  
  movies.forEach(movie => {
    const year = movie.year;
    const score = movie.score;
    
    if (!yearScores[year]) {
      yearScores[year] = {
        totalScore: score,
        movieCount: 1
      };
    } else {
      yearScores[year].totalScore += score;
      yearScores[year].movieCount++;
    }
  });
  
  
  let bestYear= 0;
  let bestAverageScore = 0;
  
  for (const year in yearScores) {
    const averageScore = yearScores[year].totalScore / yearScores[year].movieCount;
    
    if (averageScore > bestAverageScore) {
      bestYear = year;
      bestAverageScore = averageScore;
    }
  }
  
  return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(2)}`;
}
bestYearAvg(movies)
console.log(bestYearAvg(movies));