const http = require('http');
const port = 3000;
const host = 'http:/localhost'
const stats = require('./pcRamUsage.js');

http.createServer((req, res) => {
    let url = req.url;

    if(url == '/stats') {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end('<h1> Seja bem vindo!</h1>');
    }
}).listen(3000, () => console.log(`${host}:${port}`))