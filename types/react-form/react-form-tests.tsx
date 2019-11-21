import * as React from 'react';
import {
	Form,
	Text,
	TextArea,
	Radio,
	RadioGroup,
	Select,
	Checkbox,
	NestedForm,
	FormValues,
	FormErrors,
	StyledText,
	StyledRadioGroup,
	StyledRadio,
	StyledTextArea,
	StyledCheckbox,
	StyledSelect,
	FieldApi,
	FormField,
	FormApi
} from 'react-form';

// Form Api
class FormApiMethods extends React.Component {
	state = {};

	render() {
		const FormContent = (props: { formApi?: FormApi }) => (
			<form onSubmit={props.formApi ? props.formApi.submitForm : () => {}}>
				<Text field="hello" id="hello" />
				<button type="submit">Submit</button>
			</form>
		);

		return (
			<div>
				<Form>
					{ formApi => (
						<form onSubmit={formApi.submitForm}>
							<Text field="hello" id="hello" />
							<button type="submit">Submit</button>
						</form>
					)}
				</Form>

				<Form render={ formApi => (
					<form onSubmit={formApi.submitForm}>
						<Text field="hello" id="hello" />
						<button type="submit">Submit</button>
					</form>
				)}>
				</Form>

				<Form>
					<FormContent />
				</Form>

				<Form component={FormContent} />
			</div>
		);
	}
}

// Basic Form Example
const statusOptions = [
	{
		label: 'Single',
		value: 'single'
	},
	{
		label: 'In a Relationship',
		value: 'relationship'
	},
	{
		label: "It's Complicated",
		value: 'complicated'
	}
];

