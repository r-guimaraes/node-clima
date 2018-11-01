const express = require('express')
const request = require('request');
const bodyParser = require('body-parser');
const app = express()

const apiKey = 'INSERIR API KEY AQUI';

app.set('view engine', 'ejs')

// Explicitamente dá acesso à pasta public
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
});

app.listen(3000, function () {
  console.log('App rodando na porta 3000 ...!')
})

/*
app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
}); */

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
request(url, function (err, response, body) {
	let error_msg = 'Error, tente novamente';
    if(err){    	
      	res.render('index', {weather: null, error: error_msg});
    } else {
      let weather = JSON.parse(body)
    	if (weather.main == undefined) {
    		console.log(weather);
        	res.render('index', {weather: null, error: error_msg + '. Cidade não encontrada!'});
    	} else {
    		let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    		res.render('index', {weather: weatherText, error: null});
    	}
    }
  });
})