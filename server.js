const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')

// Explicitamente dá acesso à pasta public
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
});

app.listen(3000, function () {
  console.log('App rodando na porta 3000 ...!')
})