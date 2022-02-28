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

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: "All Blogs", blogs: result})
    })
    .catch(err => console.log(err))
    
       
});

app.post('/blogs', (req, res) => {
   const blog = new Blog(req.body)
   blog.save()
   .then((result) => {
       res.redirect('/blogs')
   })
   .catch(err => console.log(err))
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    Blog.findById(id)
    .then((result) => {
        res.render('details', {blog: result, title: 'Blog Details'})
    })
    .catch(err => console.log(err))
})
app.get('/blogs/create', (req, res) => {

    res.render('create', {title: 'Create New Blog'});
});

// 404 Page
app.use((req,res) => {
    
    res.status(404).render('404', {title: 'Error!'});
});
