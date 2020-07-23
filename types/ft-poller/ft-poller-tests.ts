import Poller from 'ft-poller';

type Data = {
    [key: string]: string;
};

const poller = new Poller<Data>({ url: 'example.com' });

poller.start({}); // $ExpectType Promise<void | Data>
poller.getData(); // $ExpectType Data
