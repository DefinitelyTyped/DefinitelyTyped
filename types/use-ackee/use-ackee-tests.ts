import { useAckee as useAckeeNamed } from 'use-ackee';
// tslint:disable-next-line no-duplicate-imports
import * as useAckee from 'use-ackee';

useAckeeNamed(
    '/current/path',
    {
        server: 'https://example.com',
        domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
    },
    {
        ignoreLocalhost: true,
        detailed: false,
    },
);

useAckee('/', {
    server: 'https://example.com',
    domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
});
