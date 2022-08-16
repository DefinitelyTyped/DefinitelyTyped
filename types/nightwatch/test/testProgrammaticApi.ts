// New Programmatic APi
import { Nightwatch } from 'nightwatch';

const client = Nightwatch.createClient({
  browserName: 'firefox',
  headless: true
});

client.updateCapabilities({
  testCapability: 'one, two, three'
});
const browser = async () => {
    await client.launchBrowser();
};
