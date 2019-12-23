import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShopNavigator from './navigation/ShopNavigation'

import productReducer from './store/reducers/products'

enableScreens()

const rootReducer = combineReducers({
  products: productReducer
});

const store  = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

