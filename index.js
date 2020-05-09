import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
