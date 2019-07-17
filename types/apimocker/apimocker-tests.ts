import * as ApiMocker from 'apimocker';
import * as path from 'path';

const PORT = 7878;

// $ExpectType ApiMocker
const server = ApiMocker.createServer({ quiet: false });

// $ExpectType ApiMocker
server.setConfigFile(path.resolve(__dirname, 'apimocker-test.config'));

server.start(PORT, () => {
    console.log(`API mocker started successfully @${PORT}`);
    server.stop(() => console.log('API mocker stopped successully'));
});
