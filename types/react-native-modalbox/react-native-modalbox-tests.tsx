import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Button
} from 'react-native';
import Modal from 'react-native-modalbox';

interface State {
  isOpen: boolean;
  isDisabled: boolean;
  swipeToClose: boolean;
  sliderValue: number;
}

class Example extends React.Component<{}, State> {
  modal1: Modal;
  modal2: Modal;
  modal3: Modal;
  modal4: Modal;
  modal6: Modal;

  constructor() {
    super({});

    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState() {
    console.log('the open/close of the swipeToClose just changed');
  }

  renderList() {
    const list = [];

    for (let i = 0; i < 50; i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }

    return list;
  }

  render() {
    const BContent = (
      <Button title="X" onPress={() => this.setState({ isOpen: false })} />
    );

    return (
      <View style={styles.wrapper}>
        <Button title=" Basic modal" onPress={() => this.modal1.open()} />
        <Button title="Position top" onPress={() => this.modal2.open()} />
        <Button
          title="Position centered + backdrop + disable"
          onPress={() => this.modal3.open()}
        />
        <Button
          title="Position bottom + backdrop + slider"
          onPress={() => this.modal4.open()}
        />
        <Button
          title=" Backdrop + backdropContent"
          onPress={() => this.setState({ isOpen: true })}
        />
        <Button
          title=" Position bottom + ScrollView"
          onPress={() => this.modal6.open()}
        />

        <Modal
          style={styles.modal}
          ref={(ref: Modal) => (this.modal1 = ref)}
          swipeToClose={this.state.swipeToClose}
          onClosed={() => this.onClose()}
          onOpened={() => this.onOpen()}
          onClosingState={this.onClosingState}
        >
          <Text style={styles.text}>Basic modal</Text>
          <Button
            title={`Disable swipeToClose(${this.state.swipeToClose
              ? 'true'
              : 'false'}`}
            onPress={() =>
              this.setState({ swipeToClose: !this.state.swipeToClose })}
          />
        </Modal>

        <Modal
          style={[styles.modal, styles.modal2]}
          backdrop={false}
          position={'top'}
          ref={(ref: Modal) => (this.modal2 = ref)}
        >
          <Text style={[styles.text, { color: 'white' }]}>Modal on top</Text>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal3]}
          position={'center'}
          ref={(ref: Modal) => (this.modal3 = ref)}
          isDisabled={this.state.isDisabled}
        >
          <Text style={styles.text}>Modal centered</Text>
          <Button
            title={`Disable ${this.state.isDisabled ? 'true' : 'false'}`}
            onPress={() =>
              this.setState({ isDisabled: !this.state.isDisabled })}
          />
        </Modal>

        <Modal
          isOpen={this.state.isOpen}
          onClosed={() => this.setState({ isOpen: false })}
          style={[styles.modal, styles.modal4]}
          position={'center'}
          backdropContent={BContent}
        >
          <Text style={styles.text}>Modal with backdrop content</Text>
        </Modal>

        <Modal
          style={[styles.modal, styles.modal4]}
          position={'bottom'}
          ref={(ref: Modal) => (this.modal6 = ref)}
          swipeArea={20}
        >
          <ScrollView>
            <View style={{ width: screen.width, paddingLeft: 10 }}>
              {this.renderList()}
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: '#3B5998'
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10
  },

  btnModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },

  text: {
    color: 'black',
    fontSize: 22
  }
});
