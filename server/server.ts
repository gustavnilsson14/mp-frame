import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 3000 });


console.log("starting on 3000")

wss.on('connection', (ws: IClientState) => {
  ws.on('message', (message: string) => {
    ws.send(`Server received your message: ${message}`);
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

export interface IClientState extends WebSocket{
  id: number,
  loggedIn: boolean,
  userName: string
}