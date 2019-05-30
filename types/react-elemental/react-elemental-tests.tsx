import * as React from 'react';
import {
    Alert,
    Button,
    Checkbox,
    colors,
    Elemental,
    Image,
    Link,
    LoadingBar,
    Modal,
    Pulsator,
    RadioGroup,
    SelectList,
    Spacing,
    Spinner,
    Tabs,
    Tag,
    Text,
    TextArea,
    TextField,
    Toast,
    Tooltip
} from 'react-elemental';

class App extends React.Component {
    handleChange = (key: string) => (value: any) => this.setState({ [key]: value });
    onClick: React.MouseEventHandler = (evt) => evt.preventDefault();

    render() {
        return (
            <Elemental
                fontOpts={{
                    primary: { regular: '', bold: '' },
                    secondary: { regular: '', bold: '' }
                }}
            >
                <Spacing size='huge' style={{maxWidth: '900px'}} top bottom right left>
                    <RadioGroup
                        options={[
                            { value: 's', label: 'Small' },
                            { value: 'm', label: 'Medium' },
                            { value: 'l', label: 'Large' },
                            { value: 'xl', label: 'Extra large (out of stock)', disabled: true }
                        ]}
                        value='s'
                        accentColor={colors.blue}
                        style={{ display: 'flex' }}
                        radioRenderer={(option) => (
                            <Spacing key={option.props.value} right>
                                {option}
                            </Spacing>
                        )}
                        onChange={this.handleChange('radio-group')}
                    />
                    <Image
                        src='https://linkiwi.github.io/react-elemental/images/image/map.jpg'
                        alt='Map of Great Britain'
                        color='#b9ad97'
                        width='400px'
                        height='642px'
                    />
                    <Tabs
                        options={[
                            { value: 'one', label: 'one' },
                            { value: 'two', label: 'two' },
                            { value: 'three', label: 'three' },
                        ]}
                        value='one'
                        onChange={this.handleChange('tab')} />
                    <Toast>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Toast>
                    <Modal size='beta'>
                    </Modal>
                    <Tooltip
                        contents={
                            <Text color='gray10' size='kilo' center>
                                Tooltip contents
                            </Text>
                        }
                        bottom
                    >
                        <Text>
                            Text
                        </Text>
                    </Tooltip>
                    <Pulsator size='delta' color={colors.purple} transparent />
                    <Spinner size='alpha' accentColor={colors.orange} duration={1.2} thickness={5} />
                    <Link type='plain' href='' activeColor={colors.black} onClick={this.onClick}>
                        Use plain links to disable the underline on hover
                    </Link>
                    <TextArea
                        placeholder='Type away'
                        style={{
                            height: '100px',
                            width: '600px'
                        }}
                        secondary
                    />
                    <Alert
                        type='warn'
                        size='alpha'
                        title='Dismiss me'
                        message='Click the clear icon toward the right'
                        dismissible
                        onDismiss={() => {}}
                    />
                    <Checkbox
                        label='Disabled state'
                        onChange={this.handleChange('checkbox')}
                        checked={false}
                        disabled
                    />
                    <LoadingBar color={colors.red} thickness={4} duration={500} delay={50} />
                    <Tag
                        text='Dismiss me again'
                        outlineColor={colors.green}
                        backgroundColor={colors.greenLight}
                        dismissible
                    />
                    <SelectList
                        placeholder='Placeholder'
                        width={200}
                        options={[
                            { label: 'Some obnoxiously long label name', value: 'first-item' },
                            { label: 'Second item', value: 'second-item' },
                            { label: 'Third item', value: 'third-item' }
                        ]}
                        onChange={this.handleChange('select-list')}
                        error="That's a bad selection."
                    />
                    <TextField
                        value='Some invalid user input'
                        error="That's not a number."
                        onChange={() => {}}
                        secondary
                    />
                    <Button color={colors.green} size='gamma' text='Colors!' secondary />
                </Spacing>
            </Elemental>
        );
    }
}

export default App;
