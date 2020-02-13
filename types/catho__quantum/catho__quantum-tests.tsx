import React = require('react');
import {
    Button,
    Tag,
    Colors,
    Card,
    Accordion,
    Alert,
    Badge,
    Checkbox,
    CheckboxGroup,
    CircularLoader,
    Dropdown,
    Form,
    Validations,
    GlobalStyle,
    IconFont,
    Typography,
    BREAKPOINTS,
    Col,
    Container,
    Hide,
    Row,
    Hamburguer,
    Icon,
    Modal,
    Pagination,
    Popover,
    ProgressBar,
    RadioGroup,
    RangeSlider,
    Skeleton,
    SnackBar,
    Socials,
    Tab,
    TabbedView,
    TextArea,
    Toggle,
    Tooltip,
    Input,
} from 'catho__quantum';

<Button size="small" />;
<Button.Icon />;
<Tag />;
Colors.error[500];
BREAKPOINTS.large.width;
<Card />;
<Card.Content />;
<Card.Header />;
<Card.HeaderText />;
<Card.Footer />;
<Card.Description />;
<Card.Media />;
<Card.Thumbnail src="www.example.com" alt="just an example" />;
<Card.Title />;
<Accordion items={[]} />;
<Alert onClose={() => {}}>Alert Example</Alert>;
<Badge />;
<Checkbox name="example" />;
<CheckboxGroup type="checkbox" />;
<CheckboxGroup.Button name="example 2" />;
<CheckboxGroup.Checkbox name="example 3" />;
<CircularLoader />;
<Dropdown />;
<Form>Form Example</Form>;
Validations.CEP({ value: '37200000' });
Validations.CPF({ value: '123456789' });
Validations.Date({ value: '01/01/2020' });
Validations.Email({ value: 'a@b.com' });
Validations.MaxLength({ value: 'abcdef', maxLength: 10 });
Validations.MinLength({ value: 'abcdef', minLength: 2 });
Validations.Required({ value: 'abc' });
<GlobalStyle />;
<IconFont />;
<Typography />;
<Col />;
<Row>Row Example</Row>;
<Container />;
<Hide />;
<Hamburguer />;
<Icon name="account_circle" />;
<Modal />;
<Pagination totalPages={5} />;
<Popover trigger={Pagination}>Popover Example</Popover>;
<ProgressBar />;
<RadioGroup name="example" />;
<RadioGroup.Button value="test" />;
<RadioGroup.Radio value="test" />;
<RangeSlider />;
<Skeleton />;
<Skeleton.Button size="large" theme={{}} />;
<Skeleton.Circle />;
<Skeleton.Text />;
<Skeleton.Tag theme={{}} size="large" />;
<SnackBar />;
<Socials items={[{}]} />;
<Tab title="It is a title">Tab Example</Tab>;
<TabbedView>TabbedView Example</TabbedView>;
<TextArea />;
<Toggle />;
<Tooltip text="this is a tooltip!">Tooltip example</Tooltip>;
<Input validate={Validations.Date} />;
<Input validate={({ value }: { value?: string }) => `value: ${value}`} />;
<Input validate={{ validate: Validations.Email, error: 'Error test' }} />;
<Input
    validate={[
        Validations.Required,
        ({ value }: { value?: string }) => `value: ${value}`,
        { validate: Validations.Date, error: 'Error test' },
    ]}
/>;
