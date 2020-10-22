import { Server, createServer } from 'http';
import serveHandler from 'serve-handler';

const serveDirectory = (path: string, port: number) =>
    new Promise<Server>(resolve => {
        const server = createServer((req, res) =>
            serveHandler(req, res, {
                public: path,
                cleanUrls: true,
                directoryListing: false,
                etag: false,
                headers: [
                    {
                        source: '/foobar',
                        headers: [{ key: 'Content-Type', value: 'foo/bar' }],
                    },
                ],
                redirects: [{ source: '/foo', destination: '/bar', type: 302 }],
                renderSingle: false,
                rewrites: [{ source: '/source', destination: '/destination' }],
                symlinks: false,
                trailingSlash: false,
                unlisted: ['/not-me'],
            }),
        );

        server.listen(port, () => resolve(server));
    });

serveDirectory('/path/to/www', 1234);
