import { UIManager } from 'react-native';

UIManager.dispatchViewManagerCommand(1, 1, undefined);
UIManager.dispatchViewManagerCommand(1, 1, ["foo", "bar", "baz", 1, 2, 3]);
