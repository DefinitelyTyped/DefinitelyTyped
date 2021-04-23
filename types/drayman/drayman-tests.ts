import { DraymanComponent } from 'drayman';

const component: DraymanComponent = async ({ EventHub, forceUpdate }) => {
    await forceUpdate();
    EventHub.on('event', async () => { });
};
