import React from 'react'
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
// import ProductsOverviewScreen from './ProductOverviewScreen';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

  // console.log(selectedProduct.title)
  return(
    <View>
      <Text>The Product Details Screen!!!</Text>
      <Text>{selectedProduct.title}</Text>
      <Text>${selectedProduct.price}</Text>
    </View>
  )
};

ProductDetailScreen.navigationOptions = navData => {
  // console.log(navData.navigation.getParam('productTitle'))
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
}

const styles = StyleSheet.create({});

export default ProductDetailScreen;