import * as talkback from 'talkback'

const server = talkback({
    host: 'example.org'
})

server.start(() => server.close())
