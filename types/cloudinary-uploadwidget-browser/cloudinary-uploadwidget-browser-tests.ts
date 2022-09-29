import 'cloudinary-uploadwidget-browser';

// $ExpectType void
cloudinary.setCloudName('my-cloud-name');
// @ts-expect-error
cloudinary.setCloudName();

// $ExpectType CloudinaryUploadWidget
const widget = cloudinary.createUploadWidget(
    { cloudName: 'my-cloud-name', uploadPreset: 'preset-1' },
    (error, result) => {},
);

widget.open(); // $ExpectType void
widget.open('url'); // $ExpectType void
widget.hide(); // $ExpectType void
widget.show(); // $ExpectType void
widget.close(); // $ExpectType void
widget.close({ quiet: true }); // $ExpectType void
widget.minimize();
widget.destroy(); // $ExpectType void
widget.destroy({ removeThumbnails: true }); // $ExpectType void
widget.isShowing(); // $ExpectType boolean
widget.isMinimized(); // $ExpectType boolean
widget.isDestroyed(); // $ExpectType boolean

// $ExpectType CloudinaryUploadWidget
cloudinary.openUploadWidget(
    {
        cloudName: 'my-cloud-name',
        uploadPreset: 'preset1',
    },
    (error, result) => {},
);

// $ExpectType CloudinaryUploadWidget
cloudinary.applyUploadWidget(
    document.getElementById('opener')!,
    { cloudName: 'my-cloud-name', uploadPreset: 'preset1' },
    (error, result) => {},
);

cloudinary.createUploadWidget({ cloudName: 'my-cloud-name', uploadSignature: 'c347053314777423cd4f' });
cloudinary.createUploadWidget({
    cloudName: 'my-cloud-name',
    uploadSignature: (next, options) => Promise.resolve('c347053314777423cd4f').then(next),
    uploadSignatureTimestamp: 1315060076,
});

// $ExpectType void
widget.update({
    cloudName: 'demo',
    uploadPreset: 'preset1',
    sources: ['local', 'url'],
    encryption: { key: 'ff234fe526725753fa45b53325', iv: 'cd8a46d72e26a365dca78ef' },
    defaultSource: 'local',
    multiple: false,
    maxFiles: 3,

    cropping: true,
    showSkipCropButton: false,
    croppingAspectRatio: null,
    croppingDefaultSelectionRatio: 0.5,
    croppingShowDimensions: true,
    croppingCoordinatesMode: 'face',
    croppingShowBackButton: false,

    dropboxAppKey: 'dropbox',
    facebookAppId: 'facebook',
    googleApiKey: 'google',
    searchBySites: ['all'],
    searchByRights: true,
    instagramClientId: 'instagram',
    googleDriveClientId: 'google_drive',

    publicId: 'profile_11002',
    folder: 'user_photos',
    tags: ['users', 'content'],
    resourceType: 'image',
    context: { alt: 'my_alt', caption: 'my_caption' },

    clientAllowedFormats: ['webp', 'gif', 'videos'],
    maxFileSize: 5500000,
    maxImageFileSize: 1500000,
    maxVideoFileSize: 15000000,
    maxRawFileSize: 2000000,
    maxImageWidth: 2000,
    maxImageHeight: 2000,
    validateMaxWidthHeight: false,
    minImageWidth: 200,
    minImageHeight: 200,
    croppingValidateDimensions: true,
    maxChunkSize: 5000000,

    form: '#my_form',
    thumbnails: '.content .uploaded',
    thumbnailTransformation: 'w_200,h_200,c_fill',

    buttonClass: 'btn btn-default',
    buttonCaption: 'Upload',
    theme: 'minimal',
    styles: {
        palette: {
            window: '#FFF',
            windowBorder: '#90A0B3',
            tabIcon: '#0E2F5A',
            menuIcons: '#5A616A',
            textDark: '#000000',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#0E2F5A',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#E4EBF1',
        },
        fonts: {
            "'Cute Font', cursive": 'https://fonts.googleapis.com/css?family=Cute+Font',
        },
    },
    text: {
        en: {
            queue: {
                title: 'Files to upload',
                title_uploading_with_counter: 'Uploading {{num}} files',
            },
            crop: {
                title: 'Crop your image',
            },
        },
    },

    showPoweredBy: false,
    autoMinimize: false,
    getUploadPresets(cb) {
        cb(['signed', 'video', 'eager']);
    },
    prepareUploadParams() {},
    language: 'en',
    showAdvancedOptions: true,
    showCompletedButton: true,
    showUploadMoreButton: true,
    singleUploadAutoClose: true,
    queueViewPosition: 'right:35px',
    showInsecurePreview: false,
});

cloudinary.createUploadWidget({
    cloudName: 'my-cloud-name',
    form: '#my_form',
    fieldName: 'file',
    thumbnails: '.thumbnails',
    thumbnailTransformation: [{ width: 200, height: 200, crop: 'fill' }, { effect: 'sepia' }],
});

cloudinary.createUploadWidget({
    cloudName: 'demo',
    getTags(cb, prefix) {
        cb(prefix === 'night' ? ['evening', 'dark'] : ['morning', 'sunny']);
    },
    preBatch() {},
    inlineContainer: '#my-widget-container',
});

cloudinary.createUploadWidget({
    cloudName: 'demo',
    inlineContainer: document.getElementById('my-widget-container'),
});

cloudinary.openUploadWidget(
    {
        uploadPreset: 'preset1',
        cloudName: 'demo',
        preBatch: (cb, data) => {
            if (data.files[0].name === 'TopSecret') {
                cb({ cancel: true });
            } else {
                cb();
            }
        },
        prepareUploadParams: (cb, parameters) => {
            const params = ([] as object[]).concat(parameters);
            Promise.all(
                params.map(req =>
                    fetch('https://mysite.example.com/prepare', req)
                        .then(res => res.json())
                        .then(response => ({
                            signature: response.signature,
                            apiKey: response.api_key,
                            ...response.upload_params,
                        })),
                ),
            ).then(results => cb(results.length === 1 ? results[0] : results));
        },
    },
    (error, result) => {},
);

cloudinary.openUploadWidget(
    {
        cloudName: 'demo',
        uploadPreset: 'preset1',
        showCompletedButton: true,
    },
    (error, result) => {
        if (!error && result.event === 'show-completed') {
            result.info.items.forEach(item => {
                console.log(`show completed for item with id:
        ${item.uploadInfo.public_id}`); // uploadInfo is the data returned in the upload response
            });
        }
    },
);
