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

}

