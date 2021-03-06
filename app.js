require('dotenv').config();

const express = require('express');

const app = express();

const path = require('path');

const UserRoute = require("./Controllers/UserController")

const PORT = process.env.PORT || 4000;

const cors = require('cors')

app.use(cors({origin: '*'}));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(UserRoute);


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

  
app.listen(PORT,()=>{

    console.log('\x1b[33m%s\x1b[0m',`NODEJS SERVER RUNNING ON PORT:${PORT}`)

});