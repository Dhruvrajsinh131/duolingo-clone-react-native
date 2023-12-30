import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    // border styles
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgray",
    borderRadius: 10,

    // size styles
    width: "48%",
    height: "48%",

    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },

  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
    color: "black",
  },
  selectedText: {
    color: "#40BEF7",
  },
});

export default styles;
