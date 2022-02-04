import { EventEmitter } from 'events';
import { Stream } from 'stream';
import * as HauteCouture from '@hapipal/haute-couture';
import * as Hapi from '@hapi/hapi';

(async () => {
    const server = new Hapi.Server({ port: 3000 });

    const routes = HauteCouture.amendment('routes');

    const { useFilename, ...rest } = HauteCouture.amendment('decorations')


    type MyCustomAmendments = {
        'custom-routes': HauteCouture.AmendmentConfig<
            HauteCouture.HcAmendmentTypes.Decoration<Hapi.Request>
        >
    }

    const amendments: MyCustomAmendments = {
        'custom-routes': {
            signature: ['type', 'options'],
            method: 'decorate',
            useFilename(value, file, path) {

                if (Array.isArray(value)) {

                    return value;
                }

                return value;
            },

        }
    }

    const registerFunction = HauteCouture.composeWith({
        dirname: 'here',
        amendments
    });

    await server.register({
        name: 'test',
        register: registerFunction
    });

    await HauteCouture.compose(
        server,
        {},
        {
            dirname: 'something',
            amendments: {
                anything: {

                    useFilename(value) {

                        return value;
                    }
                }
            }
        }
    )

})();
