import telnetlib = require('telnetlib');
import blessed = require('blessed');

const { commands, options, optionState, q, reason, state, where } = telnetlib.constants;
const { GMCP, ECHO, TRANSMIT_BINARY, NAWS, SGA } = telnetlib.options;

() => {
    // Server
    const server = telnetlib.createServer({}, c => {
        c.on('negotiated', () => {
            c.write('Hello World!');
        });

        c.on('data', data => {
            c.write(data);
        });
    });

    server.listen(9001);

    // Client
    const client = telnetlib.createConnection(
        {
            host: '127.0.0.1',
            port: 9001,
        },
        () => {
            client.on('data', data => {
                client.write(data);
            });
        },
    );
};

() => {
    // Server
    const server = telnetlib.createServer(
        {
            localOptions: [GMCP],
        },
        c => {
            const gmcp = c.getOption(GMCP);
            c.on('negotiated', () => {
                gmcp.send('herp', 'derp', 42);
            });

            gmcp.on('gmcp/herp.derp', data => {
                gmcp.send('herp', 'derp', data);
            });
        },
    );

    server.listen(9001);

    // Client
    const client = telnetlib.createConnection(
        {
            host: '127.0.0.1',
            port: 9001,
            remoteOptions: [GMCP],
        },
        () => {
            const gmcp = client.getOption(GMCP);
            gmcp.on('gmcp/herp.derp', data => {
                gmcp.send('herp', 'derp', data);
            });
        },
    );
};

() => {
    const server = telnetlib.createServer(
        {
            remoteOptions: [NAWS, TRANSMIT_BINARY, SGA],
            localOptions: [ECHO, TRANSMIT_BINARY, SGA],
        },
        c => {
            let screen: blessed.Widgets.Screen;

            c.on('negotiated', () => {
                screen = blessed.screen({
                    smartCSR: true,
                    input: c,
                    output: c,
                    height: 80,
                    width: 24,
                    terminal: 'xterm',
                    fullUnicode: true,
                });

                const box = blessed.box({
                    parent: screen,
                    top: 'center',
                    left: 'center',
                    width: '50%',
                    height: '50%',
                    content: 'Hello World',
                    border: 'line',
                });

                screen.render();
            });

            c.on('end', () => {
                if (screen) screen.destroy();
            });
        },
    );

    server.listen(9001);
};
