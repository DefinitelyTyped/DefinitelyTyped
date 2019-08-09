// TypeScript Version: 2.4
import { UserDependencyConfigT } from '@react-native-community-cli';

const pluginConfig: UserDependencyConfigT = {
  commands: [
    {
      name: 'test-type',
      func: () => new Promise(resolve => resolve()),
      options: [
        {
          name: '--option1',
          description: 'description of the command',
        },
      ],
    },
  ],
};
