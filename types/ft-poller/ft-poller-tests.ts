import Poller from 'ft-poller';

interface Data {
    [key: string]: string;
}

const poller = new Poller<Data>({ url: 'example.com' });

poller.start({}); // $ExpectType Promise<Data>
poller.getData(); // $ExpectType Data
