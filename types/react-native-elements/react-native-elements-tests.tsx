import * as React from 'react';
import {
    ListView,
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    TextInput,
    Animated,
    Dimensions
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
    SearchBar,
    SideMenu,
    Slider,
    SocialIcon,
    SwipeDeck,
    Tabs,
    Tab,
    Tile,
    colors,
    getIconType,
    normalize
} from 'react-native-elements';

const { width, height } = Dimensions.get('window');

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

interface SideMenuTestListItem {
    avatarURL: string;
    name: string;
    subtitle: string;
}

interface SideMenuTestState {
    list: SideMenuTestListItem[];
    isOpen: boolean;
}
class SideMenuTest extends React.Component<any, SideMenuTestState> {
    state = {
        list: [
            {
                avatarURL: 'https://amy.com/img.jpg',
                name: 'Amy',
                subtitle: 'Coding Geek'
            },
            {
                avatarURL: 'https://john.com/img.jpg',
                name: 'John',
                subtitle: 'Love cooking'
            }
        ],
        isOpen: false
    };
    onSideMenuChange(isOpen: boolean) {
        this.setState({
            isOpen
        });
    }

    toggleSideMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    animationStyle = (value: number) => ({
        transform: [
            {
                translateX: value
            }
        ]
    })

    animationFunction = (prop: Animated.Value, value: number) =>
        Animated.spring(prop, {
            toValue: value,
            friction: 8
        })

    render() {
        const MenuComponent = (
            <View
                style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}
            >
                <List containerStyle={{ marginBottom: 20 }}>
                    {this.state.list.map((l, i) => (
                        <ListItem
                            roundAvatar
                            onPress={() => console.log('Pressed')}
                            avatar={l.avatarURL}
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                        />
                    ))}
                </List>
            </View>
        );

        return (
            <SideMenu
                isOpen={this.state.isOpen}
                onChange={this.onSideMenuChange}
                menu={MenuComponent}
                animationStyle={this.animationStyle}
                animationFunction={this.animationFunction}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'blue'
                    }}
                >
                    <Button
                        title="test button"
                        onPress={this.toggleSideMenu.bind(this)}
                    />
                </View>
            </SideMenu>
        );
    }
}

interface SliderTestState {
    value: number;
}
class SliderTest extends React.Component<any, SliderTestState> {
    state = {
        value: 0.2
    };

    onValueChange = (value: number) => {
        this.setState({ value });
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'stretch',
                    justifyContent: 'center'
                }}
            >
                <Slider
                    value={this.state.value}
                    onValueChange={this.onValueChange}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
}

const SocialIconTest: React.StatelessComponent = () => {
    return (
        <View>
            <SocialIcon type="twitter" />
            <SocialIcon raised={false} type="gitlab" />
            <SocialIcon light type="medium" />
            <SocialIcon light raised={false} type="medium" />
            <SocialIcon title="Sign In With Facebook" button type="facebook" />
            <SocialIcon title="Some Twitter Message" button type="twitter" />
            <SocialIcon button type="medium" />
            <SocialIcon button light type="instagram" />
        </View>
    );
};

