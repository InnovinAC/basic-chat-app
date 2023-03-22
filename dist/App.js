"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
    }
    run() {
        return new Promise((resolve, reject) => {
            const server = this.app.listen(this.port);
            server.on('listening', () => {
                console.log(`Now listening on port ${this.port}`);
                resolve(server);
            });
            server.on('error', (err) => {
                reject(err);
            });
        });
    }
}
exports.default = App;
