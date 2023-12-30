import React from "react";
import { Text, Image, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        resizeMode="contain"
        source={{
          uri: image,
        }}
        style={styles.optionImage}
      />
      <Text style={[styles.optionText, isSelected ? styles.selectedText : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
