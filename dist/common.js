"use strict";

var classes = require('./js/classes');

var axios = require('axios')["default"]; // const constants = require('./js/const')
// console.log(urls[5])
// обработчик на document сработает и выведет сообщение.


document.getElementById('save').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('save');
  var select = document.getElementById('answer'); // save the selected option

  var selected = [];

  for (var i = 0; i < select.options.length; i++) {
    selected[i] = select.options[i];
  }

  var n = document.getElementById('answer').options.selectedIndex;
  var val = document.getElementById('answer').options[n].value;
  var id = document.getElementById('id').innerText;
  var comments = document.getElementById('comments').value; // console.log(comments)

  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      id: id,
      result: val,
      comments: comments
    },
    url: urls[5]
  };
  console.log(options);
  axios(options).then(function (res) {
    mda.block = false; // Mda.prototype.res = res.data

    console.log('response.data =', res.data); // console.log('POST ================================================')

    var win = remote.getCurrentWindow();
    win.hide();
  })["catch"](function (error) {
    console.error('error post =', error);
  });
});
var post = document.getElementById('post');
var reset = document.getElementById('reset'); // // ловим на document...
// save.addEventListener("hello", function(event) { // (1)
//     alert("Привет от " + event.target.tagName); // Привет от H1
// });
// // ...запуск события на элементе!
// let event = new Event("hello", {bubbles: true}); // (2)
// save.dispatchEvent(event);

document.getElementById('get').addEventListener('click', function (e) {
  e.preventDefault();
  console.warn('get');
  params = {};
  url = urls[5];
  method = 'GET';
  console.log(url, method, params);
  axios.get(url, {
    params: params
  }).then(function (res) {
    // Mda.prototype.res = res.data
    console.log('response.data =', res.data);

    if (res.data['state'] == 'alert') {
      var optionArray = res.data['answer_options'];
      console.log(res.data['alert']); // mda.block = true

      var max = optionArray.length;
      var select = document.getElementById('answer');
      var opts = select.options;

      while (opts.length > 0) {
        opts[opts.length - 1] = null;
      } // console.log('count select.length', max)


      for (var i = 0; i <= max - 1; i++) {
        var newOption = new Option(optionArray[i], optionArray[i]);
        select.appendChild(newOption);
      }

      document.getElementById('patient').innerText = res.data['alert']['name'];
      document.getElementById('age').innerText = res.data['alert']['age'];
      document.getElementById('contract_id').innerText = res.data['alert']['contract_id'];
      document.getElementById('birthday').innerText = res.data['alert']['birthday'];
      document.getElementById('phone').innerText = res.data['alert']['phone'];
      document.getElementById('message').innerHTML = res.data['alert']['message'];
      document.getElementById('comment').innerText = res.data['alert']['comment'];
      document.getElementById('id').innerText = res.data['alert']['id'];
      mda.block = true;
    } // console.log('================================================')

  })["catch"](function (error) {
    console.error('error get =', error);
  }).then(function () {// always executed
  });
});
post.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('post');
  var select = document.getElementById('answer'); // save the selected option

  var selected = [];

  for (var i = 0; i < select.options.length; i++) {
    selected[i] = select.options[i];
  }

  var n = document.getElementById('answer').options.selectedIndex;
  var val = document.getElementById('answer').options[n].value;
  var comments = document.getElementById('comments').value;
  console.log(comments);
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      id: 1,
      result: val,
      comments: comments
    },
    url: urls[5]
  };
  console.log(options); // axios(options)
  //     .then(res => {
  //         // Mda.prototype.res = res.data
  //         console.log('response.data =', res.data)
  //         // console.log('POST ================================================')
  //     })
  //     .catch(function (error) {
  //         console.error('error post =', error)
  //     })
});
reset.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('reset');
  var options = {
    method: 'POST',
    headers: headers,
    data: {
      id: 1
    },
    url: urls[6]
  };
  console.log(options);
  axios(options).then(function (res) {
    // Mda.prototype.res = res.data
    console.log('response.data =', res.data); // console.log('POST ================================================')
  })["catch"](function (error) {
    console.error('error post =', error);
  }); // let data = {id:1}
  //
  // mda.post(urls[6], data, headers)
  //
  // console.log('start application')
  //
  // let win = remote.getCurrentWindow()
  //
  // win.hide()
}); // const save = document.getElementById('save')
//
// save.addEventListener('click', (e) => {
//     e.preventDefault()
//
//     let data = {id:1}
//     mda.post(urls[6], data, headers)
//     console.log('click reset')
//
//     data = {id:1, result: 'Не дозвонился', comment: 'Звонил долго'}
//
//     mda.post(urls[5], data, headers)
//
//     // let win = remote.getCurrentWindow()
//
//     // win.hide()
//
//     console.log('click save')
// })
// params = 'email=sergionov@mail.ru&pass=12345&save=true'
// headers = { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }
// headers = { 'Content-Type': 'text/html; charset=UTF-8' }

