const express = require('express');
const { render } = require('express/lib/response');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURI = require('./hideme')

const blogRoutes = require('./routes/blogRoutes');


const app = express();

//connect to mongodb

mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000);
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err)
    });

// register view engine
app.set('view engine', 'ejs');
// listen for requests


// middleware & static files
app.use(express.static('public'));

// middleware to make post requests
// it takes all of the url encoded data of the form and passes it to the post request
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));



//  Routes
app.get('/', (req, res) => {
    res.redirect('blogs');
 
}); 
app.get('/about', (req, res) => {

    res.render('about', {title: 'About'});
});

app.use('/blogs', blogRoutes);

// 404 Page
app.use((req,res) => {
    
    res.status(404).render('404', {title: 'Error!'});
});
