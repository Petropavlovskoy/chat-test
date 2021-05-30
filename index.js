// Подключение всех модулей к программе
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// Отслеживание url адреса и отображение нужной HTML страницы
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Функция, которая сработает при подключении к странице
// Считается как новый пользователь
io.on('connection', (socket) => {
  socket.on('chat message', (data) => {

    io.emit('chat message',{
		message: data.message,
		name: data.name

   });
  });
});

// Отслеживание порта
http.listen(port)