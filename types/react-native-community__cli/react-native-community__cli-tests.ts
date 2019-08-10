import { UserDependencyConfigT } from 'react-native-community__cli';
const pluginConfig: UserDependencyConfigT = {
  commands: [
    {
      name: 'test-type',
      func: () => {},
      options: [
        {
          name: '--option1',
          description: 'description of the command',
        },
      ],
    },
  ],
};
