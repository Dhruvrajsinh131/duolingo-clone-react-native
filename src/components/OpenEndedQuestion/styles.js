import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    marginRight: 10,
    width: "30%",
    aspectRatio: 3 / 4,
  },
  sentenseContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 10,
  },
  sentense: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#EBEBEB",
    alignSelf: "stretch",
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});

export default styles;
