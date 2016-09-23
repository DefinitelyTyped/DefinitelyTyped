import * as Hbs from 'koa-hbs';
import * as Koa from 'koa';
import * as Path from 'path';

const app = new Koa();
const hbs = new Hbs();

app.use(hbs.middleware({
    viewPath: Path.join(__dirname, './views')
}));

app.use(function *(next: any) {
    yield this.render('index', {
        title: 'Hello World!'
    });
});

app.listen(3000);
