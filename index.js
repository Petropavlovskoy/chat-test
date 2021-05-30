const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//обработка данных на сервере, возрат
io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message',{
		message: data.message,
		name: data.name
   });
  });
});
http.listen(port)