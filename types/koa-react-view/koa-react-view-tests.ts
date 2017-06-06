
import * as Koa from 'koa';
import * as View from 'koa-react-view';

interface IOptionsInfo {
    doctype?: string;
    beautify?: boolean;
    cache?: string;
    extname?: string;
    writeResp?: boolean;
    views: string;
    internals?: boolean;
}

const App = new Koa();
const options: IOptionsInfo = {
    views: './views'
};

View(App, options);
