// import {Server} from "socket.io";
const socket = require('socket.io');
import App from "./App";
const port = 1000;
new App(port)
.run()
.then((app) => {
    try {
        const io = socket(app);
        // io.listen(3000);
       // g('hdhehhje')
        // })

        // add a setTimeout to the document
        io.on('connection', (socket: any) => {
            // socket.
            console.log("new socket: ", socket.id);
            socket.on('new text', (state: any) => {

                console.log('new text put in ', state);
                socket.broadcast.emit('new text', state)
            })

        })


    } catch (e) {
        return console.error('A socket error occurred \n', e);
    }
})
.catch((err) => {
    console.error("Something went wrong \n", err);
    process.exit(0)
})