import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/HomeScreen';
import QrScanner from './src/QrCodeScannerScreen';
import ContactList from './ContactList';

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    QR:QrScanner,
    Con:ContactList,
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'QR ve Rehber',
    },
  }
);

export default createAppContainer(navigator);

