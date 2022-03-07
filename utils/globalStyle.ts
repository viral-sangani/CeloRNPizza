import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFiller: {
    flex: 1,
    borderRadius: 10,
  },
  button: {
    height: 59,
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
