import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MenuType = {
  title: string;
  children: React.ReactNode;
};
const Menu = ({ title, children }: MenuType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  title: {
    fontWeight: "800",
    marginBottom: 16,
  },
});

export default Menu;
