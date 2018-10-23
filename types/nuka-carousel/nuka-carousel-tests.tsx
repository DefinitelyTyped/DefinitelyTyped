import * as React from 'react';
import { render } from 'react-dom';

import Carousel, { CarouselProps } from 'nuka-carousel';

const props: CarouselProps = {
	afterSlide: () => {},
	autoplay: true,
	autoplayInterval: 5000,
	beforeSlide: () => {},
	cellAlign: 'center',
	cellSpacing: 500,
	dragging: true,
	easing: 'easePoly',
	edgeEasing: 'easePolyInOut',
	framePadding: '100px',
	heightMode: 'max',
	initialSlideHeight: 200,
	initialSlideWidth: 500,
	onResize: () => {},
	renderTopLeftControls: () => <button />,
	renderTopCenterControls: () => <button />,
	renderTopRightControls: () => <button />,
	renderCenterLeftControls: () => <button />,
	renderCenterCenterControls: () => <button />,
	renderCenterRightControls: () => <button />,
	renderBottomLeftControls: () => <button />,
	renderBottomCenterControls: () => <button />,
	renderBottomRightControls: () => <button />,
	slideIndex: 2,
	slidesToScroll: 'auto',
	slidesToShow: 1,
	slideWidth: 0.8,
	speed: 2000,
	swiping: true,
	vertical: false,
	width: '500px',
	wrapAround: false
};

class CarouselComponent extends React.Component {
	render() {
		return (
			<Carousel {...props}>
				<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
				<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
				<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
				<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
				<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
				<img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
			</Carousel>
		);
	}
}
