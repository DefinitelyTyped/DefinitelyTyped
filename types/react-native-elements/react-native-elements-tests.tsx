import * as React from 'react';
import {
    ListView,
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    TextInput
} from 'react-native';
import {
    Button,
    Text,
    Badge,
    Avatar,
    Card,
    ButtonGroup,
    CheckBox,
    Divider,
    FormInput,
    FormValidationMessage,
    FormLabel,
    Header,
    Icon,
    List,
    ListItem,
    PricingCard,
    Rating,
    SearchBar
} from 'react-native-elements';

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
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
                        }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        large
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        xlarge
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                        }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                </View>

                <View>
                    <Text style={AvatarStyles.title}>Avatar with initials</Text>
                    <Avatar
                        small
                        rounded
                        title="MT"
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        title="BP"
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        large
                        title="LW"
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                    <Avatar
                        xlarge
                        rounded
                        title="CR"
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                    />
                </View>

                <View>
                    <Text style={AvatarStyles.title}>Avatar with icons</Text>
                    <Avatar
                        small
                        rounded
                        icon={{ name: 'user' }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{
                            flex: 2,
                            marginLeft: 20,
                            marginTop: 115
                        }}
                    />
                    <Avatar
                        medium
                        overlayContainerStyle={{ backgroundColor: 'blue' }}
                        icon={{ name: 'meetup', color: 'red' }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 3, marginTop: 100 }}
                    />
                    <Avatar
                        large
                        icon={{ name: 'rocket', color: 'orange' }}
                        overlayContainerStyle={{ backgroundColor: 'white' }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 4, marginTop: 75 }}
                    />
                    <Avatar
                        xlarge
                        rounded
                        icon={{ name: 'home' }}
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{ flex: 5, marginRight: 60 }}
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
                <Badge value={3} textStyle={{ color: 'orange' }} />

                <Badge containerStyle={{ backgroundColor: 'violet' }}>
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
                <Button
                    title="BUTTON"
                    onPress={() => this.handleButtonPress()}
                />

                <Button
                    raised
                    icon={{ name: 'cached' }}
                    title="BUTTON WITH ICON"
                    onPress={() => this.handleButtonPress()}
                />

                <Button
                    large
                    iconRight
                    icon={{ name: 'code' }}
                    title="LARGE WITH RIGHT ICON"
                    onPress={() => this.handleButtonPress()}
                />

                <Button
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title="LARGE WITH RIGHT ICON"
                    onPress={() => this.handleButtonPress()}
                />

                <Button
                    large
                    icon={{
                        name: 'squirrel',
                        type: 'octicon',
                        buttonStyle: ButtonStyles.someButtonStyle
                    }}
                    title="OCTICON"
                    onPress={() => this.handleButtonPress()}
                />
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
                avatar:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            }
        ];

        return (
            <View>
                {/* implemented without image with header */}
                <Card title="CARD WITH DIVIDER">
                    {users.map((u, i) => {
                        return (
                            <View key={i}>
                                <Image
                                    resizeMode="cover"
                                    source={{ uri: u.avatar }}
                                />
                                <Text>{u.name}</Text>
                            </View>
                        );
                    })}
                </Card>

                {/* implemented with Text and Button as children */}
                <Card title="HELLO WORLD" image={require('../images/pic2.jpg')}>
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about
                        component structure than actual design.
                    </Text>
                    <Button
                        onPress={() => {}}
                        icon={{ name: 'code' }}
                        backgroundColor="#03A9F4"
                        fontFamily="Lato"
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }}
                        title="VIEW NOW"
                    />
                </Card>
            </View>
        );
    }
}

const component1 = () => <Text>Hello</Text>;
const component2 = () => <Text>World</Text>;
const component3 = () => <Text>ButtonGroup</Text>;

class ButtonGroupTest extends React.Component<any, any> {
    state = {
        selectedIndexStrings: 2,
        selectedIndexObjects: 2
    };

    updateIndexStrings = (selectedIndexStrings: number) => {
        this.setState({ selectedIndexStrings });
    }

    updateIndexObjects = (selectedIndexObjects: number) => {
        this.setState({ selectedIndexObjects });
    }

    render() {
        const buttonStrings = ['Hello', 'World', 'Buttons'];
        const buttonObjects = [
            { element: component1 },
            { element: component2 },
            { element: component3 }
        ];

        const { selectedIndexStrings, selectedIndexObjects } = this.state;
        return (
            <View>
                <ButtonGroup
                    onPress={this.updateIndexStrings}
                    selectedIndex={selectedIndexStrings}
                    buttons={buttonStrings}
                    containerStyle={{ height: 100 }}
                />
                <ButtonGroup
                    onPress={this.updateIndexObjects}
                    selectedIndex={selectedIndexObjects}
                    buttons={buttonObjects}
                    containerStyle={{ height: 100 }}
                    component={TouchableNativeFeedback}
                />
            </View>
        );
    }
}

