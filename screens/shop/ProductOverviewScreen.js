import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux';

function ProductsOverviewScreen(props) {
  const products = useSelector(state => state.products.availableProducts)
  console.log(products)

return <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>} />
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
}

const styles = StyleSheet.create({
  
})

export default ProductsOverviewScreen