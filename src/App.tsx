import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './app/store';
import {Provider} from 'react-redux';

import {StackNavigator} from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
