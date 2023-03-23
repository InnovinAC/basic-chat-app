// import {Server} from "socket.io";
const socket = require('socket.io');
import App from "./App";
const port = 1000;
new App(port)
.run()
.then((app) => {
    try {
        const io = new socket.Server(app);
        io.on('connection', () => {
            console.log('hi')
            console.log('socket up and running')
        })

    } catch (e) {
        return console.error('A socket error occurred \n', e);
    }
})
.catch((err) => {
    console.error("Something went wrong \n", err);
    process.exit(0)
})