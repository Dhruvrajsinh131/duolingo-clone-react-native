import React from "react";
import { Image, View, Text } from "react-native";
import ProgressBar from "../ProgressBar";
import styles from "./styles";
import heart from "../../../assets/images/heart.png";
const HeaderBar = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.icon} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

export default HeaderBar;
