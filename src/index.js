"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const App_1 = __importDefault(require("./App"));
const port = 1000;
new App_1.default(port)
    .run()
    .then((server) => {
    console.log(socket_io_1.default);
});
