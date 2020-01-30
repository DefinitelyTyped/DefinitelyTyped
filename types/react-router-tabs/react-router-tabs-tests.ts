import { NavTab, RoutedTabs } from 'react-router-tabs';

NavTab({ to: 'path' }); // $ExpectType Route<RouteProps>
RoutedTabs({}); // $ExpectType ReactNode
