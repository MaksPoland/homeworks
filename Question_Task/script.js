'use strict'

const numberOfFilms = +prompt('How many film do you have seen?', '');

let personalMovieDB = {
   count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};




for(let i = 0; i < 2; i++){
    const a = prompt('What the name of the last film?', ''),
          b = prompt('Your rank of this Film', '');
          if( a != '' && b != '' && a != null && b != null && a.length < 50){
   personalMovieDB.movies[a] = b;
  
   console.log('done');
   
   break;
          }else{
              console.log('error');
              i--;
          }
        
}
if(personalMovieDB.count < 10){
    console.log('You havent seen enough movies')
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('You like movies')
}else{
    console.log('ERROR');
}
console.log(personalMovieDB);