$('#input-id').fileinput();
const plugin = $('#input-id').fileinput({ showUpload: false, previewFileType: 'any' });
$('document').on('ready', () => {
    $('#input-id')
        .fileinput({
            uploadUrl: 'http://localhost/file-upload.php',
            uploadUrlThumb: 'http://localhost/file-thumb-upload.php',
            uploadExtraData: {
                uploadToken: 'SOME-TOKEN', // for access control / security
            },
            fileActionSettings: {
                showZoom: false,
                showDrag: () => {
                    return true;
                }
            },
            maxFileCount: 5,
            allowedFileTypes: ['image'], // allow only images
            showCancel: true,
            overwriteInitial: false,
            theme: 'fas',
            deleteUrl: 'http://localhost/file-delete.php',
            preProcessUpload: (fileId, file) => {
                return file;
            },
            browseOnZoneClick: true,
        })
        .on('fileuploaded', (event, previewId, index, fileId) => {
            console.log('File Uploaded', `ID: ${fileId}, Thumb ID: ${previewId}`);
        })
        .on('fileuploaderror', (event, data, msg) => {
            console.log('File Upload Error', `ID: ${data.fileId}, Thumb ID: ${data.previewId}`);
        })
        .on('filebatchuploadcomplete', (event, preview, config, tags, extraData) => {
            console.log('File Batch Uploaded', preview, config, tags, extraData);
        });

    $('#input-id').fileinput('disable');
    $('#input-id').fileinput('enable');
    $('#input-id').fileinput('reset');
    $('#input-id').fileinput('destroy');
    $('#input-id')
        .fileinput('destroy')
        .fileinput({ showPreview: false });
    $('#input-id').attr('disabled', 'disabled');
    $('#input-id').fileinput('refresh');
    $('#input-id').fileinput('refresh', { browseLabel: 'Select...', removeLabel: 'Delete' });
    $('#input-id')
        .fileinput('refresh', { showCaption: false })
        .fileinput('disable');
    $('#input-id')
        .fileinput('clear')
        .fileinput('disable');
    $('#input-id')
        .fileinput('upload')
        .fileinput('disable');
    $('#input-id')
        .fileinput('cancel')
        .fileinput('disable');
    $('#input-id')
        .fileinput('pause')
        .fileinput('disable');
    $('#input-id')
        .fileinput('lock')
        .fileinput('disable');
    $('#input-id')
        .fileinput('resume')
        .fileinput('unlock');
    const fileObj: File = null!;
    $('#input-id').fileinput('addToStack', fileObj);
    $('#input-id').fileinput('addToStack', fileObj, '#input-id');
    $('#input-id').fileinput('clearFileStack');
    const filestack = $('#input-id').fileinput('getFileStack');
    const fstack: File[] = [];
    $.each(filestack, (fileId, fileObj) => {
        if (fileObj !== undefined) {
            fstack.push(fileObj);
        }
    });
    const files = $('#input-id').fileinput('getFileList');
    const filesCount = $('#input-id').fileinput('getFilesCount');
    const totalFilesCount = $('#input-id').fileinput('getFilesCount', true);
    $('#input-id').fileinput('readFiles', files);
    $('#input-id').fileinput('zoom', 'preview-123882');
    const preview = $('#input-id').fileinput('getPreview'); // $ExpectType PreviewInfo
    const exif = $('#input-id').fileinput('getExif', 'yourThumbFrameId');
    $('#input1').fileinput('getFrames');
    $('#input2').fileinput('getFrames', '.file-preview-initial');
    $('#input3').fileinput('getFrames', ':not(.file-preview-success)');
    $('#input1').fileinput({
        uploadUrl: () => {
            return 'http://localhost/file-upload.php';
        },
        uploadUrlThumb: () => {
            return 'http://localhost/file-thumb-upload.php';
        },
    });
});
