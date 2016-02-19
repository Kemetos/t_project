// 3rd party
var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/app/views/partials');

// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {

    res.locals = {
        some_value: 'foo bar',
        list: ['cat', 'dog']
    }

    res.render('index');
});

console.log('Server running on 3000');
app.listen(3000);