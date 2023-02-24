/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppwithFunctionalComponent from './AppwithFunctionalComponent';
import AppwithClassComponent from './AppwithClassComponent';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppwithClassComponent);
