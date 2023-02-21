const http = require("http")

// server listen form request from user in ui then send some responses to the request
const server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.write("Welcome to our home page")
        res.end()
    }

    if(req.url === "/about"){
        res.write("Welcome to our about page")
        res.end()
    }

    res.end(`
        <h1>OOOPS</h1>
        <p>We can not find the page you look for </p>
    `)
   
})

server.listen(5000)