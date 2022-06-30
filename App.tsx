import { useRef } from "react";
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import { menu1Data, menu2Data, menu3Data } from "./data/menuData";

export default function App() {
  const animatedValues = useRef(new Animated.Value(0)).current;
  const bannerAnimations = {
    transform: [
      {
        scale: animatedValues.interpolate({
          inputRange: [-200, 0],
          outputRange: [2, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Animated.View style={[styles.bannerContainer, bannerAnimations]}>
        <Image
          style={styles.banner}
          source={require("./assets/foodBanner.png")}
        />
      </Animated.View>
      <ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: animatedValues },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingBanner}></View>

        <View style={styles.scrollViewContent}>
          <View style={styles.shopDetailCard}>
            <Text style={styles.shopName}>Trung Restaurant</Text>
            <Text style={styles.shopAddressTextRow}>
              <Text style={styles.distance}>6,9 Km</Text>
              <Text> - </Text>
              <Text style={styles.shopAddress}>Số 1 Cầu Giấy, Hà Nội</Text>
            </Text>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>☆</Text>
              <Text style={styles.ratingPointText}>5</Text>
              <Text style={styles.numberOfRating}>(999+)</Text>
            </View>
          </View>

          <Menu title={"Recommended Menu"}>
            {menu1Data.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </Menu>
          <Menu title={"Crispy chicken"}>
            {menu2Data.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </Menu>
          <Menu title={"Dessert"}>
            {menu3Data.map((item) => (
              <MenuItem {...item} key={item.id} />
            ))}
          </Menu>
        </View>
      </ScrollView>
    </View>
  );
}

const BANNER_HEIGHT = 224;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bannerContainer: {
    position: "absolute",
    width: "100%",
    height: BANNER_HEIGHT,
  },
  paddingBanner: {
    height: BANNER_HEIGHT,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  shopDetailCard: {
    width: "100%",
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -60 }],
    padding: 16,
    marginBottom: 40,
    borderRadius: 8,
    ...Platform.select({
      android: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
        shadowOffset: {
          width: 3,
          height: 3,
        },
      },
      ios: {
        shadowColor: "#a8bed2",
        opacity: 1,
        shadowRadius: 4,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  shopName: {
    fontSize: 25,
    fontWeight: "800",
  },
  shopAddressTextRow: {
    fontSize: 12,
    marginVertical: 16,
  },
  distance: {
    fontWeight: "900",
    marginHorizontal: 12,
    color: "#607d8b",
  },
  shopAddress: {
    color: "#586065",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  star: {
    color: "#f6be00",
    fontSize: 16,
  },
  ratingPointText: {
    fontSize: 12,
    fontWeight: "800",
    marginLeft: 2,
    marginRight: 4,
  },
  numberOfRating: {
    color: "#607d8b",
    fontSize: 12,
  },
  scrollViewContent: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});
