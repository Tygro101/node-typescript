import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import * as morgan from 'morgan';

export class ServerIo{
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;


    constructor(){
        this.createApp();
        this.createServer();
        this.configureSockets();
        this.middleware();
        this.listen();
    }


    private createApp(): void{
        this.app = express();
    }

    private createServer(): void{
        this.server = createServer(this.app);
    }

    private configureSockets(): void{
        this.io = socketIo(this.server);
    }

    private middleware(): void{
        this.app.use(morgan('dev'));
    }

    private listen(): void {
        this.server.listen(ServerIo.PORT, () => {
            console.log('Running server on port %s', ServerIo.PORT);
        });

        this.io.on('connect', (socket: any) => {  // TODO SocketIO.Socket
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

    public getApp(): express.Application {
        return this.app;
    }

}