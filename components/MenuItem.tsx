import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type MenuItemType = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  price: number;
  description: string;
  style?: ViewStyle;
};
const MenuItem = ({
  id,
  name,
  image,
  price,
  description,
  style,
}: MenuItemType) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.dishInfo}>
        <View>
          <Text style={styles.dishName}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eaeaea",
    paddingVertical: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  dishInfo: {
    flex: 1,
    flexWrap: "wrap",
  },
  dishName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  description: {
    fontSize: 11,
    color: "rgba(51,51,51,0.4)",
    marginBottom: 8,
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FE4A00",
  },
});

export default MenuItem;
