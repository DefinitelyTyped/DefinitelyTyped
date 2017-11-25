import { Answers, Crashlytics } from 'react-native-fabric';

Answers.logSearch('query');
Answers.logCustom('event', { customKey: 0 });

Crashlytics.crash();
Crashlytics.setUserName('name');
