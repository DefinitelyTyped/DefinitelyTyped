import { si, pantsu } from 'nyaapi';

(async () => {
  si.config.updateBaseUrl('https://nyaa.whatever');

  si.search ('clannad', 1, {category: '1_1', filter: 2});
  si.search({term: 'clannad', n: 1, category: '1_1', filter: 2});

  si.searchAll('clannad', {category: '1_1', filter: 2});
  si.searchByUser('Judas', 'clannad', 1, {category: '1_1', filter: 2});
  si.searchAllByUser('Judas', 'clannad', {category: '1_1', filter: 2});
  si.searchPage('clannad', 1, {category: '1_1', filter: 2});
  si.searchByUserAndByPage('Judas', 'clannad', 1, 10, {category: '1_1', filter: 2});
  si.upload({
      credentials: {
          username: 'my_super_username',
          password: 'my_super_secret_password'
        },
        torrent: '/path/to/my/torrent/file.torrent',
        name: 'Hello.mkv.torrent',
        category: '1_2',
        description: 'A movie saying "Hello" to everyone',
        information: 'my_website.com',
        complete: true
  }).then((data) => console.log(data))
  .catch((err) => console.error(err));

  pantsu.config.updateBaseUrl('https://nyaa.whatever');
  pantsu.search('clannad', 1);
  pantsu.searchAll('clannad');
  pantsu.infoRequest(1027148);
  pantsu.checkUser(1);
})();
