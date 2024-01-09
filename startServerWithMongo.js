let express = require('express');
let app = express();

let port = process.env.port || 3000;
require('./Dbconnections');
let router = require('./router/router');
let collection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);


app.listen(port, ()=>{
    console.log('express server started');  
});