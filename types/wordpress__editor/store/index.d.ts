import { createReduxStore } from '@wordpress/data';
import * as selectors from './selectors';
import * as actions from './actions';

export interface EditorStore extends ReturnType<typeof createReduxStore<unknown, typeof actions, typeof selectors>> {
    name: "core/editor";
}
