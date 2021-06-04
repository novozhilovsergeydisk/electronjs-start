"use strict";

var fetch = require('node-fetch');

var axios = require('axios')["default"];

var classes = require('./js/classes');

var user = new classes.User();
var reset = document.getElementById('reset');
reset.addEventListener('click', function (e) {
  e.preventDefault();
  mda.post(urls[1], '{id:1}', headers);
  console.log('click reset');
});
var save = document.getElementById('save');
save.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('click save');
}); // const createReadStream = require( 'fs' )
// import { createReadStream } from 'fs'
// const stream = createReadStream('input.txt')
// fetch('http://httpbin.org/post', { method: 'POST', body: stream })
//     .then(res => res.json())
//     .then(json => console.log(json))
// let todo = {
//     userId: 123,
//     title: "loren impsum doloris",
//     completed: false
// }

var todo = {
  email: 'sergionov@mail.ru',
  pass: 123456,
  save: true,
  csrf_token: '900c48d66f07c601b8d1e98bc50e4a26a1264264e25bcec9ddc839dc9e6aefd6'
}; // GET mc21.medsenger.ru/api/alert?key=workstation-key-1 - получение последнего тревожного сообщения
//
// {
//     "alert": {
//     "birthday": "27.04.1994",
//         "created_on": "Wed, 02 Jun 2021 19:28:54 GMT",
//         "id": 1,
//         "message": "ТЕКСТ",
//         "phone": "ТЕЛЕФОН"
// },
//     "count": 1,
//     "state": "alert"
// }
// {“id”: 1, “result”: “не дозвонился“, “comment”: “звонил долго“}
// https://github.com/axios/axios/issues/925
// const req = await axios({
//     url: 'https://somedomain.com',
//     proxy: {
//         host: '89.151.146.7',
//         port: 6060,
//         auth: {
//             username: 'myname',
//             password: 'mypass',
//         },
//     },
// });
// для целей отладки POST на /api/reset?key=workstation-key-1 с JSON {“id”:1}

urls = ['http://localhost:80/ajUser.php', 'http://httpbin.org/post', 'http://yandex.ru', 'http://localhost:80', 'https://трансплант.net/ajUser.php', 'https://mc21.medsenger.ru/api/alert?key=workstation-key-1', 'https://mc21.medsenger.ru/api/reset?key=workstation-key-1']; // params = 'email=sergionov@mail.ru&pass=12345&save=true'
// headers = { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }

params = JSON.stringify(todo);
headers = {
  'Content-Type': 'application/json'
}; // headers = { 'Content-Type': 'text/html; charset=UTF-8' }
// function sayHi() {
//     alert('Привет');
// }
//
// setTimeout(sayHi, 1000);

url = urls[5];
method = 'GET';
var mda = new classes.Mda();
console.log('Создан объект:', mda); // повторить с интервалом 2 секунды

var timerId = setInterval(function () {
  mda.get(url, {});
  console.log('========================================= tick');
}, 2000); // остановить вывод через 10 секунд

setTimeout(function () {
  clearInterval(timerId);
  alert('test');
  var win = remote.getCurrentWindow();
  win.hide();
  setTimeout(function () {
    win.show();
  }, 2000);
}, 10000); // fetch(url)
//     .then(res => {
//         if(res.headers.get("content-type") &&
//             res.headers.get("content-type").toLowerCase().indexOf("application/json") >= 0) {
//             return res.json()
//         } else {
//             throw new TypeError()
//         }
//     })
// fetch(url, {method:"GET"})
//     .then(res => console.log(res.headers))
// fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
// fetch(url, {headers: headers})
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
// fetch(url, {
//     method: method,
//     headers: headers,
//     body: params
// })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))