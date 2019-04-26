import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';


const AppNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen },
});

export default createAppContainer(AppNavigator);