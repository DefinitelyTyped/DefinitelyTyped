import * as synthetics from 'Synthetics';

export const handler = async () => {
    const page = synthetics.getPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: '/tmp/example.png' });
};