interface CheckBoxTestState {
    checked: boolean;
}
class CheckBoxTest extends React.Component<any, CheckBoxTestState> {
    state = {
        checked: false
    };
    render() {
        return (
            <View>
                <CheckBox title="Click Here" checked={this.state.checked} />

                <CheckBox
                    center
                    title="Click Here"
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title="Click Here"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title="Click Here to Remove This Item"
                    iconRight
                    iconType="material"
                    checkedIcon="clear"
                    uncheckedIcon="add"
                    checkedColor="red"
                    checked={this.state.checked}
                />
            </View>
        );
    }
}

class DividerTest extends React.Component {
    render() {
        return <Divider style={{ backgroundColor: 'blue' }} />;
    }
}

class FormTest extends React.Component<any, any> {
    input: FormInput;
    onChangeText(text: string) {
        console.log('changed text', text);
    }

    storeFormInput = (input: any) => {
        this.input = input;
    }

    focus() {
        this.input.focus();
    }

    render() {
        return (
            <View>
                <FormLabel>Name</FormLabel>
                <FormInput
                    ref={this.storeFormInput}
                    onChangeText={this.onChangeText}
                />
                <FormValidationMessage>Error message</FormValidationMessage>
            </View>
        );
    }
}

class HeaderTest extends React.Component<any, any> {
    render() {
        return (
            <View>
                <Header
                    leftComponent={<View />}
                    rightComponent={{ icon: 'home', style: { color: '#fff' } }}
                />
                <Header>
                    <View />
                    <View />
                    <View />
                </Header>
            </View>
        );
    }
}

class IconTest extends React.Component<any, any> {
    render() {
        return (
            <View>
                <Icon name="rowing" />
                <Icon name="g-translate" color="#00aced" />
                <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
                <Icon
                    reverse
                    name="ios-american-football"
                    type="ionicon"
                    color="#517fa4"
                />
                <Icon
                    raised
                    name="heartbeat"
                    type="font-awesome"
                    color="#f50"
                    onPress={() => console.log('hello')}
                />
            </View>
        );
    }
}

class ListTest extends React.Component<any, any> {
    list = [
        {
            title: 'Appointments',
            icon: 'av-timer'
        },
        {
            title: 'Trips',
            icon: 'flight-takeoff'
        }
    ];

    render() {
        return (
            <List>
                {this.list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                    />
                ))}
            </List>
        );
    }
}

class PricingCardTest extends React.Component<any, any> {
    render() {
        return (
            <PricingCard
                color="#4f9deb"
                title="Free"
                price="$0"
                info={['1 User', 'Basic Support', 'All Core Features']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
            />
        );
    }
}

class RatingTest extends React.Component {
    ratingCompleted(rating: number) {
        console.log('Rating is: ' + rating);
    }

    render() {
        return (
            <View>
                <Rating
                    showRating
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />

                <Rating
                    showRating
                    type="star"
                    fractions={1}
                    startingValue={3.6}
                    readonly
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                />

                <Rating
                    type="heart"
                    ratingCount={3}
                    fractions={2}
                    startingValue={1.57}
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    showRating
                    style={[{ paddingVertical: 10 }]}
                />
            </View>
        );
    }
}

class SearchBarTest extends React.Component<any, any> {
    searchBar: SearchBar;
    input: TextInput;

    componentDidMount() {
        this.searchBar.focus();
    }

    onChangeText = (text: string) => {
        console.log('text has changed');
    }

    onChangeTextAction = (text: string) => {
        if (text === 'awesome') {
            this.searchBar.blur();
        }
        if (text === 'this is fun') {
            this.searchBar.clearText();
        }
    }

    storeRef(ref: SearchBar) {
        this.searchBar = ref;
        this.input = this.searchBar.input;
    }

    render() {
        return (
            <View>
                <SearchBar
                    onChangeText={this.onChangeTextAction}
                    placeholder="Type Here..."
                    ref={this.storeRef}
                />

                <SearchBar
                    noIcon
                    onChangeText={this.onChangeText}
                    placeholder="Type Here..."
                />

                <SearchBar
                    round
                    onChangeText={this.onChangeText}
                    placeholder="Type Here..."
                />

                <SearchBar
                    lightTheme
                    onChangeText={this.onChangeText}
                    placeholder="Type Here..."
                />
            </View>
        );
    }
}
