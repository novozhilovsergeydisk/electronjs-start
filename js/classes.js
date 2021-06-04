class User {
    constructor(name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }
}

// Medsenger doctor alarm (MDA)
const Mda = function() {
    Mda.prototype.get = (url, params) => {
        console.log('get запрос на адрес:', url, ' с параметрами ', params)

        axios.get(url, {params: params})
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })
            .then(function () {
                // always executed
            })
    }

    Mda.prototype.post = (url, params, headers) => {
        console.log('axios post')

        let options = {
            method: 'POST',
            headers: headers,
            data: params,
            url: url
        };

        axios(options)
            .then(res => {
                console.log('res:', res);
                console.log('res.data:', res.data);
            })
    }
}

module.exports = {User, Mda}