import Dots, { IDotsProps } from 'react-carousel-dots';
import React from 'react';

const initProps: IDotsProps = {
  length: 10,
  active: 2,
  size: 10,
  visible: 5,
  className: 'test-class-name',
};

class DotsTest extends React.Component {
  render() {
    return (
      <div>
        <Dots {...initProps} />
      </div>
    );
  }
}
