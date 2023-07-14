import {movies} from "./data.js";
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
  
  const totalScore = movies.reduce((sum, movie) => sum + movie.score,0);
  
  const averageScore = totalScore / movies.length;
  
  const roundedAverage = averageScore.toFixed(2);
  
  return roundedAverage;
}
 scoresAverage(movies);
console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  const dramaScore = dramaMovies.reduce((sum,peli) => sum + peli.score,0);

  const averageDrama= dramaScore / dramaMovies.length;

  const dramaAverage = averageDrama.toFixed(2);
  
  return dramaAverage;
}
dramaMoviesScore(movies);
console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

