import socket from "socket.io";
import App from "./App";
const port = 1000;
new App(port)
.run()
.then((server) => {
    const io = new socket.Server(server);
    // console.log(io);
})
.catch((err) => {
    console.error("Something went wrong \n", err);
    process.exit(0)
})