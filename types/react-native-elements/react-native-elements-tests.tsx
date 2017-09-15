import * as React from 'react';
import { View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';
import { Button, Text, Badge, Avatar, Card } from 'react-native-elements';

class TextTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
      </View>
    );
  }
}

class AvatarTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <View>
          <Text style={AvatarStyles.title}>Avatars</Text>
          <Avatar
            small
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            medium
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            large
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            xlarge
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>

        <View>
          <Text style={AvatarStyles.title}>Avatar with initials</Text>
          <Avatar
            small
            rounded
            title="MT"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            medium
            title="BP"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            large
            title="LW"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Avatar
            xlarge
            rounded
            title="CR"
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>

        <View>
          <Text style={AvatarStyles.title}>Avatar with icons</Text>
          <Avatar
            small
            rounded
            icon={{name: 'user'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
          />
          <Avatar
            medium
            overlayContainerStyle={{backgroundColor: 'blue'}}
            icon={{name: 'meetup', color: 'red'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 3, marginTop: 100}}
          />
          <Avatar
            large
            icon={{name: 'rocket', color: 'orange'}}
            overlayContainerStyle={{backgroundColor: 'white'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 4, marginTop: 75}}
          />
          <Avatar
            xlarge
            rounded
            icon={{name: 'home'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{flex: 5, marginRight: 60}}
          />
        </View>
      </View>
    );
  }
}

const AvatarStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 10
  }
});

class BadgeTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Badge
          value={3}
          textStyle={{ color: 'orange' }}
        />

        <Badge containerStyle={{ backgroundColor: 'violet'}}>
          <Text>User 1</Text>
        </Badge>

        <Badge onPress={() => console.log('pressed')} value="5" />

        <Badge component={TouchableNativeFeedback} value={10} />
      </View>
    );
  }
}

class ButtonTest extends React.Component<any, any> {
  handleButtonPress() {
    console.log('I got pressed');
  }

  render() {
    return (
      <View>
        <Button title='BUTTON' onPress={() => this.handleButtonPress()} />

        <Button
          raised
          icon={{name: 'cached'}}
          title='BUTTON WITH ICON' onPress={() => this.handleButtonPress()} />

        <Button
          large
          iconRight
          icon={{name: 'code'}}
          title='LARGE WITH RIGHT ICON' onPress={() => this.handleButtonPress()} />

        <Button
          large
          icon={{name: 'envira', type: 'font-awesome'}}
          title='LARGE WITH RIGHT ICON' onPress={() => this.handleButtonPress()} />

        <Button
          large
          icon={{name: 'squirrel', type: 'octicon', buttonStyle: ButtonStyles.someButtonStyle }}
          title='OCTICON' onPress={() => this.handleButtonPress()} />
      </View>
    );
  }
}

const ButtonStyles = StyleSheet.create({
  someButtonStyle: {
    color: 'pink'
  }
});

class CardTest extends React.Component<any, any> {
  render() {
    const users = [
      {
         name: 'brynn',
         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
     ];

    return(
      <View>
        {/* implemented without image with header */}
        <Card title="CARD WITH DIVIDER">
          {
            users.map((u, i) => {
              return (
                <View key={i}>
                  <Image
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text>{u.name}</Text>
                </View>
              );
            })
          }
        </Card>

        {/* implemented with Text and Button as children */}
        <Card
          title='HELLO WORLD'
          image={require('../images/pic2.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            onPress={() => {}}
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{
              borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0
            }}
            title='VIEW NOW' />
        </Card>
      </View>
    );
  }
}
