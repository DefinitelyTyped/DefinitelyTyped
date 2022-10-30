import xhook, { Request, Response } from 'xhook';

xhook.disable();
xhook.enable();

xhook.before((request: Request) => {
    console.log(request.url);
});

xhook.after((_: Request, response: Response) => {
    console.log(response.text);
});

xhook.before((request: Request, callback: (response: Response<Document>) => void) => {
    console.log(request.url);
    callback({
        status: 200,
        data: new Document(),
        headers: {},
        statusText: '',
        text: '',
        xml: new XMLDocument(),
    });
});

xhook.after((_: Request, response: Response<Document>, callback) => {
    console.log(response.data.title);
    callback();
});
