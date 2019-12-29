import NetKeepAlive = require('net-keepalive')
import * as Net from 'net'

const server = Net.createServer((socket) => {
    socket.setKeepAlive(true, 1000)
    NetKeepAlive.setKeepAliveInterval(socket, 1000)
    NetKeepAlive.setKeepAliveProbes(socket, 1)
    socket.on('end', () => server.close())
})

server.listen(1337, '127.0.0.1', () => {
    const {port, address} = server.address() as Net.AddressInfo
    const clientSocket = Net.createConnection({
        port, host: address
    }, () => {
        clientSocket.setKeepAlive(true, 1000)
        NetKeepAlive.setKeepAliveInterval(clientSocket, 1000)
        NetKeepAlive.setKeepAliveProbes(clientSocket, 1)
        clientSocket.end()
    })
})
