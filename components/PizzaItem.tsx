import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import { PizzaType, primaryColor } from "../utils/constant";

const windowWidth = Dimensions.get("window").width;

interface Props {
  buyPizza: (price: string) => Promise<void>;
  pizza: PizzaType;
  index: number;
}

const PizzaItem: React.FC<Props> = ({ pizza, index, buyPizza }) => {
  return (
    <View style={styles.pizzaItem}>
      <Image style={styles.pizzaItemImage} uri={pizza.path} />
      <Text style={styles.pizzaName}>{pizza.name}</Text>
      <TouchableOpacity
        onPress={() => {
          buyPizza(pizza.price);
        }}
        style={styles.pizzaPrice}
      >
        <Text style={styles.pizzaPriceText}>{pizza.price} CELO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PizzaItem;

const styles = StyleSheet.create({
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
