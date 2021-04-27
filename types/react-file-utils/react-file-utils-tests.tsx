import * as React from 'react';
import {
    ImagePreviewer,
    IconButton,
    FileIcon,
    AttachmentIcon,
    FileUploadButton,
    FilePreviewer,
    Thumbnail,
    ThumbnailPlaceholder,
    LoadingIndicator,
    PictureIcon,
    ImageUploadButton,
} from 'react-file-utils';

class MyComponent extends React.Component {
    render(): React.ReactElement<{}> {
        return (<>
            <AttachmentIcon />
            <FileIcon mimeType="image/png" filename="image.png" big/>
            <FileIcon mimeType="image/png" filename="image.png" />
            <FilePreviewer uploads={[]}/>
            <IconButton onClick={() => console.log('IconButton clicked!')}>
                hello
            </IconButton>
            <FileUploadButton>Upload files here</FileUploadButton>
            <ImageUploadButton>Upload images here</ImageUploadButton>
            <PictureIcon />
            <LoadingIndicator />
            <ThumbnailPlaceholder />
            <Thumbnail size={75} handleClose={() => console.log('Hello Wrold')} />
            <ImagePreviewer
                handleRemove={(id) => console.log('Removed image ' + id)}
                handleRetry={(id) => console.log('Retried image ' + id)}
                handleFiles={(files) => {
                    console.log('Selected files');
                    console.log(files);
                }}
            />
        </>);
    }
}
