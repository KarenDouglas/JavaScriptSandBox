const express = require('express');
const { render } = require('express/lib/response');

const app = express();

// register view engine
app.set('view engine', 'ejs');
// listen for requests

app.listen(3000);

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
app.use((req,res) => {
    
    res.status(404).render('404', {title: 'Error!'});
});
