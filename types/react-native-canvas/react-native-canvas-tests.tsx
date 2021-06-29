import * as React from 'react';
import { Image, ScrollView, StatusBar, View, ImageSourcePropType } from 'react-native';
import Canvas, { Image as CanvasImage, Path2D, ImageData } from 'react-native-canvas';

const Example = ({ sample, children }: { sample: ImageSourcePropType; children: React.ReactNode }) => (
    <View>
        <View>{children}</View>
        <View>
            <Image source={sample} />
        </View>
    </View>
);

class CanvasTest extends React.Component {
    handleImageData(canvas: Canvas) {
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');
        context.fillStyle = 'purple';
        context.fillRect(0, 0, 100, 100);

        context.getImageData(0, 0, 100, 100).then(imageData => {
            const data = Object.values(imageData.data);
            const length = Object.keys(data).length;
            for (let i = 0; i < length; i += 4) {
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
            }
            const imgData = new ImageData(canvas, data, 100, 100);
            context.putImageData(imgData, 0, 0);
        });
    }

    handlePurpleRect(canvas: Canvas) {
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');

        context.fillStyle = 'purple';
        context.fillRect(0, 0, 100, 100);
        context.lineCap = 'round';
        context.strokeStyle = 'blue';
        context.strokeRect(0, 0, 100, 100);

        const { width } = context.measureText('yo');
    }

    handleRedCircle(canvas: Canvas) {
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');

        context.fillStyle = 'red';
        context.arc(50, 50, 49, 0, Math.PI * 2, true);
        context.fill();
    }

    handleImageRect(canvas: Canvas) {
        const image = new CanvasImage(canvas);
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');

        image.src =
            'https://upload.wikimedia.org/wikipedia/commons/6/63/Biho_Takashi._Bat_Before_the_Moon%2C_ca._1910.jpg';
        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 100, 100);
        });
    }

    handlePath(canvas: Canvas) {
        canvas.width = 100;
        canvas.height = 100;
        const context = canvas.getContext('2d');

        context.fillStyle = 'red';
        context.fillRect(0, 0, 100, 100);

        const ellipse = new Path2D(canvas);
        ellipse.ellipse(50, 50, 25, 35, (45 * Math.PI) / 180, 0, 2 * Math.PI);
        context.fillStyle = 'purple';
        context.fill(ellipse);

        context.save();
        context.scale(0.5, 0.5);
        context.translate(50, 20);
        const rectPath = new Path2D(canvas, 'M10 10 h 80 v 80 h -80 Z');

        context.fillStyle = 'pink';
        context.fill(rectPath);
        context.restore();
    }

    handleGradient(canvas: Canvas) {
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 200, 0);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, 'white');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 100, 100);
    }

    handleEmbedHTML(canvas: Canvas) {
        const image = new CanvasImage(canvas);
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');

        const htmlString = '<b>Hello, World!</b>';
        const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <foreignObject width="100%" height="100%">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 40px; background: lightblue; width: 100vw; height: 100vh;">
                  <span style="background: pink;">
                    ${htmlString}
                  </span>
                </div>
            </foreignObject>
        </svg>
        `;
        image.src = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 100, 100);
        });
    }

    handleToDataURL(canvas: Canvas) {
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');

        context.fillStyle = 'purple';
        context.fillRect(0, 0, 100, 100);

        canvas.toDataURL().then((dataURL: string) => {
            void dataURL;
        });

        canvas.toDataURL('image/jpeg', 0.7).then((dataURL: string) => {
            void dataURL;
        });
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <ScrollView>
                    <Example sample={require('./images/purple-black-rect.png')}>
                        <Canvas ref={this.handleImageData} />
                    </Example>
                    <Example sample={require('./images/purple-rect.png')}>
                        <Canvas ref={this.handlePurpleRect} />
                    </Example>
                    <Example sample={require('./images/red-circle.png')}>
                        <Canvas ref={this.handleRedCircle} />
                    </Example>
                    <Example sample={require('./images/image-rect.png')}>
                        <Canvas ref={this.handleImageRect} />
                    </Example>
                    <Example sample={require('./images/path.png')}>
                        <Canvas ref={this.handlePath} />
                    </Example>
                    <Example sample={require('./images/gradient.png')}>
                        <Canvas ref={this.handleGradient} />
                    </Example>
                    <Example sample={require('./images/embed-html.png')}>
                        <Canvas ref={this.handleEmbedHTML} />
                    </Example>
                    <Example sample={require('./images/to-data-url.png')}>
                        <Canvas ref={this.handleToDataURL} />
                    </Example>
                </ScrollView>
            </View>
        );
    }
}
