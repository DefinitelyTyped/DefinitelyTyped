import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Appbar,
    Button,
    Checkbox,
    Col,
    Container,
    Divider,
    Dropdown,
    DropdownItem,
    Form,
    Input,
    Option,
    Panel,
    Radio,
    Row,
    Select,
    Tab,
    Tabs,
    Textarea
} from 'muicss/react';

import Appbar2 from 'muicss/lib/react/appbar';
import Button2 from 'muicss/lib/react/button';
import Checkbox2 from 'muicss/lib/react/checkbox';
import Col2 from 'muicss/lib/react/col';
import Container2 from 'muicss/lib/react/container';
import Divider2 from 'muicss/lib/react/divider';
import Dropdown2 from 'muicss/lib/react/dropdown';
import DropdownItem2 from 'muicss/lib/react/dropdown-item';
import Form2 from 'muicss/lib/react/form';
import Input2 from 'muicss/lib/react/input';
import Option2 from 'muicss/lib/react/option';
import Panel2 from 'muicss/lib/react/panel';
import Radio2 from 'muicss/lib/react/radio';
import Row2 from 'muicss/lib/react/row';
import Select2 from 'muicss/lib/react/select';
import Tab2 from 'muicss/lib/react/tab';
import Tabs2 from 'muicss/lib/react/tabs';
import Textarea2 from 'muicss/lib/react/textarea';

class Test extends React.Component {
    render() {
        return (
            <div>
                <Appbar>Test application</Appbar>
                <Container fluid={true}>
                    <Row>
                        <Col md={3} xs={12}>
                            Link
                            <Divider/>
                            Link
                        </Col>
                        <Col md={4} xs={12}>
                            <Tabs defaultSelectedIndex={0}>
                                <Tab label="One">
                                    <Form>
                                        <legend>Test form</legend>

                                        <Input label="Text input"
                                               hint="Type something"
                                               />

                                        <Textarea label="Text area"
                                                  hint="Type lots of something"
                                                  />

                                        <Checkbox label="Check"
                                                  value="whatever"
                                                  defaultChecked={false}
                                                  />

                                        <Radio name="radios"
                                               label="Radio 1"
                                               value="r1"
                                               />

                                        <Radio name="radios"
                                               label="Radio 2"
                                               value="r2"
                                               />

                                        <Radio name="radios"
                                               label="Radio 3"
                                               value="r3"
                                               />

                                        <Dropdown label="dropdown">
                                            <DropdownItem value={1}>One</DropdownItem>
                                            <DropdownItem value={2}>Two</DropdownItem>
                                            <DropdownItem value={3}>Three</DropdownItem>
                                        </Dropdown>

                                        <Select label="select">
                                            <Option value={1} label="One" />
                                            <Option value={2} label="Two" />
                                            <Option value={3} label="Three" />
                                        </Select>

                                        <Button>Submit</Button>
                                    </Form>
                                </Tab>
                                <Tab label="Two">

                                    <Panel>
                                        I'm inside a panel!
                                    </Panel>

                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                    <Button color="primary">button</Button>
                </Container>
            </div>
        );
    }
}

class Test2 extends React.Component {
    render() {
        return (
            <div>
                <Appbar2>Test application</Appbar2>
                <Container2 fluid={true}>
                    <Row2>
                        <Col2 md={3} xs={12}>
                            Link
                            <Divider2/>
                            Link
                        </Col2>
                        <Col2 md={4} xs={12}>
                            <Tabs2 defaultSelectedIndex={0}>
                                <Tab2 label="One">
                                    <Form2>
                                        <legend>Test form</legend>

                                        <Input2 label="Text input"
                                               hint="Type something"
                                        />

                                        <Textarea2 label="Text area"
                                                  hint="Type lots of something"
                                        />

                                        <Checkbox2 label="Check"
                                                  value="whatever"
                                                  defaultChecked={false}
                                        />

                                        <Radio2 name="radios"
                                               label="Radio 1"
                                               value="r1"
                                        />

                                        <Radio2 name="radios"
                                               label="Radio 2"
                                               value="r2"
                                        />

                                        <Radio2 name="radios"
                                               label="Radio 3"
                                               value="r3"
                                        />

                                        <Dropdown2 label="dropdown">
                                            <DropdownItem2 value={1}>One</DropdownItem2>
                                            <DropdownItem2 value={2}>Two</DropdownItem2>
                                            <DropdownItem2 value={3}>Three</DropdownItem2>
                                        </Dropdown2>

                                        <Select2 label="select">
                                            <Option2 value={1} label="One" />
                                            <Option2 value={2} label="Two" />
                                            <Option2 value={3} label="Three" />
                                        </Select2>

                                        <Button2>Submit</Button2>
                                    </Form2>
                                </Tab2>
                                <Tab2 label="Two">

                                    <Panel2>
                                        I'm inside a panel!
                                    </Panel2>

                                </Tab2>
                            </Tabs2>
                        </Col2>
                    </Row2>
                    <Button2 color="primary">button</Button2>
                </Container2>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));
