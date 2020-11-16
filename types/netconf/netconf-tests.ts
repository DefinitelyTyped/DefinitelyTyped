import * as netconf from 'netconf';

const router = new netconf.Client({
  host: '172.28.128.3',
  username: 'vagrant',
  password: 'password',
});

router.open((err) => {
  if (err) {
    throw err;
  }

  router.rpc('get-arp-table-information', (err, reply) => {
    router.close();
    if (err) {
      throw err;
    }
    // console.log(reply);
  });
});
