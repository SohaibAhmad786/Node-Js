const http = require("http")


// const server = http.createServer(
//     (req, res) => {
//         res.write("Welcome to our home page")
//         res.end
//     }
// );

// server.listen(1000)

const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            res.end("Welcome to our home page");
        } else if (req.url === '/about') {
            res.end("Welcome to our about page");
        } else {
            res.end(`
            <h1> ooops!</h1>
            <h2>This route does exist</h2>
            <a href="/">Back to Home Page</a>
            `);
        }
    }
);

server.listen(9000)
