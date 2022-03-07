import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PizzaItem from "../components/PizzaItem";
import { pizzas, primaryColor, secondaryColor } from "../utils/constant";
import { globalStyle } from "../utils/globalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function HomeScreen() {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <LottieView
            style={{ width: "100%" }}
            source={require("../assets/home.json")}
            autoPlay
            loop
          />
        </View>
        <View style={styles.pizzasContainer}>
          {pizzas.map((pizza, index) => (
            <PizzaItem
              key={index}
              name={pizza.name}
              path={pizza.path}
              price={pizza.price}
              rating={pizza.rating}
            />
          ))}
        </View>
        <LinearGradient
          colors={[primaryColor, secondaryColor]}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={{ ...globalStyle.gradient, marginVertical: 16 }}
        >
          <View style={globalStyle.buttonFiller}></View>

          <TouchableOpacity
            onPress={() => {
              killSession();
            }}
            style={globalStyle.button}
          >
            <Text style={globalStyle.buttonText}>Logout</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#0F151D",
    width: windowWidth,
  },
  titleContainer: {
    backgroundColor: "#fff",
    width: "90%",
    height: 180,
    margin: 20,
  },
  pizzasContainer: {
    marginHorizontal: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  pizzaItem: {
    width: "45%",
    height: 220,
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 8,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pizzaItemImage: {
    marginTop: 16,
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
  },
  pizzaName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "black",
  },
  pizzaPrice: {
    width: "90%",
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: primaryColor,
    marginHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  pizzaPriceText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