const DATA = [
    {
        id: 1,
        text: 'Amanda',
        age: 28,
        uri:
            'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg'
    },
    { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
    {
        id: 3,
        text: 'Scarlett',
        age: 25,
        uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg'
    },
    {
        id: 4,
        text: 'Keira',
        age: 27,
        uri:
            'http://www.bdprimeit.com/wp-content/uploads/Keira-Knightley-Most-beautiful-Hollywood-actress.jpg'
    },
    {
        id: 5,
        text: 'Ashley',
        age: 30,
        uri:
            'https://s-media-cache-ak0.pinimg.com/736x/4c/89/67/4c8967fac1822eeddf09670565430fd5.jpg'
    },
    {
        id: 6,
        text: 'Jennifer',
        age: 24,
        uri:
            'https://2.bp.blogspot.com/-Vy0NVWhQfKo/Ubma2Mx2YTI/AAAAAAAAH3s/LC_u8LRfm8o/s1600/aimee-teegarden-04.jpg'
    },
    {
        id: 7,
        text: 'Sarah',
        age: 28,
        uri:
            'https://s-media-cache-ak0.pinimg.com/736x/41/75/26/4175268906d97492e4a3175eab95c0f5.jpg'
    }
];

class SwipeDeckTest extends React.Component {
    renderCard(card: any) {
        return (
            <Card
                key={card.id}
                containerStyle={{
                    borderRadius: 10,
                    width: width * 0.92,
                    height: height - 165
                }}
                featuredTitle={`${card.text}, ${card.age}`}
                featuredTitleStyle={{
                    position: 'absolute',
                    left: 15,
                    bottom: 10,
                    fontSize: 30
                }}
                image={{ uri: card.uri }}
                imageStyle={{
                    borderRadius: 10,
                    width: width * 0.915,
                    height: height - 165
                }}
            />
        );
    }

    onSwipeRight(card: any) {
        console.log('Card liked: ' + card.text);
    }

    onSwipeLeft(card: any) {
        console.log('Card disliked: ' + card.text);
    }

    renderNoMoreCards() {
        return (
            <Card
                containerStyle={{
                    borderRadius: 10,
                    width: width * 0.92,
                    height: height - 165
                }}
                featuredTitle="No more cards"
                featuredTitleStyle={{ fontSize: 25 }}
                image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
                imageStyle={{
                    borderRadius: 10,
                    width: width * 0.915,
                    height: height - 165
                }}
            />
        );
    }
    render() {
        return (
            <SwipeDeck
                data={DATA}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards}
                onSwipeRight={this.onSwipeRight}
                onSwipeLeft={this.onSwipeLeft}
            />
        );
    }
}

interface TabTestState {
    selectedTab: string;
}

class TabsTest extends React.Component<{}, TabTestState> {
    state = {
        selectedTab: 'profile'
    };

    changeTab = (selectedTab: string) => {
        this.setState({ selectedTab });
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <Tabs>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'feed'}
                    title={selectedTab === 'feed' ? 'FEED' : undefined}
                    renderIcon={() => (
                        <Icon
                            containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 12
                            }}
                            color={'#5e6977'}
                            name="whatshot"
                            size={33}
                        />
                    )}
                    renderSelectedIcon={() => (
                        <Icon color={'#6296f9'} name="whatshot" size={30} />
                    )}
                    onPress={() => this.changeTab('feed')}
                >
                    <View />
                </Tab>
                <Tab
                    titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
                    selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
                    selected={selectedTab === 'profile'}
                    title={selectedTab === 'profile' ? 'PROFILE' : undefined}
                    renderIcon={() => (
                        <Icon
                            containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 12
                            }}
                            color={'#5e6977'}
                            name="person"
                            size={33}
                        />
                    )}
                    renderSelectedIcon={() => (
                        <Icon color={'#6296f9'} name="person" size={30} />
                    )}
                    onPress={() => this.changeTab('profile')}
                >
                    <View />
                </Tab>
            </Tabs>
        );
    }
}

const TileTest: React.StatelessComponent = () => (
    <View>
        <Tile
            imageSrc="image/path/awesome.jpeg"
            title="Lorem ipsum dolor sit amet, consectetur"
            icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
            contentContainerStyle={{ height: 70 }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>Caption</Text>
                <Text>Caption</Text>
            </View>
        </Tile>
        <Tile
            imageSrc="image/path/awesome.jpeg"
            icon={{ name: 'play-circle', type: 'font-awesome' }}
            featured
        />

        <Tile
            imageSrc="image/path/awesome.jpeg"
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
            featured
            caption="Some Caption Text"
        />
    </View>
);

const CustomIcon = getIconType('material');
const fontSize = normalize(20);
const white = colors.white;
