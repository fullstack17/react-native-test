import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  CalendarScreen,
  ReviewScreen,
  SettingScreen
} from './containers';
import { Colors, Metric } from './themes';

const routing = createBottomTabNavigator({
  CalendarScreen: { screen: CalendarScreen },
  HomeScreen: { screen: HomeScreen },
  ReviewScreen: { screen: ReviewScreen },
  SettingScreen: { screen: SettingScreen },
}, {
  initialRouteName: 'HomeScreen',
  tabBarOptions: {
    activeTintColor: Colors.red,
    // inactiveTintColor: Colors.lightGrey,
    showIcon: true,
    style: {
      height: Metric.tabBar.height,
      borderTopWidth: 0
    },
    labelStyle: {
      fontSize: 10,
      marginBottom: Metric.tabBar.tabLabelMarginBottom
    }
  }
});

export default createAppContainer(routing);
