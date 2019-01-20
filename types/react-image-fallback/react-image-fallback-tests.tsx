import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactImageFallback, { ReactImageFallbackProps } from 'react-image-fallback';

class ReactImageFallbackSimple extends React.Component<ReactImageFallbackProps> {
    render() {
        return <ReactImageFallback
            src="my-image.png"
            fallbackImage="my-backup.png" />;
    }
}

class ReactImageFallbackWithOptionals extends React.Component<ReactImageFallbackProps> {
    onLoad(event: ReactDOM.SyntheticEvent<HTMLImageElement>) {
    }

    onError(event: ReactDOM.SyntheticEvent<HTMLImageElement>) {
    }

    render() {
        return <ReactImageFallback
            src="my-image.png"
            fallbackImage="my-backup.png"
            initialImage="loader.gif"
            onLoad={this.onLoad}
            onError={this.onError}
            initialTimeout={1000} />;
    }
}

class ReactImageFallbackWithImageTagProps extends React.Component<ReactImageFallbackProps> {
    render() {
        return <ReactImageFallback
            src="my-image.png"
            fallbackImage="my-backup.png"
            alt="alt text"
            width="123"
            className="customClass" />;
    }
}
