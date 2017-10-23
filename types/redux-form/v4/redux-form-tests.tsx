
import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import {createStore, combineReducers} from 'redux';
import {reduxForm, reducer as reduxFormReducer, ReduxFormProps} from 'redux-form';


namespace SimpleForm {
  export const fields = ['firstName', 'lastName', 'email', 'sex', 'favoriteColor', 'employed', 'notes'];

  class SimpleForm extends Component<ReduxFormProps<SimpleForm & HTMLFormElement>> {
    static propTypes = {
      fields: PropTypes.object.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      resetForm: PropTypes.func.isRequired,
      submitting: PropTypes.bool.isRequired
    };

    render() {
      const {
        fields: {firstName, lastName, email, sex, favoriteColor, employed, notes},
        handleSubmit,
        resetForm,
        submitting
        } = this.props;
      return (<form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <input type="text" placeholder="First Name" {...firstName}/>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input type="text" placeholder="Last Name" {...lastName}/>
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input type="email" placeholder="Email" {...email}/>
            </div>
          </div>
          <div>
            <label>Sex</label>
            <div>
              <label>
                <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
              </label>
              <label>
                <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
              </label>
            </div>
          </div>
          <div>
            <label>Favorite Color</label>
            <div>
              <select {...favoriteColor}>
                <option></option>
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </select>
            </div>
          </div>
          <div>
            <label>
              <input type="checkbox" {...employed}/> Employed
            </label>
          </div>
          <div>
            <label>Notes</label>
            <div>
              <textarea
                {...notes}
                value={notes.value || ''}
              />
            </div>
          </div>
          <div>
            <button disabled={submitting} onClick={handleSubmit}>
              {submitting ? <i/> : <i/>} Submit
            </button>
            <button disabled={submitting} onClick={resetForm}>
              Clear Values
            </button>
          </div>
        </form>
      );
    }
  }

  const Connected = reduxForm({
    form: 'simple',
    fields
  })(SimpleForm);
}


namespace SynchronousValidation {
  export const fields = ['username', 'email', 'age'];

  const validate = (values:any) => {
    const errors:any = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.age) {
      errors.age = 'Required';
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number';
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old';
    }
    return errors;
  };

  class SynchronousValidationForm extends Component<ReduxFormProps<SynchronousValidationForm & HTMLFormElement>> {
    static propTypes = {
      fields: PropTypes.object.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      resetForm: PropTypes.func.isRequired,
      submitting: PropTypes.bool.isRequired
    };

    render() {
      const {fields: {username, email, age}, resetForm, handleSubmit, submitting} = this.props;
      return (<form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <div>
              <input type="text" placeholder="Username" {...username}/>
            </div>
            {username.touched && username.error && <div>{username.error}</div>}
          </div>
          <div>
            <label>Email</label>
            <div>
              <input type="text" placeholder="Email" {...email}/>
            </div>
            {email.touched && email.error && <div>{email.error}</div>}
          </div>
          <div>
            <label>Age</label>
            <div>
              <input type="text" placeholder="Age" {...age}/>
            </div>
            {age.touched && age.error && <div>{age.error}</div>}
          </div>
          <div>
            <button disabled={submitting} onClick={handleSubmit}>
              {submitting ? <i/> : <i/>} Submit
            </button>
            <button disabled={submitting} onClick={resetForm}>
              Clear Values
            </button>
          </div>
        </form>
      );
    }
  }

  export const Connected = reduxForm({
    form: 'synchronousValidation',
    fields,
    validate
  })(SynchronousValidationForm);
}


namespace SumbitValidation {
  export const fields = ['username', 'password'];

  const submit = (values:any, dispatch:any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (['john', 'paul', 'george', 'ringo'].indexOf(values.username) === -1) {
          reject({username: 'User does not exist', _error: 'Login failed!'});
        } else if (values.password !== 'redux-form') {
          reject({password: 'Wrong password', _error: 'Login failed!'});
        } else {
          resolve();
        }
      }, 1000); // simulate server latency
    });
  };

  class SubmitValidationForm extends Component<ReduxFormProps<SubmitValidationForm>> {
    static propTypes = {
      fields: PropTypes.object.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      error: PropTypes.string,
      resetForm: PropTypes.func.isRequired,
      submitting: PropTypes.bool.isRequired
    };

    render() {
      const {fields: {username, password}, error, resetForm, handleSubmit, submitting} = this.props;
      return (<form onSubmit={submit => handleSubmit(submit as any)}>
          <div>
            <label>Username</label>
            <div>
              <input type="text" placeholder="Username" {...username}/>
            </div>
            {username.touched && username.error && <div>{username.error}</div>}
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" placeholder="Password" {...password}/>
            </div>
            {password.touched && password.error && <div>{password.error}</div>}
          </div>
          {error && <div>{error}</div>}
          <div>
            <button disabled={submitting} onClick={handleSubmit}>
              {submitting ? <i/> : <i/>} Log In
            </button>
            <button disabled={submitting} onClick={resetForm}>
              Clear Values
            </button>
          </div>
        </form>
      );
    }
  }

  export const Connected = reduxForm({
    form: 'submitValidation',
    fields
  })(SubmitValidationForm);
}


namespace InitializingFromState {
  const LOAD = 'redux-form-examples/account/LOAD';
  const loadAccount = (data:any) => ({type: LOAD, data});
  export const fields = ['firstName', 'lastName', 'age', 'bio'];
  const data = {  // used to populate "account" reducer when "Load" is clicked
    firstName: 'John',
    lastName: 'Doe',
    age: '42',
    bio: 'Born to write amazing Redux code.'
  };

  interface Props<T> extends ReduxFormProps<T> {
    load: Function;
  }

  class InitializingFromStateForm extends Component<Props<InitializingFromStateForm & HTMLFormElement>> {
    static propTypes = {
      fields: PropTypes.object.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      load: PropTypes.func.isRequired,
      submitting: PropTypes.bool.isRequired
    };

    render() {
      const {fields: {firstName, lastName, age, bio}, handleSubmit, load, submitting} = this.props;
      return (
        <div>
          <div>
            <button onClick={() => load(data)}>Load Account</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <div>
                <input type="text" placeholder="First Name" {...firstName}/>
              </div>
            </div>
            <div>
              <label>Last Name</label>
              <div>
                <input type="text" placeholder="Last Name" {...lastName}/>
              </div>
            </div>
            <div>
              <label>Age</label>
              <div>
                <input type="number" placeholder="Age" {...age}/>
              </div>
            </div>
            <div>
              <label>Occupation</label>
              <div>
                <textarea placeholder="Biography" {...bio}/>
              </div>
            </div>
            <div>
              <button disabled={submitting} onClick={handleSubmit}>
                {submitting ? <i/> : <i/>} Submit
              </button>
            </div>
          </form>
        </div>
      );
    }
  }

  export const Connected = reduxForm({
      form: 'initializing',
      fields
    },
    (state:any) => ({ // mapStateToProps
      initialValues: state.account.data // will pull state into form's initialValues
    }),
    {load: loadAccount}      // mapDispatchToProps (will bind action creator to dispatch)
  )(InitializingFromStateForm);
}


namespace NormalizingFormData {
  const reducer = combineReducers({
    // other reducers
    form: reduxFormReducer.normalize({
      normalizing: {                                    // <--- name of the form
        upper: value => value && value.toUpperCase(),   // normalizer for 'upper' field
      }
    })
  });
  const store = createStore(reducer);
}
