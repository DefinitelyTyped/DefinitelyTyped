import * as React from 'react';
import Carousel from "@brainhubeu/react-carousel";

interface PageState {
  carouselValue?: number;
}

interface Card1Props {
  children: JSX.Element;
}

interface Card2Props {
  value: string;
}

class Card1 extends React.Component<Card1Props> {
  render() {
    return <span>Card {this.props.children}</span>;
  }
}

class Card2 extends React.Component<Card2Props> {
  render() {
    return <span>Card {this.props.value}</span>;
  }
}

const FunctionalCard = (props: Card2Props) => (<span>{props.value}</span>);

export default class Page extends React.Component<{}, PageState> {
  static state = {
    carouselValue: undefined,
  };

  carouselOnChange = (value: number) => {
    this.setState({
      carouselValue: value,
    });
  }

  render() {
    return (
      <Carousel
        value={this.state.carouselValue}
        onChange={this.carouselOnChange}
        slidesPerPage={2}
        slidesPerScroll={4}
      >
        <img src="somewhere1" />
        <img src="somewhere2" />
        <Card1><span>123</span></Card1>
        <Card2 value="Something else here" />
        <FunctionalCard value="Etc" />
      </Carousel>
    );
  }
}
