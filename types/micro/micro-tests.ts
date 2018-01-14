import micro, { json, RequestHandler, buffer, text, send, createError } from 'micro';
import * as socketIO from 'socket.io';

// Json sample

export const jsonHandler: RequestHandler = async (req, res) => {
    const data = await json(req);
    console.log(data);

    return 'Data logged to your console';
};

// socket.io chat app sample

const html = '<div>some html stuff</div>';

const server = micro(async (req, res) => {
    console.log('Serving index.html');
    res.end(html);
});

const io = socketIO(server);

server.listen(4000);

// Micro expects a function to be exported
module.exports = () => console.log('YOLO');

// body parsing sample

const bodyParsingHandler: RequestHandler = async (req, res) => {
    const buf = await buffer(req);
    console.log(buf);
    // <Buffer 7b 22 70 72 69 63 65 22 3a 20 39 2e 39 39 7d>
    const txt = await text(req);
    // '{"price": 9.99}'
    const js: any = await json(req);
    // { price: 9.99 }
    console.log(js.price);
    return '';
};

// send different status code sample

const statusHandler: RequestHandler = async (req, res) => {
    const statusCode = 400;
    const data = { error: 'Custom error message' };

    send(res, statusCode, data);
};

// createError sample

const errorHandler: RequestHandler = async (req, res) => {
    const data = { error: 'Custom error message' };

    if (data.error) {
        throw createError(429, 'Rate limit exceeded');
    }
};
