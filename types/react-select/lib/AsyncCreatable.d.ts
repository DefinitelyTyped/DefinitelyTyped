import { makeAsyncSelect } from './Async';
import { makeCreatableSelect } from './Creatable';
import manageState from './stateManager';
import Select from './Select';

export default makeAsyncSelect(manageState(makeCreatableSelect(Select)));
