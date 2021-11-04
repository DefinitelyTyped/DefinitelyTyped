import * as osmosis from 'osmosis';

const logFunction = (log: string) => {
    const myLog = log;
};

const debugFunction = (debug: string) => {
    const myDebug = debug;
};

const errorFunction = (error: string) => {
    const myError = error;
};

const doneFunction = () => {};

// modified example from https://github.com/rchipka/node-osmosis#example

osmosis
    .config({ headers: { 'test-header-name': 'test-header-value' } })
    .headers({ 'test-header-name': 'test-header-value' })
    .header('test-header-name', 'test-header-value')
    .cookie('test-cookie-name', 'test-cookie-value')
    .get('www.craigslist.org/about/sites')
    .find('h1 + div a')
    .set('location')
    .follow('@href')
    .find('header + div + div li > a')
    .set('category')
    .follow('@href')
    .paginate('.totallink + a.button.next:first')
    .find('p > a')
    .follow('@href')
    .set({
        title: 'section > h2',
        description: '#postingbody',
        subcategory: 'div.breadbox > span[4]',
        date: 'time@datetime',
        latitude: '#map@data-latitude',
        longitude: '#map@data-longitude',
        images: ['img@src']
    })
    .data((listing: any) => {
        // do something with listing data
    })
    .log(logFunction)
    .error(errorFunction)
    .debug(debugFunction)
    .done(doneFunction);
