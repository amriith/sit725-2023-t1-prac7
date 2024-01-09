let express = require('express');
let app = express();

let port = process.env.port || 3000;
require('./Dbconnections');
let router = require('./router/router');
let collection;
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

io.on('connection', (socket) => {
    console.log('New User connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10)
        )
    },1000)
})

app.listen(port, ()=>{
    console.log('express server started');  
});
