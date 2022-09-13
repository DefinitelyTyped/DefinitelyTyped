import HostedGitInfo = require('hosted-git-info');

HostedGitInfo.fromUrl('');
HostedGitInfo.fromUrl('', {});

new HostedGitInfo('github', 'DefinitelyTyped', undefined, 'DefinitelyTyped');

new HostedGitInfo('github', 'webpack-contrib', undefined, 'copy-webpack-plugin', '40e6ae58', 'https');

const info = new HostedGitInfo('gitlab', 'bagrounds', undefined, 'monad-id', '6d3c759b', 'docs');

info.hashformat('');
info.hash();
info.ssh({});
info.sshurl({});
info.browse('', '', {});
info.browse('', {});
info.browse({});
info.docs({});
info.bugs({});
info.https({});
info.git({});
info.shortcut({});
info.path({});
info.tarball({});
info.file('', {});
info.getDefaultRepresentation();
info.toString({});
