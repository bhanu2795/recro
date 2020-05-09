import { createStackNavigator } from 'react-navigation-stack';
import screens from '../constants/screens';
import { HomeNavigator } from './navigators';


export default createStackNavigator({
  [screens.Root]: HomeNavigator
}, {
  initialRouteName: screens.Root,
  headerMode: 'none'
});
