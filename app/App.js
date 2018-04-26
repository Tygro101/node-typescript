"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routs();
    }
    middleware() {
    }
    routs() {
    }
}
exports.default = new App().app;
