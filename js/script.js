"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
     b = prompt('На сколько оцените его?', ''),
     c = prompt('Один из последних просмотренных фильмов?', ''),
     d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */



/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину) - используй условия внутри цикла for
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

function rememberMyFilms() {
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
}
/* rememberMyFilms(); */



/* цикл с while - первый вариант */
/* let num = 0;  
while(num <2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''); 
    

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Ok!');
        num++;
    } else {
        console.log('Error');
        num--;
    }
} */

/* цикл с do-while - второй вариант */
/* let num = 0;
do {
    const a = prompt('один из просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    
if(a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Ok!');
    num++;
} else {
    console.log('Error');
    num--;
}
}
while(num<2); */

function detectPersonalLevel() {
     if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
/* detectPersonalLevel(); */

/* Задание на урок: 20.10
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
*/

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('it is hidden');
    }
}
showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
}
writeYourGenres();



/* Задание на урок 25.10
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