headers = {
  'Content-Type': 'application/json'
};
urls = ['http://localhost:80/ajUser.php', 'http://httpbin.org/post', 'http://yandex.ru', 'http://localhost:80', 'https://трансплант.net/ajUser.php', 'https://mc21.medsenger.ru/api/alert?key=workstation-key-1', 'https://mc21.medsenger.ru/api/reset?key=workstation-key-1'];
url = urls[5];
method = 'GET';
var mda = new classes.Mda();
mda.block = false; // mda.block = true
// console.log('Создан объект:', mda)
// повторить с интервалом 2 секунды

var timerId = setInterval(function () {
  // mda.get(url, {})
  //
  // console.log('mda.res=', mda.res)
  //
  // // console.log('******************************* mda.block =', mda.block)
  //
  // if (mda.res != null) {
  //     console.log('mda.res[state] =', mda.res['state'])
  //
  //     if (mda.res['state'] == 'alert') {
  //         let optionArray = mda.res['answer_options']
  //
  //         console.log('optionArray =', optionArray)
  //         // console.log('')
  //
  //         mda.block = true
  //         let max = optionArray.length
  //         let select = document.getElementById('answer')
  //
  //         // console.log('count select.length', max)
  //
  //         for (var i = 0; i <= max - 1; i++){
  //             let newOption = new Option(optionArray[i], i);
  //             select.appendChild(newOption);
  //         }
  //
  //         let win = remote.getCurrentWindow()
  //         win.show()
  //
  //         mda.res = null
  //     }
  // }
  //
  // if (mda.block) {
  //     // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> mda.block =', mda.block)
  //     mda.block = false
  // }
  console.log('mda.block =', mda.block); // mda.block = true

  if (mda.block == false) {
    var win = remote.getCurrentWindow();
    win.show();
    params = {};
    url = urls[5];
    method = 'GET';
    console.log(url, method, params);
    axios.get(url, {
      params: params
    }).then(function (res) {
      // Mda.prototype.res = res.data
      console.log('response.data =', res.data);

      if (res.data['state'] == 'alert') {
        var optionArray = res.data['answer_options'];
        console.log(res.data['alert']); // mda.block = true

        var max = optionArray.length;
        var select = document.getElementById('answer');
        var opts = select.options;

        while (opts.length > 0) {
          opts[opts.length - 1] = null;
        } // console.log('count select.length', max)


        for (var i = 0; i <= max - 1; i++) {
          var newOption = new Option(optionArray[i], optionArray[i]);
          select.appendChild(newOption);
        }

        document.getElementById('patient').innerText = res.data['alert']['name'];
        document.getElementById('age').innerText = res.data['alert']['age'];
        document.getElementById('contract_id').innerText = res.data['alert']['contract_id'];
        document.getElementById('birthday').innerText = res.data['alert']['birthday'];
        document.getElementById('phone').innerText = res.data['alert']['phone'];
        document.getElementById('message').innerHTML = res.data['alert']['message'];
        document.getElementById('comment').innerText = res.data['alert']['comment'];
        document.getElementById('id').innerText = res.data['alert']['id'];
        mda.block = true;
      } // console.log('================================================')

    })["catch"](function (error) {
      console.error('error get =', error);
    }).then(function () {// always executed
    });
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> mda.block =', mda.block);

    if (mda.block) {
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> mda.block =', mda.block)
      var _win = remote.getCurrentWindow();

      _win.show();
    }
  } // if (mda.block) {
  //     let win = remote.getCurrentWindow()
  //
  //     win.show()
  // }

}, 10000);