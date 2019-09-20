import imperium from 'imperium';

imperium.role('admin', async (req) => {
    return true;
});

imperium.role('user')
    .can('seeUser', { user: '@' })
    .can('manageUser', { user: '@' });

imperium.role('admin')
    .is('user', { user: '*' });

imperium.can('seeUser');
imperium.can(['seeUser', 'manageUser']);
imperium.can({ action: 'seeUser', user: ':userId' });
imperium.can([{ action: 'manageUser', user: ':userId' }]);
imperium.is('admin');
imperium.is(['admin', 'user']);
