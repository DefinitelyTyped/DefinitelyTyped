import * as React from 'react';
import ReactImageGallery, { ReactImageGalleryItem, ReactImageGalleryProps } from 'react-image-gallery';

class ImageGallery extends React.Component {
    private gallery: ReactImageGallery | null;

    componentDidMount() {
        if (this.gallery) {
            const message = `Showing ${this.gallery.getCurrentIndex() + 1}. image the gallery.`;
        }
    }

    renderThumbInner(item: ReactImageGalleryItem): React.ReactNode {
        return (
            <div className="image-gallery-thumbnail-inner">
                <img
                    src={item.thumbnail}
                    alt={item.thumbnailAlt}
                    title={item.thumbnailTitle}
                />
                {item.thumbnailLabel && (
                    <div className="image-gallery-thumbnail-label">
                        {item.thumbnailLabel}
                    </div>
                )}
            </div>
        );
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
            showFullscreenButton: false,
            renderThumbInner: this.renderThumbInner
        };

        return <ReactImageGallery ref={(r) => this.gallery = r} {...props} />;
    }
}
