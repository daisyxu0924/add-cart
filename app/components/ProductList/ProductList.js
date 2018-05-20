import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ProductListItem from '../ProductListItem/ProductListItem';
import styles from './ProductListStyle';
import Cart from '../Cart/Cart';

export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { title: 'Choc brownie', price: 6.25, source: require('../../assets/chocolate-brownie.jpg') },
        { title: 'Peanut bar', price: 2.75, source: require('../../assets/peanut-bar.jpg') },
        { title: 'Greentea cookie', price: 3.45, source: require('../../assets/greentea-cookie.jpg') },
      ],
      selectedProducts: [],
    }
  }

  handleOnClick = (p) => {
    const { selectedProducts } = this.state;
    selectedProducts.push(p);
    this.setState({ selectedProducts });
  }

  renderProductItems = () => (
    this.state.products.map((p) => (
      <ProductListItem
        key={p.title}
        product={p}
        onClick={this.handleOnClick}
      />
    ))
  )

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            Product List
          </Text>
        </View>
        <Cart
          products={this.state.selectedProducts}
        />
        <View style={styles.productItemsWrapper}>
          { this.renderProductItems() }
        </View>
      </ScrollView>
    );
  }
}
