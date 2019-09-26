import * as React from 'react';
import ReactImageGallery, { ReactImageGalleryItem, ReactImageGalleryProps } from 'react-image-gallery';

class ImageGallery extends React.Component {
    private gallery: ReactImageGallery | null;

    componentDidMount() {
        if (this.gallery) {
            const message = `Showing ${this.gallery.getCurrentIndex() + 1}. image the gallery.`;
        }
    }

    render() {
        const galleryItem: ReactImageGalleryItem = {
            original: 'http://localhost/logo.jpg',
            originalTitle: 'My Logo',
            bulletClass: 'my-bullet-class-name',
        };

        const props: ReactImageGalleryProps = {
            items: [galleryItem],
            autoPlay: false,
            showFullscreenButton: false
        };

        return <ReactImageGallery ref={(r) => this.gallery = r} {...props} />;
    }
}
