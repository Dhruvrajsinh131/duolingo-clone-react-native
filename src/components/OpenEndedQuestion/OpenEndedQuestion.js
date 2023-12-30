import React, { useState } from "react";

import { Text, View, TextInput, Image } from "react-native";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";
import Button from "../Button";
import PropTypes from "prop-types";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");
  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentense</Text>
      <View style={styles.row}>
        {/* image */}
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />
        {/* sentence container */}
        <View style={styles.sentenseContainer}>
          <Text style={styles.sentense}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type in English"
        style={styles.textInput}
        textAlignVertical="top"
        multiline
      />
      <Button text={"Check"} onPress={onButtonPress} disabled={!input} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default OpenEndedQuestion;
