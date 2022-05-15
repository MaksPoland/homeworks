"use strict"

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    'actors': {},
    'genres': [],
    'privat': false

};
let nameOfFilm = prompt('Один из последних просмотренных фильмов', ''),
    rankingOfFilm = +prompt('На сколько Вы его ойените?', ''),
    nameOfFilm1 = prompt('Один из последних просмотренных фильмов', ''),

    rankingOfFilm1 = +prompt('На сколько Вы его ойените?', '');

personalMovieDb.movies[nameOfFilm] = rankingOfFilm;
personalMovieDb.movies[nameOfFilm1] = rankingOfFilm1;

console.log(personalMovieDb);