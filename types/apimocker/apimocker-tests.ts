import * as ApiMocker from 'apimocker';

const PORT = 7878;

// $ExpectType ApiMocker
const server = ApiMocker.createServer({ quiet: false });

// $ExpectType ApiMocker
server.start(PORT, () => {
    console.log(`API mocker started successfully @${PORT}`);

    // $ExpectType ApiMocker
    server.stop(() => console.log('API mocker stopped successully'));
});
