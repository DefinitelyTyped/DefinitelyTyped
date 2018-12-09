import * as React from 'react';
import { View, Text } from 'react-native';
import {
    ActionButton,
    Avatar,
    ThemeContext,
    COLOR,
    Badge,
    Button,
    Card,
    Checkbox,
    Dialog,
    DialogDefaultActions,
    BottomNavigation,
    Toolbar,
    getTheme
} from 'react-native-material-ui';

const theme = {
    palette: {
        accentColor: COLOR.amber500,
        primaryColor: COLOR.indigo700
    },
    fontFamily: 'System'
};

const Example = () =>
    <ThemeContext.Provider value={getTheme(theme)}>
        <View>
            <ActionButton style={{ positionContainer: { marginBottom: 3 }}} />
            <ActionButton icon="done" />

            <Avatar text="A" />
            <Avatar icon="grade" />
            <Avatar icon="person" iconColor="blue" />
            <Avatar icon="history" iconSize={20} />
            <Avatar icon="mic" size={75} />

            <Badge />

            <Button text="I'm a button" />

            <Card>
                <ThemeContext.Consumer>
                    {theme => <Text>Hello world!</Text> }
                </ThemeContext.Consumer>
            </Card>

            <Checkbox label="Select me" value="chicken" onCheck={a => console.log(a)}/>
        </View>
    </ThemeContext.Provider>;

const DialogExample = () =>
    <Dialog>
        <Dialog.Title>
            <Text>Hello world</Text>
        </Dialog.Title>

        <Dialog.Content>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </Dialog.Content>

        <Dialog.Actions>
            <DialogDefaultActions
                actions={['Dismiss', 'Keep']}
                onActionPress={() => {}}
            />
        </Dialog.Actions>
    </Dialog>;

class BottomNavigationExample extends React.Component<null, {active: string}> {
    state = {
        active: 'today'
    };

    render() {
        return (
            <BottomNavigation active={this.state.active} hidden={false} >
                <BottomNavigation.Action
                    key="today"
                    icon="today"
                    label="Today"
                    active={this.state.active === 'today'}
                    onPress={() => this.setState({ active: 'today' })}
                />

                <BottomNavigation.Action
                    key="people"
                    icon="people"
                    label="People"
                    active={this.state.active === 'people'}
                    onPress={() => this.setState({ active: 'people' })}
                />

                <BottomNavigation.Action
                    key="bookmark-border"
                    icon="bookmark-border"
                    label="Bookmark"
                    active={this.state.active === 'bookmark-border'}
                    onPress={() => this.setState({ active: 'bookmark-border' })}
                />

                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    active={this.state.active === 'settings'}
                    onPress={() => this.setState({ active: 'settings' })}
                />
            </BottomNavigation>
        );
    }
}

class ToolbarExample extends React.Component<{}, {search: string}> {
    state = {
        search: ''
    };

    handleResults(search: string) {
        this.setState({ search });
    }

    render() {
        return (
            <Toolbar
                centerElement="Collections"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onChangeText: (text: string) => this.handleResults(text),
                    onSearchCloseRequested: () => this.handleResults(''),
                }}
            />
        );
    }
}
