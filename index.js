const express = require('express');
const expressHandlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require('path');

const app = express();

//Configure an Handlebars Engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))

//Select Engine
app.set('view engine', 'handlebars');

//Body Parser to handle form data
app.use(express.urlencoded({ extended: false }));

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index Route
app.get("/", (req, res) => res.render('landing', { layout: 'main'}));

//Posts Routes
app.use('/posts', require('./routes/posts'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}...`));