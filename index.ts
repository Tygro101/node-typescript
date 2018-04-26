import * as http from 'http'
import app from './app/App'


const port = '8080'||process.env.PORT;
app.set('port',port)
const server = http.createServer(app);
server.listen(port);

server.on('listening', onListening);

//function to note that Express is listening
function onListening(): void {
  console.log(`Listening on port `+ port);
}


