"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
const socketIo = require("socket.io");
const morgan = require("morgan");
class ServerIo {
    constructor() {
        this.createApp();
        this.createServer();
        this.configureSockets();
        this.middleware();
        this.listen();
    }
    createApp() {
        this.app = express();
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    configureSockets() {
        this.io = socketIo(this.server);
    }
    middleware() {
        this.app.use(morgan('dev'));
    }
    listen() {
        this.server.listen(ServerIo.PORT, () => {
            console.log('Running server on port %s', ServerIo.PORT);
        });
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.port);
            //socket.on('message', (m: Message) => {
            //    console.log('[server](message): %s', JSON.stringify(m));
            //    this.io.emit('message', m);
            //});
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
    getApp() {
        return this.app;
    }
}
ServerIo.PORT = 8080;
exports.ServerIo = ServerIo;
