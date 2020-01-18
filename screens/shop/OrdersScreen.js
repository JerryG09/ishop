import React, { useEffect, useState } from 'react';
import { FlatList, Platform, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import OrderItem from '../../components/shop/OrderItem';
import HeaderButton from '../../components/UI/HeaderButton';
import * as OrdersActions from '../../store/actions/orders'
import Colors from '../../constants/Colors';

const OrderScreen = prrops => {
  const [isLoading, setIsLoading] = useState(false)

  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(OrdersActions.fetchOrders()).then(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    )
  }

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

const styles =  StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default OrderScreen;
