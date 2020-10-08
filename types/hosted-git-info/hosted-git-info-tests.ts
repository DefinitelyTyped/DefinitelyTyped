import HostedGitInfo = require('hosted-git-info');

HostedGitInfo.fromUrl('');
const result = HostedGitInfo.fromUrl('', {});

result.hashformat('');
result.hash();
result.ssh({});
result.sshurl({});
result.browse('', '', {});
result.browse('', {});
result.browse({});
result.docs({});
result.bugs({});
result.https({});
result.git({});
result.shortcut({});
result.path({});
result.tarball({});
result.file('', {});
result.getDefaultRepresentation();
result.toString({});

new HostedGitInfo('github', 'DefinitelyTyped', undefined, 'DefinitelyTyped');

new HostedGitInfo('github', 'webpack-contrib', undefined, 'copy-webpack-plugin', '40e6ae58', 'https');

new HostedGitInfo('gitlab', 'bagrounds', undefined, 'monad-id', '6d3c759b', 'docs');
