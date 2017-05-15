import * as HapiES6 from 'hapi';
import * as InertES6 from 'inert';

const server = new HapiES6.Server({});
server.register(InertES6, () => {});

server.route({
    path: '',
    method: 'GET',
    file: {
        path: '',
        confine: true,
    },
    directory: {
        path: '',
        listing: true
    }
})

var fileHandler: HapiES6.IFileHandler = {
    path: '',
    confine: true,
}

var directoryHandler: HapiES6.IDirectoryHandler = {
    path: function(){
        if(Math.random() > 0.5) {
            return '';
        }
        else if(Math.random() > 0) {
            return [''];
        }
        return new Error('');
    },
    listing: true,
}
