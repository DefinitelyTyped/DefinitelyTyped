import * as React from 'react';
import { Item } from 'photoswipe';
import { PhotoSwipe, PhotoSwipeGalleryItem, PhotoSwipeGallery } from 'react-photoswipe';

interface State {
    openPhotoSwipe: boolean;
    openPhotoSwipeGallery: boolean;
}

class MyApp extends React.Component<{}, State> {
    state = {
        openPhotoSwipe: false,
        openPhotoSwipeGallery: false,
    };

    itemsInPhotoSwipe = [
        {
            src: 'http://lorempixel.com/1200/900/sports/1',
            w: 1200,
            h: 900,
            title: 'Image 1'
        },
        {
            src: 'http://lorempixel.com/1200/900/sports/2',
            w: 1200,
            h: 900,
            title: 'Image 2'
        }
    ];

    itemsInPhotoSwipeGallery = [
        {
            src: 'http://lorempixel.com/1200/900/sports/1',
            thumbnail: 'http://lorempixel.com/120/90/sports/1',
            w: 1200,
            h: 900,
            title: 'Image 1'
        },
        {
            src: 'http://lorempixel.com/1200/900/sports/2',
            thumbnail: 'http://lorempixel.com/120/90/sports/2',
            w: 1200,
            h: 900,
            title: 'Image 2'
        }
    ];

    openPhotoSwipe = () => {
        this.setState({ openPhotoSwipe: true });
    }

    openPhotoSwipeGallery = () => {
        this.setState({ openPhotoSwipeGallery: true });
    }

    getThumbnailContent = (item: PhotoSwipeGalleryItem) => {
        return (
            <img src={item.thumbnail} width={120} height={90} />
        );
    }

    handleClose = () => { };

    handleBeforeChange = (item: PhotoSwipe) => { console.log(item); };

    handleAfterChange = (item: PhotoSwipe) => { console.log(item); };

    handleImageLoadComplete = (instance: PhotoSwipe, index: number, item: Item) => { console.log(instance, index, item); };

    handleResize = (instance: PhotoSwipe) => { console.log(instance); };

    handleGettingData = (instance: PhotoSwipe, index: number, item: Item) => { console.log(instance, index, item); };

    handleMouseUsed = (instance: PhotoSwipe) => { console.log(instance); };

    handleInitialZoomIn = (instance: PhotoSwipe) => { console.log(instance); };

    handleInitialZoomInEnd = (instance: PhotoSwipe) => { console.log(instance); };

    handleInitialZoomOut = (instance: PhotoSwipe) => { console.log(instance); };

    handleInitialZoomOutEnd = (instance: PhotoSwipe) => { console.log(instance); };

    parseVerticalMargin = (instance: PhotoSwipe, item: Item) => { console.log(instance, item); };

    close = (instance: PhotoSwipe) => { console.log(instance); };

    handleUnbindEvents = (instance: PhotoSwipe) => { console.log(instance); };

    handleDestroy = (instance: PhotoSwipe) => { console.log(instance); };

    handleUpdateScrollOffset = (instance: PhotoSwipe, _offset: { x: number; y: number }) => { console.log(instance, _offset); };

    handlePreventDragEvent = (instance: PhotoSwipe, e: MouseEvent, isDown: boolean, preventObj: { prevent: boolean }) => { console.log(instance, e, isDown, preventObj); };

    handleShareLinkClick = (instance: PhotoSwipe, e: MouseEvent, item: Item) => { console.log(instance, e, item); };

    render() {
        const { openPhotoSwipe, openPhotoSwipeGallery } = this.state;

        return (
            <div>
                <button onClick={this.openPhotoSwipe}>Open PhotoSwipe</button>
                <button onClick={this.openPhotoSwipeGallery}>Open PhotoSwipeGallery</button>
                <PhotoSwipe
                    isOpen={openPhotoSwipe}
                    id="photoSwipe"
                    className="photoSwipe"
                    items={this.itemsInPhotoSwipe}
                    onClose={this.handleClose}
                    beforeChange={this.handleBeforeChange}
                    afterChange={this.handleAfterChange}
                    imageLoadComplete={this.handleImageLoadComplete}
                    resize={this.handleResize}
                    gettingData={this.handleGettingData}
                    mouseUsed={this.handleMouseUsed}
                    initialZoomIn={this.handleInitialZoomIn}
                    initialZoomInEnd={this.handleInitialZoomInEnd}
                    initialZoomOut={this.handleInitialZoomOut}
                    initialZoomOutEnd={this.handleInitialZoomOutEnd}
                    parseVerticalMargin={this.parseVerticalMargin}
                    close={this.close}
                    unbindEvents={this.handleUnbindEvents}
                    destroy={this.handleDestroy}
                    updateScrollOffset={this.handleUpdateScrollOffset}
                    preventDragEvent={this.handlePreventDragEvent}
                    shareLinkClick={this.handleShareLinkClick}
                />
                <PhotoSwipeGallery
                    isOpen={openPhotoSwipeGallery}
                    id="photoSwipeGallery"
                    className="photoSwipeGallery"
                    items={this.itemsInPhotoSwipeGallery}
                    thumbnailContent={this.getThumbnailContent}
                    onClose={this.handleClose}
                    beforeChange={this.handleBeforeChange}
                    afterChange={this.handleAfterChange}
                    imageLoadComplete={this.handleImageLoadComplete}
                    resize={this.handleResize}
                    gettingData={this.handleGettingData}
                    mouseUsed={this.handleMouseUsed}
                    initialZoomIn={this.handleInitialZoomIn}
                    initialZoomInEnd={this.handleInitialZoomInEnd}
                    initialZoomOut={this.handleInitialZoomOut}
                    initialZoomOutEnd={this.handleInitialZoomOutEnd}
                    parseVerticalMargin={this.parseVerticalMargin}
                    close={this.close}
                    unbindEvents={this.handleUnbindEvents}
                    destroy={this.handleDestroy}
                    updateScrollOffset={this.handleUpdateScrollOffset}
                    preventDragEvent={this.handlePreventDragEvent}
                    shareLinkClick={this.handleShareLinkClick}
                />
            </div>
        );
    }
}

export default MyApp;
