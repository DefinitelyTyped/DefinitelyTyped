import express = require('express');
import flash = require('connect-flash-plus');

const app = express();

app.use(flash());
app.use(flash({
    unsafe: false
}));

app.use((req: Express.Request, res: Express.Response, next: () => void) => {
    req.flash('flashType');
    req.flash('flashType', 'flashMessage');
    req.flash('flashType', ['multipleMessages', 'oneOfMessages']);
    req.flash();
});
