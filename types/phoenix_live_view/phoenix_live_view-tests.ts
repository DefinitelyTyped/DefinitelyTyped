import { LiveSocket, ViewHookInterface, Uploader } from 'phoenix_live_view';
import { Socket } from 'phoenix';

const S3: Uploader = (entries, onViewError) => {
    entries.forEach(entry => {
        const { url } = entry.meta;
        const xhr = new XMLHttpRequest();
        onViewError(() => xhr.abort());
        xhr.upload.addEventListener('progress', event => {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded / event.total) * 100);
                entry.progress(percent);
            }
        });
        xhr.open('put', url, true);
        xhr.send(entry.file);
    });
};

const Uploaders = { S3 };

const Hooks = {
    ModalScrollLock: {
        mounted(this: ViewHookInterface) {
            document.body.classList.add('overflow-hidden');
        },
        beforeDestroy(this: ViewHookInterface) {
            document.body.classList.remove('overflow-hidden');
        },
    },
};

// $ExpectType LiveSocket
const liveSocket = new LiveSocket('/live', Socket, {
    params: { _csrf_token: 'a csrf token' },
    hooks: Hooks,
    uploaders: Uploaders,
});
