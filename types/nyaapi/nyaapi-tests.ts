import { si, pantsu } from 'nyaapi';

si.search('clannad', 1);
si.searchAll('clannad');
si.searchByUser('Judas', 'clannad', 1);
si.searchAllByUser('Judas', 'clannad');
si.searchPage('clannad', 1);
si.searchByUserAndByPage('Judas', 'clannad', 1, 10);

pantsu.search('clannad', 1);
pantsu.searchAll('clannad');
pantsu.infoRequest(1027148);
pantsu.checkUser(1);
