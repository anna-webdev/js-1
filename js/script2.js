"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', ''); 
            
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Ok!');
            } else {
                console.log('Error');
                i--;
            }
        }        
    },

    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
           console.log('Просмотрено довольно мало фильмов');
       } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
           console.log('Вы классический зритель');
       } else if(personalMovieDB.count > 30) {
           console.log('Вы киноман');
       } else {
           console.log('Произошла ошибка');
       }
   },

   writeYourGenres: function() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

        if (personalMovieDB.genres[i - 1]== "" || personalMovieDB.genres[i - 1] == null) {
            i--;
        } else {
                console.log('Спасибо за ответы');
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    showMyDB: function() {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('it is hidden');
        }
    }

};
/* personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(); */


