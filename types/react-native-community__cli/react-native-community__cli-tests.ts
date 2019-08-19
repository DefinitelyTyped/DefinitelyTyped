import { UserDependencyConfig } from 'react-native-community__cli';
const pluginConfig: UserDependencyConfig = {
  commands: [
    {
      name: 'test-type',
      func: () => Promise.resolve(),
      options: [
        {
          name: '--option1',
          description: 'description of the command',
        },
      ],
    },
  ],
};
