import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrdersScreen';

import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductNavigator = createStackNavigator({
  ProductOverview: ProductOverviewScreen,
  ProductDetail: ProductDetailScreen,
  Cart: CartScreen,
}, {
  defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
  Orders: OrderScreen
}, {
  defaultNavigationOptions: defaultNavOptions
})

const ShopNavigator = createDrawerNavigator({
  Products: ProductNavigator,
  Orders: OrdersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.primary
  }
})

export default createAppContainer(ShopNavigator)