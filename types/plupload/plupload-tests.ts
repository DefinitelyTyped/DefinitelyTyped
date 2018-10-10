import 'plupload';

{
    const uploader = new plupload.Uploader({
        browse_button: 'browse', // this can be an id of a DOM element or the DOM element itself
        url: 'upload.php'
    });

    uploader.init();
    uploader.start();

    uploader.bind('FilesAdded', function (up: any, files: any) {
        var html = '';
        plupload.each(files, function (file: any) {
            html += '<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></li>';
        });
        document.getElementById('filelist').innerHTML += html;
    });

    uploader.bind('Error', function (up: any, err: any) {
        document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
    });

    if (!uploader.features.chunks || !uploader.features.multipart) {
        window.alert('Your browser does not support a feature required for uploads.  Try installing Flash or Silverlight.');
    }
}

{
    const settings: plupload_settings = {
        runtimes: 'html5',
        browse_button: '#button',
        container: '#container',
        chunk_size: '1mb',
        url: 'https://fakesite.com/upload',
        flash_swf_url: './plupload.flash.swf',
        silverlight_xap_url: '/Scripts/plupload/js/plupload.silverlight.xap',
        filters:
            {
                max_file_size: '50mb',
                mime_types: [{ title: 'title', extensions: '*' }]
            },
        init: {
            Error: function (up, args) {
            }
        }
    };

    const uploader = new plupload.Uploader(settings);
    uploader.init();
}
