'use strict';

let numberOfFilms;

function start(){
    numberOfFilms=+prompt('How many films did you watch?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert('Write the quantity of films again!');
        numberOfFilms=+prompt('How many films did you watch?');
    }
}

start();

let personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let movie='';
let rate;

function rememberMyFilms(){
    for (let i = 1; i<=numberOfFilms;i++){
        movie=prompt('What film did you watch last time?');
        if (movie=='' || movie.length>50) {
            alert('Write a name of film again!');
            movie=prompt('What film did you watch last time?');
        }
        rate=prompt('How would you rate it?');
        if (rate=='' || +rate>10 || +rate<0 || typeof(+rate)!=Number){
            alert('Write a rate of film again!');
            rate=prompt('How would you rate it?');
        }
        personalMovieDB.movies[movie]=rate;
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log('You have already seen a few films');
    } else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
        console.log('You are a classic viewer');
    } else if(personalMovieDB.count>30){
        console.log('You are a movie fan');
    } else{
        console.log('Error');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);