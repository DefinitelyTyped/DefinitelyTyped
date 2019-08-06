import { Workbox } from 'workbox-window';

{
    const wb = new Workbox('/sw.js');

    wb.addEventListener('message', (event) => {
        event.target; // $ExpectType Workbox
        event.data; // $ExpectType any
    });

    wb.addEventListener('waiting', (event) => {
        event.isUpdate; // $ExpectType boolean | undefined
    });

    wb.register(); // $ExpectType Promise<ServiceWorkerRegistration>
}
