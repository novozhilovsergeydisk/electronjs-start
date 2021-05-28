"use strict";

var fetch = require('node-fetch'); // const createReadStream = require( 'fs' )
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
  pass: 12345,
  save: true,
  csrf_token: '900c48d66f07c601b8d1e98bc50e4a26a1264264e25bcec9ddc839dc9e6aefd6'
};
params = JSON.stringify(todo); // console.log(todo)

console.log(JSON.stringify(todo));
url = 'http://httpbin.org/post'; //'http://localhost:80/ajUser.php'

method = 'POST';
params = 'email=sergionov@mail.ru';
headers = {
  'Content-Type': 'text/html; charset=UTF-8'
};
fetch(url, {
  method: method,
  body: params,
  headers: headers
}).then(function (res) {
  return res.json();
}).then(function (json) {
  return console.log(json);
});