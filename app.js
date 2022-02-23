const express = require('express');
const { render } = require('express/lib/response');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();

//connect to mongodb
// const dbURI ='mongodb+srv://<username>:<password>@nodetuts.vxfit.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const dbURI ='mongodb+srv://master:tim1Mpwc@nodetuts.vxfit.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => {
    app.listen(3000);
    console.log('connected to db');
})
.catch((err) => {
    console.log(err)
})
// register view engine
app.set('view engine', 'ejs');
// listen for requests


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));



app.get('/', (req, res) => {
 const blogs =[
     {title: 'My blog attempt', snippet: 'here is my first blog attempt...its basic'},
     {title: 'Hello World', snippet: 'Roses are red, violets are blue..but not violet?'},
     {title: 'Faking data is fun', snippet: 'Here are words that I am likely the only person that will ever see it'}
 ]
    res.render('index', {title: 'Home', blogs});
}); 
app.get('/about', (req, res) => {

    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create New Blog'});
})

// 404 Page
app.use((req,res) => {
    
    res.status(404).render('404', {title: 'Error!'});
});
