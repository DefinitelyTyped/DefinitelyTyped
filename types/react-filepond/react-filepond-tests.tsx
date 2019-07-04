import * as React from 'react';
import * as filepond from 'react-filepond';

interface AppState {
    filenames: string[];
}

// Example mostly taken from:
// https://github.com/pqina/react-filepond
class App extends React.Component<{}, AppState> {
    private pond: filepond.FilePond | null;

    constructor(props: {}) {
        super(props);

        this.state = {
            // Set initial files
            filenames: ['index.html'],
        };
    }

    private handleInit() {
        console.log('FilePond instance has initialized', this.pond);
    }

    render() {
        return (
            <div className="App">
                {/* Pass FilePond properties as attributes */}
                <filepond.FilePond
                    ref={ref => (this.pond = ref)}
                    allowMultiple={true}
                    maxFiles={3}
                    server={{
                        process: (field, file, metadata, load, error, progress, abort) => {},
                        revert: (id, load, error) => {},
                        restore: (id, load, error, progress, abort, headers) => {},
                        load: (source, load, error, progress, abort, headers) => {},
                        fetch: (url, load, error, progress, abort, headers) => {},
                    }}
                    oninit={() => this.handleInit()}
                    onupdatefiles={fileItems => {
                        // Set current file objects to this.state
                        this.setState({
                            filenames: fileItems.map(fileItem => fileItem.file.name),
                        });
                    }}
                    labelIdle={'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>'}
                    labelInvalidField={'Field contains invalid files'}
                    labelFileWaitingForSize={'Waiting for size'}
                    labelFileSizeNotAvailable={'Size not available'}
                    labelFileLoading={'Loading'}
                    labelFileLoadError={'Error during load'}
                    labelFileProcessing={'Uploading'}
                    labelFileProcessingComplete={'Upload complete'}
                    labelFileProcessingAborted={'Upload cancelled'}
                    labelFileProcessingError={'Error during upload'}
                    labelFileProcessingRevertError={'Error during revert'}
                    labelFileRemoveError={'Error during remove'}
                    labelTapToCancel={'tap to cancel'}
                    labelTapToRetry={'tap to retry'}
                    labelTapToUndo={'tap to undo'}
                    labelButtonRemoveItem={'Remove'}
                    labelButtonAbortItemLoad={'Abort'}
                    labelButtonRetryItemLoad={'Retry'}
                    labelButtonAbortItemProcessing={'Cancel'}
                    labelButtonUndoItemProcessing={'Undo'}
                    labelButtonRetryItemProcessing={'Retry'}
                    labelButtonProcessItem={'Upload'}
                >
                    {/* Update current files  */}
                    {this.state.filenames.map(file => (
                        <filepond.File key={file} src={file} origin="local" />
                    ))}
                </filepond.FilePond>
            </div>
        );
    }
}
