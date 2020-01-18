import React, { useEffect} from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import OrderItem from '../../components/shop/OrderItem';
import HeaderButton from '../../components/UI/HeaderButton';
import * as OrdersActions from '../../store/actions/orders'

const OrderScreen = prrops => {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(OrdersActions.fetchOrders())
  }, [dispatch])

  return (
    <FlatList 
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <OrderItem 
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  )
}

OrderScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
              navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )

  }
}

export default OrderScreen;
