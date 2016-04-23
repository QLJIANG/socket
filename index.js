var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
	//response.send('Hello Node.js');
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {//io.on监听事件
    //console.log('a user connect');
    socket.on('chat.message', function(message) {//socket.on监听频道
         //console.log('a new message: ' + message);
        io.emit('chat.message', message);//emit将数据传给客户端，chat.message为频道
    });
});

http.listen(3000, function() {
	console.log('Server start');
});
