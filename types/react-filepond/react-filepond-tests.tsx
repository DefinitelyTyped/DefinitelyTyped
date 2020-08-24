import * as React from 'react';
import * as filepond from 'react-filepond';

interface AppState {
    files: filepond.FilePondFile[];
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
            files: [],
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
                    chunkUploads={true}
                    oninit={() => this.handleInit()}
                    files={this.state.files.map(f => f.file)}
                    onupdatefiles={fileItems => {
                        // Set current file objects to this.state
                        this.setState({
                            files: fileItems,
                            filenames: fileItems.map(fileItem => fileItem.file.name),
                        });
                    }}
                    styleButtonRemoveItemPosition="bottom right"
                    itemInsertLocationFreedom={false}
                    itemInsertLocation="after"
                >
                    {/* Update current files  */}
                    {this.state.filenames.map(file => (
                        <filepond.FilePondFile key={file} src={file} origin="local" />
                    ))}
                </filepond.FilePond>
            </div>
        );
    }
}