class BasicForm extends React.Component {
	render() {
		return (
			<div>
				<Form onSubmit={submittedValues => this.setState({ submittedValues })}>
					{ formApi => (
						<form onSubmit={formApi.submitForm} id="form2">
							<label htmlFor="firstName">First name</label>
							<Text field="firstName" id="firstName" />
							<label htmlFor="lastName">Last name</label>
							<Text field="lastName" id="lastName" />
							<RadioGroup field="gender">
								{ group => (
									<div>
										<label htmlFor="male" className="mr-2">Male</label>
										<Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
										<label htmlFor="female" className="mr-2">Female</label>
										<Radio group={group} value="female" id="female" className="d-inline-block" />
									</div>
								)}
							</RadioGroup>
							<label htmlFor="bio">Bio</label>
							<TextArea field="bio" id="bio" />
							<label htmlFor="authorize" className="mr-2">Authorize</label>
							<Checkbox field="authorize" id="authorize" className="d-inline-block" />
							<label htmlFor="status" className="d-block">Relationship status</label>
							<Select field="status" id="status" options={statusOptions} />
							<button type="submit" className="mb-4 btn btn-primary">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}

// Form with Arrays
class FormWithArrays extends React.Component {
	render() {
		return (
			<div>
				<Form
					onSubmit={submittedValues => this.setState({ submittedValues })}>
					{ formApi => (
						<form onSubmit={formApi.submitForm} id="form3">
							<label htmlFor="firstName2">First name</label>
							<Text field="firstName" id="firstName2" />
							<label htmlFor="friend1">Friend1</label>
							<Text field={['friends', 0]} id="friend1" />
							<label htmlFor="friend2">Friend2</label>
							<Text field={['friends', 1]} id="friend2" />
							<label htmlFor="friend3">Friend3</label>
							<Text field={['friends', 2]} id="friend3" />
							<button type="submit" className="mb-4 btn btn-primary">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}

// Field Syntax
const Friend = ({ i }: {i: number}) => (
	<div>
		<h2>Friend</h2>
		<label htmlFor={`friend-first-${i}`}>First name</label>
		<Text field={['friends', i, 'firstName']} id={`friend-first-${i}`} />
		<label htmlFor={`friend-last-${i}`}>Last name</label>
		<Text field={[['friends', i], 'lastName']} id={`friend-last-${i}`} />
		<label htmlFor={`friend-street-${i}`}>Street</label>
		<Text field={['friends', i, 'address', 'street']} id={`friend-street-${i}`} />
		<label htmlFor={`friend-zip-${i}`}>Zipcode</label>
		<Text field={['friends', i, 'lastName.zip']} id={`friend-zip-${i}`} />
	</div>
);

class FormWithSpecialFieldSyntax extends React.Component {
	render() {
		return (
			<div>
				<Form
					onSubmit={submittedValues => this.setState({ submittedValues })}>
					{ formApi => (
						<form onSubmit={formApi.submitForm} id="syntax-form">
							<label htmlFor="nickname1">Nickname</label>
							<Text field={['nicknames', 0]} id="nickname1" />
							<label htmlFor="nickname2">Nickname</label>
							<Text field={['nicknames', 1]} id="nickname2" />
							<Friend i={0} />
							<Friend i={1} />
							<button type="submit" className="mb-4 btn btn-primary">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}

// Nested Form
const Questions = () => (
	<NestedForm field="questions">
		<Form>
			{ formApi => (
				<div>
					<label htmlFor="color">Whats your favorite color?</label>
					<Text field="color" id="color" />
					<label htmlFor="food">Whats your favorite food?</label>
					<Text field="food" id="food" />
					<label htmlFor="car">Whats type of car do you drive?</label>
					<Text field="car" id="car" />
				</div>
			)}
		</Form>
	</NestedForm>
);

class NestedFormExample extends React.Component {
	render() {
		return (
			<div>
				<Form onSubmit={submittedValues => this.setState({ submittedValues })}>
					{ formApi => (
						<form onSubmit={formApi.submitForm} id="form4">
							<label htmlFor="firstName3">First name</label>
							<Text field="firstName" id="firstName3" />
							<Questions />
							<button type="submit" className="mb-4 btn btn-primary">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}

// Dynamic Forms
class DynamicForm extends React.Component {
	render() {
		return (
			<div>
				<Form
					onSubmit={submittedValues => this.setState({ submittedValues })}>
					{ formApi => (
						<div>
							<button
								onClick={() => formApi.addValue('siblings', '')}
								type="button"
								className="mb-4 mr-4 btn btn-success">Add Sibling</button>
							<form onSubmit={formApi.submitForm} id="dynamic-form">
								<label htmlFor="dynamic-first">First name</label>
								<Text field="firstName" id="dynamic-first" />
								{ formApi.values.siblings && formApi.values.siblings.map((sibling: string, i: number) => (
									<div key={`sibling${i}`}>
										<label htmlFor={`sibling-name-${i}`}>Name</label>
										<Text field={['siblings', i]} id={`sibling-name-${i}`} />
										<button
											onClick={() => formApi.removeValue('siblings', i)}
											type="button"
											className="mb-4 btn btn-danger">Remove</button>
									</div>
								))}
								<button type="submit" className="mb-4 btn btn-primary">Submit</button>
							</form>
						</div>
					)}
				</Form>
			</div>
		);
	}
}

// Array of Nested Forms
const MyFriend = ({ i }: {i: number}) => (
	<NestedForm field={['friends', i]} key={`nested-friend-${i}`}>
		<Form>
			{ formApi => (
				<div>
					<h2>Friend</h2>
					<label htmlFor={`nested-friend-first-${i}`}>First name</label>
					<Text field="firstName" id={`nested-friend-first-${i}`} />
					<label htmlFor={`nested-friend-last-${i}`}>Last name</label>
					<Text field="lastName" id={`nested-friend-last-${i}`} />
				</div>
			)}
		</Form>
	</NestedForm>
);

class FormWithArrayOfNestedForms extends React.Component {
	render() {
		return (
			<div>
				<Form
					onSubmit={submittedValues => this.setState({ submittedValues })}>
					{ formApi => (
						<div>
							<form onSubmit={formApi.submitForm} id="form3">
								<MyFriend i={0} />
								<MyFriend i={1} />
								<MyFriend i={2} />
								<button type="submit" className="mb-4 btn btn-primary">Submit</button>
							</form>
						</div>
					)}
				</Form>
			</div>
		);
	}
}

// Styled Form
class StyledForm extends React.Component {
	errorValidator = (values: FormValues) => {
		const validateFirstName = (firstName: string) => {
			return !firstName ? 'First name is required.' : undefined;
		};
		const validateLastName = (lastName: string) => {
			return !lastName ? 'Last name is required.' : undefined;
		};
		const validateGender = (gender: string) => {
			return !gender ? 'Gender is required.' : undefined;
		};
		const validateBio = (bio: string) => {
			return !bio ? 'Bio is required.' : undefined;
		};
		const validateAuthorize = (authorize: boolean) => {
			return !authorize ? 'Please check authorize.' : undefined;
		};
		const validateStatus = (status: string) => {
			return !status ? 'Status is required.' : undefined;
		};
		return {
			firstName: validateFirstName(values.firstName),
			lastName: validateLastName(values.lastName),
			gender: validateGender(values.gender),
			bio: validateBio(values.bio),
			authorize: validateAuthorize(values.authorize),
			status: validateStatus(values.status)
		};
	}

	warningValidator = (values: FormValues) => {
		const validateFirstName = (firstName: string) => {
			return firstName && firstName.length < 2 ? 'First name must be longer than 2 characters.' : undefined;
		};
		const validateLastName = (lastName: string) => {
			return lastName && lastName.length < 2 ? 'Last name must be longer than 2 characters.' : undefined;
		};
		const validateBio = (bio: string) => {
			return bio && bio.replace(/s+/g, ' ').trim().split(' ').length < 5 ? 'Bio should have more than 5 words.' : undefined;
		};
		return {
			firstName: validateFirstName(values.firstName),
			lastName: validateLastName(values.lastName),
			gender: undefined,
			bio: validateBio(values.bio),
			authorize: undefined,
			status: undefined
		};
	}

	successValidator = (values: FormValues, errors: FormErrors) => {
		const validateFirstName = () => {
			return !errors['firstName'] ? 'Nice name!' : undefined;
		};
		const validateLastName = () => {
			return !errors['lastName'] ? 'Your last name is sick!' : undefined;
		};
		const validateGender = () => {
			return !errors['gender'] ? 'Thanks for entering your gender.' : undefined;
		};
		const validateBio = () => {
			return !errors['bio'] ? 'Cool Bio!' : undefined;
		};
		const validateAuthorize = () => {
			return !errors['authorize'] ? 'You are now authorized.' : undefined;
		};
		const validateStatus = () => {
			return !errors['status'] ? 'Thanks for entering your status.' : undefined;
		};
		return {
			firstName: validateFirstName(),
			lastName: validateLastName(),
			gender: validateGender(),
			bio: validateBio(),
			authorize: validateAuthorize(),
			status: validateStatus()
		};
	}

	render() {
		return <Form
			validateError={this.errorValidator}
			validateWarning={this.warningValidator}
			validateSuccess={this.successValidator}
			onSubmit={submittedValues => this.setState({ submittedValues })}>
			{ formApi => (
				<form onSubmit={formApi.submitForm} id="form2">
					<label htmlFor="firstName">First name</label>
					<StyledText field="firstName" id="firstName" />
					<label htmlFor="lastName">Last name</label>
					<StyledText field="lastName" id="lastName" />
					<label>Choose Gender</label>
					<StyledRadioGroup field="gender">
						{ group => (
							<div>
								<StyledRadio group={group} value="male" id="male" label="Male" className="mr-3 d-inline-block" />
								<StyledRadio group={group} value="female" id="female" label="Female" className="d-inline-block" />
							</div>
						)}
					</StyledRadioGroup>
					<label htmlFor="bio">Bio</label>
					<StyledTextArea field="bio" id="bio" />
					<StyledCheckbox field="authorize" id="authorize" label="Authorize" className="d-inline-block" />
					<label htmlFor="status" className="d-block">Relationship status</label>
					<StyledSelect field="status" id="status" options={statusOptions} />
					<button type="submit" className="mb-4 btn btn-primary">Submit</button>
				</form>
			)}
		</Form>;
	}
}

// Define a custom message component
const Message = ({ color, message }: {color: string, message: string}) => {
	return (
		<div className="mb-4" style={{ color }}>
			<small>{message}</small>
		</div>
	);
};

// Define your custom input
// Note, the ...rest is important because it allows you to pass any
// additional fields to the internal <input>.
class CustomTextWrapper extends React.Component<{
	fieldApi: FieldApi
	onInput: any
}> {
	render() {
		const {
			fieldApi,
			onInput,
			...rest
		} = this.props;

		const {
			getValue,
			getError,
			getWarning,
			getSuccess,
			setValue,
			setTouched,
		} = fieldApi;

		const error = getError();
		const warning = getWarning();
		const success = getSuccess();

		return (
			<div>
				<input
					value={getValue()}
					onInput={(e) => {
						setValue(e.currentTarget.value);
						if (onInput) {
							onInput(e);
						}
					}}
					onBlur={() => {
						setTouched(true);
					}}
					{...rest} />
				{ error ? <Message color="red" message={error} /> : null }
				{ !error && warning ? <Message color="orange" message={warning} /> : null }
				{ !error && !warning && success ? <Message color="green" message={success} /> : null }
			</div>
		);
	}
}

// Use the form field and your custom input together to create your very own input!
const CustomText = FormField(CustomTextWrapper);

const errorValidator = (values: FormValues) => {
	return {
		hello: !values.hello || !values.hello.match(/Hello World/) ? "Input must contain 'Hello World'" : undefined
	};
};

const warningValidator = (values: FormValues) => {
	return {
		hello: !values.hello ||
					 !values.hello.match(/^Hello World$/) ? "Input should equal 'Hello World'" : undefined
	};
};

const successValidator = (values: FormValues) => {
	return {
		hello: values.hello && values.hello.match(/Hello World/) ? "Thanks for entering 'Hello World'!" : undefined
	};
};

class FormWithCustomInput extends React.Component {
	render() {
		return (
			<div>
				<Form
					validateWarning={warningValidator}
					validateSuccess={successValidator}
					validateError={errorValidator}>
					{ formApi => (
						<form onSubmit={formApi.submitForm} id="form5">
							<label htmlFor="firstName4">First name</label>
							<Text field="firstName" id="firstName4" />
							<label htmlFor="hello2">Custom hello world</label>
							<CustomText field="hello" id="hello2" />
							<button type="submit" className="mb-4 btn btn-primary">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}

// Async Validators
const aserrorValidator = (values: FormValues) => {
	return {
		username: !values.username || values.username.trim() === '' ? 'Username is a required field' : undefined
	};
};

const assuccessValidator = (values: FormValues, errors: FormErrors) => {
	return {
		username: !errors.username ? 'Awesome! your username is good to go!' : undefined
	};
};

const doesUsernameExist = (username: string) => new Promise((resolve, reject) => setTimeout(() => {
	// Simulate username check
	if (['joe', 'tanner', 'billy', 'bob'].indexOf(username)) {
		resolve({ error: 'That username is taken', success: null });
	}
	// Simulate request faulure
	if (username === 'reject') {
		reject('Failure while making call to validate username does not exist');
	}
	// Sumulate username success check
	resolve({});
}, 2000));

const asyncValidators = {
	username: async (username: string) => {
		const validations = await doesUsernameExist(username);
		return validations;
	}
};

class AsynchronousFormValidation extends React.Component {
	render() {
		return (
			<div>
				<Form
					validateError={aserrorValidator}
					validateSuccess={assuccessValidator}
					asyncValidators={asyncValidators}>
					{ formApi => (
						<form onSubmit={formApi.submitForm} id="form6">
							<label htmlFor="username">Username</label>
							<Text field="username" id="username" />
							<button type="submit" className="mb-4 btn btn-primary">Submit</button>
						</form>
					)}
				</Form>
			</div>
		);
	}
}

// Nested Async Validators
const NestedNestedFormContent = ({ formApi }: {formApi: FormApi}) => {
	return (
		<div>
			<label htmlFor="username4">Nested Username</label>
			<Text field="username" id="username4" />
		</div>
	);
};

const NestedFormContent = ({ formApi }: {formApi: FormApi}) => {
	return (
		<div>
			<label htmlFor="username3">Nested Username</label>
			<Text field="username" id="username3" />
			<NestedForm field="nestednested">
				<Form
					validateError={errorValidator}
					validateSuccess={successValidator}
					asyncValidators={asyncValidators3}>
					{
						formApi =>
							<NestedNestedFormContent formApi={formApi} />
					}
				</Form>
			</NestedForm>
		</div>
	);
};

const FormContent = ({ formApi }: {formApi: FormApi}) => {
	return (
		<div>
			<form onSubmit={formApi.submitForm} id="form7">
				<label htmlFor="username2">Username</label>
				<Text field="username" id="username2" />
				<NestedForm field="nested">
					<Form
						validateError={errorValidator}
						validateSuccess={successValidator}
						asyncValidators={asyncValidators2}>
						{
							formApi =>
								<NestedFormContent formApi={formApi} />
						}
					</Form>
				</NestedForm>
				<button type="submit" className="mb-4 btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

const naserrorValidator = (values: FormValues) => {
	return {
		username: !values.username || values.username.trim() === '' ? 'Username is a required field' : undefined
	};
};

const nassuccessValidator = (values: FormValues, errors: FormErrors) => {
	return {
		username: !errors.username ? 'Awesome! your username is good to go!' : undefined
	};
};

const nasdoesUsernameExist = (username: string, ms: number) => new Promise((resolve, reject) => setTimeout(() => {
	// Simulate username check
	if (['joe', 'tanner', 'billy', 'bob'].indexOf(username)) {
		resolve({ error: 'That username is taken', success: null });
	}
	// Simulate request faulure
	if (username === 'reject') {
		reject('Failure while making call to validate username does not exist');
	}
	// Sumulate username success check
	resolve({});
}, ms));

const nasasyncValidators = {
	username: async (username: string) => {
		const validations = await nasdoesUsernameExist(username, 2000);
		return validations;
	}
};

const asyncValidators2 = {
	username: async (username: string) => {
		const validations = await nasdoesUsernameExist(username, 4000);
		return validations;
	}
};

const asyncValidators3 = {
	username: async (username: string) => {
		const validations = await nasdoesUsernameExist(username, 6000);
		return validations;
	}
};

class NestedAsynchronousFormValidation extends React.Component {
	render() {
		return (
			<div>
				<Form
					validateError={naserrorValidator}
					validateSuccess={nassuccessValidator}
					asyncValidators={nasasyncValidators}>
					{
						formApi =>
							<FormContent formApi={formApi} />
					}
				</Form>
			</div>
		);
	}
}
