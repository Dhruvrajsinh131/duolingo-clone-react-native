import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";

const WordOption = ({ text, onPress, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.root,
        { backgroundColor: isSelected ? "lightgray" : "white" },
      ]}
    >
      <Text
        style={[styles.text, { color: isSelected ? "lightgray" : "black" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default WordOption;
