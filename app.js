const express = require('express');
const { render } = require('express/lib/response');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


const app = express();

//connect to mongodb

const dbURI ='mongodb+srv://master:tim1Mpwc@nodetuts.vxfit.mongodb.net/node-tuts?retryWrites=true&w=majority'
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
app.use(morgan('dev'));

//mongoose & mongodb, sandbox routes

//  Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
 
}); 
app.get('/about', (req, res) => {

    res.render('about', {title: 'About'});
});
// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: "All Blogs", blogs: result})
    })
    .catch(err => console.log(err))
    
       
});
app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create New Blog'});
})

// 404 Page
app.use((req,res) => {
    
    res.status(404).render('404', {title: 'Error!'});
});
