import * as React from 'react';
import ReactImageGallery, { ReactImageGalleryItem, ReactImageGalleryProps } from 'react-image-gallery';

class ImageGallery extends React.Component {
    render() {
        const galleryItem: ReactImageGalleryItem = {
            original: 'http://localhost/logo.jpg',
            originalTitle: 'My Logo'
        };

        const props: ReactImageGalleryProps = {
            items: [galleryItem],
            autoPlay: false,
            showFullscreenButton: false
        };

        return <ReactImageGallery {...props} />;
    }
}
