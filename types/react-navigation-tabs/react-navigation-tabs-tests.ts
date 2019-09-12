import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createMaterialTopTabNavigator(
    {
        Test: {
            navigationOptions: {
                tabBarLabel: 'Decoding',
            },
            screen: null,
        },
    },
    {
        tabBarPosition: 'bottom',
    },
);
