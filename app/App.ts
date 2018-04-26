import * as express from 'express'

class App{

    public app:express.Application;

    constructor(){
        this.app = express();
        this.middleware();
        this.routs();
    }

    private middleware(): void {

    }

    private routs(): void{

    }
}

export default new App().app;