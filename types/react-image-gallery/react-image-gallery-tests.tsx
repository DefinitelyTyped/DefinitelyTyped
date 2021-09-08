import * as React from 'react';
import ReactImageGallery, { ReactImageGalleryItem, ReactImageGalleryProps } from 'react-image-gallery';

class ImageGallery extends React.Component {
    private gallery: ReactImageGallery | null;

    onBeforeSlide(index: number) {
        const message = `onBeforeSlide ${index}`;
    }

    componentDidMount() {
        if (this.gallery) {
            const message = `Showing ${this.gallery.getCurrentIndex() + 1}. image the gallery.`;
        }
    }

    renderThumbInner(item: ReactImageGalleryItem): React.ReactNode {
        return (
            <div className="image-gallery-thumbnail-inner">
                <img src={item.thumbnail} alt={item.thumbnailAlt} title={item.thumbnailTitle} />
                {item.thumbnailLabel && <div className="image-gallery-thumbnail-label">{item.thumbnailLabel}</div>}
            </div>
        );
    }

    // condensed version of https://github.com/xiaolin/react-image-gallery/blob/bb7d7d03070d92bd5f69e3b07bc617deaab36562/example/app.js#L129-L166
    _renderVideo(item: ReactImageGalleryItem) {
        return <div>{item.embedUrl}</div>;
    }

    render() {
        // similar pattern to https://github.com/xiaolin/react-image-gallery/blob/bb7d7d03070d92bd5f69e3b07bc617deaab36562/example/app.js#L31-L45
        const galleryItem: ReactImageGalleryItem[] = [
            {
                original: 'http://localhost/logo.jpg',
                originalTitle: 'My Logo',
                bulletClass: 'my-bullet-class-name',
            },
            {
                thumbnail: `http://localhost/4v.jpg`,
                original: `http://localhost/4v.jpg`,
                embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
                description: 'Render custom slides (such as videos)',
                renderItem: this._renderVideo.bind(this),
            },
            {
                original: `http://localhost/1.jpg`,
                thumbnail: `http://localhost/1t.jpg`,
                originalClass: 'featured-slide',
                thumbnailClass: 'featured-thumb',
                description: 'Custom class for slides & thumbnails',
            },
        ];

        const props: ReactImageGalleryProps = {
            items: galleryItem,
            autoPlay: false,
            showFullscreenButton: false,
            renderThumbInner: this.renderThumbInner,
            disableKeyDown: false,
        };

        return <ReactImageGallery ref={r => (this.gallery = r)} {...props} />;
    }
}
