import NetKeepAlive = require('net-keepalive');
import * as Net from 'net'


let server = Net.createServer((socket) => {
    socket.setKeepAlive(true, 1000)
    NetKeepAlive.setKeepAliveInterval(socket, 1000)
    NetKeepAlive.setKeepAliveProbes(socket, 1)
    socket.on('end', ()=>server.close())
}).listen(1337, '127.0.0.1', ()=>{
    let {port, address} = server.address()
    let clientSocket = Net.createConnection({
        port, host: address
    }, ()=>{
        clientSocket.setKeepAlive(true, 1000)
        NetKeepAlive.setKeepAliveInterval(clientSocket, 1000)
        NetKeepAlive.setKeepAliveProbes(clientSocket, 1)
        clientSocket.end()
    })
})