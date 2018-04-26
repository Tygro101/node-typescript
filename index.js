"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_io_1 = require("./server-io");
let app = new server_io_1.ServerIo().getApp();
exports.app = app;
