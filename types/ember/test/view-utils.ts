import Ember from 'ember';
import { assertType } from './lib/assert';

const { ViewUtils: { isSimpleClick } } = Ember;
assertType<boolean>(isSimpleClick(new Event('wat')));
