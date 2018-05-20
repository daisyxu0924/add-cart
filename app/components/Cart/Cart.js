import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import styles from './CartStyle';

const Cart = ({ products }) => {
  return (
    <View style={styles.cartWrapper}>
      <Text style={styles.cartTitle}>
        Selected Products (Cart)
      </Text>
      <View style={styles.cartContentWrapper}>
        { products.map((p, i) => <Text key={i}>{p.title}</Text>)}
      </View>
    </View>
  )
}
export default Cart;
