import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
    // gap: 10,
    flexWrap: "wrap",
  },
});

export default styles;
