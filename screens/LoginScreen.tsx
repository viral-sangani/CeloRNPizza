import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { primaryColor, secondaryColor } from "../utils/constant";
import { globalStyle } from "../utils/globalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function LoginScreen() {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍕 Celo Pizza dApp 🍕</Text>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <LinearGradient
        colors={[primaryColor, secondaryColor]}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={globalStyle.gradient}
      >
        <View style={globalStyle.buttonFiller}></View>

        <TouchableOpacity
          onPress={() => {
            connectWallet();
          }}
          style={globalStyle.button}
        >
          <Text style={globalStyle.buttonText}>Connect Wallet</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F151D",
    width: windowWidth,
    height: windowHeight,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
});

export default LoginScreen;
