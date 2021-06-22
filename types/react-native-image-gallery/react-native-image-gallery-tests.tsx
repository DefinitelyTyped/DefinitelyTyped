import * as React from 'react';
import { Text, View } from 'react-native';
import Gallery, { Image } from 'react-native-image-gallery';

interface State {
    index: number;
    images: Array<Image & { caption?: string }>;
}

export default class DemoGallery extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            index: 0,
            images: [
                {
                    caption: 'This image is bundled with the app, so you must provide dimensions for it',
                    source: require('./static/images/placehold.jpg'),
                    dimensions: { width: 540, height: 720 },
                },
                {
                    caption: 'This image has a broken URL',
                    source: { uri: 'http://wrongdomain.tld/images/wrongimage.jpg' },
                },
                {
                    caption: 'Remote image with supplied dimensions',
                    source: { uri: 'http://i.imgur.com/gSmWCJF.jpg' },
                    dimensions: { width: 1200, height: 800 },
                },
                { caption: 'Caption 4', source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                { caption: 'Caption 5', source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { caption: 'Caption 6', source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { caption: 'Caption 7', source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } },
                { caption: 'Caption 8', source: { uri: 'http://i.imgur.com/BN8RVGa.jpg' } },
                { caption: 'Caption 9', source: { uri: 'http://i.imgur.com/jXbhTbv.jpg' } },
                { caption: 'Caption 10', source: { uri: 'http://i.imgur.com/30s12Qj.jpg' } },
                { caption: 'Caption 11', source: { uri: 'http://i.imgur.com/4A1Q49y.jpg' } },
                { caption: 'Caption 12', source: { uri: 'http://i.imgur.com/JfVDTF9.jpg' } },
                { caption: 'Caption 13', source: { uri: 'http://i.imgur.com/Vv4bmwR.jpg' } },
            ],
        };
        this.onChangeImage = this.onChangeImage.bind(this);
        this.addImages();
        this.removeImages();
        this.removeImage(2, 3000);
    }

    addImages() {
        // Debugging helper : keep adding images at the end of the gallery.
        setInterval(() => {
            const newArray = [...this.state.images, { source: { uri: 'http://i.imgur.com/DYjAHAf.jpg' } }];
            this.setState({ images: newArray });
        }, 5000);
    }

    removeImage(slideIndex: number, delay: number) {
        // Debugging helper : remove a given image after some delay.
        // Ensure the gallery doesn't crash and the scroll is updated accordingly.
        setTimeout(() => {
            const newArray = this.state.images.filter((element, index) => index !== slideIndex);
            this.setState({ images: newArray });
        }, delay);
    }

    removeImages() {
        // Debugging helper : keep removing the last slide of the gallery.
        setInterval(() => {
            const { images } = this.state;
            console.log(images.length);
            if (images.length <= 1) {
                return;
            }
            const newArray = this.state.images.filter((element, index) => index !== this.state.images.length - 1);
            this.setState({ images: newArray });
        }, 2000);
    }

    onChangeImage(index: number) {
        this.setState({ index });
    }

    renderError() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>
                    This image cannot be displayed...
                </Text>
                <Text style={{ color: 'white', fontSize: 15, fontStyle: 'italic' }}>... but this is fine :)</Text>
            </View>
        );
    }

    getCaption() {
        const { images, index } = this.state;
        return (
            <View
                style={{
                    bottom: 0,
                    height: 65,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    width: '100%',
                    position: 'absolute',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontStyle: 'italic' }}>
                    {(images[index] && images[index].caption) || ''}{' '}
                </Text>
            </View>
        );
    }

    getGalleryCount() {
        const { index, images } = this.state;
        return (
            <View
                style={{
                    top: 0,
                    height: 65,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    width: '100%',
                    position: 'absolute',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        textAlign: 'right',
                        color: 'white',
                        fontSize: 15,
                        fontStyle: 'italic',
                        paddingRight: '10%',
                    }}
                >
                    {index + 1} / {images.length}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Gallery
                    style={{ flex: 1, backgroundColor: '#696969' }}
                    images={this.state.images}
                    errorComponent={this.renderError}
                    onPageSelected={this.onChangeImage}
                    initialPage={0}
                />
                {this.getGalleryCount()}
                {this.getCaption()}
            </View>
        );
    }
}
