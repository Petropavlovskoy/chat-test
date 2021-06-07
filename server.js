//подключаем библиотеку express
const express = require ('express'); 
//подключаем библиотеку socket.io
const useSocket = require('socket.io')

//создать веб приложение
const app = express();

//сервер будет работать через (app) 
const server = require('http').Server(app);

//useSocket производит изминение server
const io = useSocket(server);

//Map псевдомассив, позволяет производить итеррацию
const rooms = new Map();

//если тебе пришол get запрос, то выполни в-ю
//req то что пользователь передал
//res то что мы передадим пользоаптелю как сервер
app.get('/rooms', (req, res) => {

//set получает два параметра ключ и значение
rooms.set('Hello', '');
//отобразилось в браузере
res.json(rooms);
});

io.on('connectio', socket => {
console.log('user connected', socket);
})

//следим за портом
server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен!');
});


