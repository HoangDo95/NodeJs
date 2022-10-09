const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/test', (req,res) => {
  res.render('test')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});