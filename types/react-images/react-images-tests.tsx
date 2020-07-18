import * as React from 'react';
import Lightbox, { Image } from 'react-images';

interface ImageGalerieState {
    selectedImage: number;
    showLightbox: boolean;
}

class ImageGalerie extends React.Component<undefined, ImageGalerieState> {
    constructor(props: undefined) {
        super(props);
        this.state = {selectedImage: 0, showLightbox: true};
    }

    render() {
        const images: Image[] = [
            {
                src: "http://localhost:8080/img1.jpg",
                alt: "Image 1",
                caption: "Image 1",
            },
            {
                src: "http://localhost:8080/img2.jpg",
                alt: "Image 2",
                caption: "Image 2",
            }];

        return <Lightbox
                    isOpen={this.state.showLightbox}
                    images={images}
                    onClose={() => this.setState({showLightbox: false})}
                    onClickImage={e => {}}
                    onClickNext={() => this.setState({selectedImage: (this.state.selectedImage + 1) % images.length})}
                    onClickPrev={() => this.setState({selectedImage: this.state.selectedImage === 0 ? images.length : this.state.selectedImage - 1})}
                    showThumbnails={true}
                    onClickThumbnail={(index) => this.setState({selectedImage: index})}
                />;
    }
}
