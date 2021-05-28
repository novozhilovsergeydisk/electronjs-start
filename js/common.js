const fetch = require('node-fetch')

// const createReadStream = require( 'fs' )

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

let todo = {
    email: 'sergionov@mail.ru',
    pass: 123456,
    save: true,
    csrf_token: '900c48d66f07c601b8d1e98bc50e4a26a1264264e25bcec9ddc839dc9e6aefd6'
}

urls = [
    'http://localhost:80/ajUser.php',
    'http://httpbin.org/post',
    'http://localhost:80',
    'https://трансплант.net/ajUser.php'
]
url = urls[3]
method = 'POST'

params = 'email=sergionov@mail.ru&pass=12345&save=true'
headers = { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }

// params = JSON.stringify(todo)
// headers = { 'Content-Type': 'application/json' }
// headers = { 'Content-Type': 'text/html; charset=UTF-8' }

fetch(url, {
    method: 'post',
    headers: headers,
    body: params
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
