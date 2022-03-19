const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
//import Routes

const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);



//Routes
app.get('/',(req,res)=>
{
    res.send('We are on Home');
});


//COnnect to Db

mongoose.connect('mongodb+srv://akash:Akiakash1@cluster0.4gqlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',()=>
console.log('connected to DB !')
);

// How we start listening to ther server
app.listen(3000);
