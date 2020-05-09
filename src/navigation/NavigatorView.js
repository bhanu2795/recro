import React from 'react';
import PropTypes from 'prop-types';
import { createAppContainer } from 'react-navigation';
import Navigator from './Navigator';

const NavigatorView = createAppContainer(Navigator);

const AppNavigator = ({ dispatch, navigator }) => <NavigatorView />;

AppNavigator.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object
};

export default AppNavigator;
