import express, {Express} from "express";
import socket, {Server} from "socket.io"
import * as http from "http";
class App {
    private app: Express;
    private readonly port: any;
    constructor(port: any) {
        this.app = express();
        this.port = port;
    }

    run() {
        return new Promise<http.Server>((resolve, reject) => {
            const server: http.Server = this.app.listen(this.port);
            server.on('listening', () => {
                console.log(`Now listening on port ${this.port}`)
                resolve(server)
            });
            server.on('error', (err) => {
                reject(err)
            })

        })
    }


}
export default App