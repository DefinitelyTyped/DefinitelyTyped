import * as React from 'react';
import { LazyLoadComponent, LazyLoadImage, LazyLoadImageProps, trackWindowScroll, ScrollPosition } from 'react-lazy-load-image-component';

interface ImageProps {
  key: string;
  src: string;
  alt: string;
  height: number;
  width: number;
  caption: string;
}

// From https://github.com/Aljullu/react-lazy-load-image-component#lazyloadimage-usage
const MyImage = ({ image }: {image: ImageProps}) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width} />
    <span>{image.caption}</span>
    <img />
  </div>
);

const ImageWithCallbacks = () => (
  <LazyLoadImage
    src="foo.png"
    title="title"
    delayMethod="debounce"
    delayTime={500}
    threshold={200}
    beforeLoad={() => {}}
    afterLoad={() => {}}
    placeholder={<span/>}
    wrapperProps={{
        style: {
            background: '#FFFFFF',
        },
    }}
  />
);

{
  // From src/components/LazyLoadImage.spec.js
  const props: LazyLoadImageProps = {
    beforeLoad: () => null,
    delayMethod: 'debounce',
    delayTime: 600,
    placeholder: null,
    scrollPosition: { x: 0, y: 0 },
    style: {},
    src: 'http://localhost/lorem-ipsum.jpg',
    visibleByDefault: false,
  };
  const lazyLoadImage = (
    <LazyLoadImage
      beforeLoad={props.beforeLoad}
      delayMethod={props.delayMethod}
      delayTime={props.delayTime}
      placeholder={props.placeholder}
      scrollPosition={props.scrollPosition}
      src={props.src}
      style={props.style}
      visibleByDefault={props.visibleByDefault} />
  );
}

{
  const el = (
    <LazyLoadComponent>
      <p style={{}}>Lorem Ipsum</p>
    </LazyLoadComponent>
  );

  const elWithStyle = (
    <LazyLoadComponent
      style={{ marginTop: 100000 }}
    >
      <p>Lorem Ipsum</p>
    </LazyLoadComponent>
  );
}

{
  // From README.md

  const Gallery = ({ images, scrollPosition }: {images: ImageProps[]; scrollPosition: ScrollPosition}) => (
    <div>
      {images.map((image) =>
        <LazyLoadImage
          key={image.key}
          alt={image.alt}
          height={image.height}
          // Make sure to pass down the scrollPosition,
          // this will be used by the component to know
          // whether it must track the scroll position or not
          scrollPosition={scrollPosition}
          src={image.src}
          width={image.width} />
      )}
    </div>
  );
  // Wrap Gallery with trackWindowScroll HOC so it receives
  // a scrollPosition prop to pass down to the images
  const WrappedGallery = trackWindowScroll(Gallery);

  // Omitting scrollPosition is OK but omitting images is not.
  <WrappedGallery images={[]} />;
  // $ExpectError
  <WrappedGallery />;
}
