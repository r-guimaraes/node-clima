const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// Explicitamente dá acesso à pasta public
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function () {
  console.log('App rodando na porta 3000 ...!')
})