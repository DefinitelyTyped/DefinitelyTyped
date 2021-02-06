import previewEmail = require('preview-email');
import { Options } from 'preview-email';
import nodemailer = require('nodemailer');
import { Options as NodeMailerOptions } from 'nodemailer/lib/mailer';

// tests for `README Driven Development`
const transport = nodemailer.createTransport({
    jsonTransport: true,
});

const message: NodeMailerOptions = {
    from: 'niftylettuce+from@gmail.com',
    to: 'niftylettuce+to@gmail.com',
    subject: 'Hello world',
    html: '<p>Hello world</p>',
    text: 'Hello world',
    attachments: [{ filename: 'hello-world.txt', content: 'Hello world' }],
};

// note that `attachments` will not be parsed unless you use
// `previewEmail` with the results of `transport.sendMail`
// e.g. `previewEmail(JSON.parse(res.message));` where `res`
// is `const res = await transport.sendMail(message);`
previewEmail(message).then(console.log).catch(console.error);
transport.sendMail(message).then(console.log).catch(console.error);

// tests

const options: Options = {
    dir: './dir',
    id: 'some-id',
    open: true,
    template: './dir/template.pug',
    urlTransform: path => `./dir/${path}`,
};

// async/await
(async () => {
    try {
        await previewEmail(message); // $ExpectType string
        await previewEmail(message, {}); // $ExpectType string
        await previewEmail(message, options); // $ExpectType string
    } catch (error) {
        //
    }
})();
