import express, {Express} from "express";
import * as http from "http";

const socket = require('socket.io');
class App {
    private app: Express;
    private readonly port: any;
    constructor(port: any) {
        this.app = express();
        this.port = port;
        // this.app.use(express.static('/public'));
        this.app.get('/', (req, res) => {
            res.sendFile(__dirname + '/views/index.html')
        })
    }


    run() {
        return new Promise<http.Server>((resolve, reject) => {
            const server = this.app.listen(this.port);
            // resolve(server);
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