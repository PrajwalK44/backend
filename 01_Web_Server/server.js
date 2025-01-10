const http = require("http")

const hostname='127.0.0.1'

const port=3000


const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader = ('Content-Type', 'text/plain')   
        res.end("Hello ending response")
    } else if (req.url === '/login') {
        res.statusCode = 200
        res.setHeader = ('Content-Type', 'text/plain')   
        res.end("Login page here")
    } else if (req.url === '/register') {
        res.statusCode = 200
        res.setHeader = ('Content-Type', 'text/plain')   
        res.end("register page here")
    } else {
        res.statusCode = 404
        res.setHeader = ('Content-Type', 'text/plain')   
        res.end("404 Not Found")
    } 
})

server.listen(port, hostname, ()=>{
    console.log(`server is listening at http://${hostname}:${port}`)
})