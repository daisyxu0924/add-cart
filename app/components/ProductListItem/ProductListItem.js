import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import styles from './ProductListItemStyle';

const ProductListItem = ({ product, onClick }) => {
  return (
    <View style={styles.itemWrapper}>
      <Image
        source={product.source}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.infoWrapper}>
        <View style={styles.titleAndPrice}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <View style={styles.buttonBack}>
            <Button color="black" title="ADD TO CART" onPress={() => onClick(product)} />
          </View>
        </View>
      </View>
    </View>
  )
}
export default ProductListItem;
