import { Component } from 'react';

import {
  CardIOView,
  CardIOUtilities,
  CardDetails,
} from 'react-native-awesome-card-io';

export default class CardIOExample extends Component {
  componentWillMount() {
    CardIOUtilities.preload();
  }

  didScanCard = (card: CardDetails) => {
    console.log(card);
  };

  render() {
    return <CardIOView didScanCard={this.didScanCard} style={{ flex: 1 }} />;
  }
}
