import { StyleSheet, View, FlatList, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";
import FavoriteItem from "../../components/FavoriteItem";

const Favorite = () => {
  const renderItem = ({ item }) => {
    return <FavoriteItem {...item} />;
  };
  return (
    <SafeAreaView>
      <View >
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => String(item?.id)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

