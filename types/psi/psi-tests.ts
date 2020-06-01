/// <reference types="node" />
import psi = require('psi');

(async () => {
    const { data } = await psi('https://theverge.com');
    console.log('Speed score:', data.lighthouseResult.categories.performance.score);
    await psi.output('https://theverge.com');
    console.log('Done');
    const data2 = await psi('https://theverge.com', {
        nokey: 'true',
        strategy: 'desktop',
    });
    console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
    console.log(data.lighthouseResult.audits['screenshot-thumbnails'].details.items);
})();
psi('https://theverge.com').then(({ data }) => {
    console.log('Speed score:', data.lighthouseResult.categories.performance.score);
});
psi('https://theverge.com', {
    nokey: 'true',
    strategy: 'desktop',
}).then(data2 => {
    console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
});
