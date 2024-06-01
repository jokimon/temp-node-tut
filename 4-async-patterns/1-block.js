const http = require('http');


const server = http.createServer((req, res) => {
if(req.url === '/') {
    res.end('Home Page')
}
if(req.url === '/about') {
    // blocking code!! code is synchronous so needs to wait for about page to finish first. this is why async is preferred here.
    for (let i = 0; i < 1000; i++) {
       for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
       } 
    }
    res.end('About Page')
}
res.end('Error Page')
})

server.listen(5003, () => {
    console.log('Server is listening port 5003...')
})