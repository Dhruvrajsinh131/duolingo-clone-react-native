import React, { useState, useEffect } from "react";
import { View, Alert, Text } from "react-native";
import styles from "./App.styles";

import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";

// import questions from "./assets/data/imageMulatipleChoiceQuestions";
// import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";
import HeaderBar from "./src/components/HeaderBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FillInTheBlank from "./src/components/FillInTheBlank";

const App = () => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Won");
      setLives(5);
      setcurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) saveData();
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setcurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const reset = () => {
    setLives(5);
    setcurrentQuestionIndex(0);
  };
  const onWrong = () => {
    if (lives <= 1) {
      setLives(0);
      Alert.alert("Game Over !", "Try Again", [
        {
          text: "Try again",
          onPress: reset,
        },
      ]);
    } else {
      Alert.alert("Wrong !");
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", lives.toString());
    await AsyncStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };
  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");

    if (loadedLives) setLives(parseInt(loadedLives));
    const loadedCurrentQuestionIndex = await AsyncStorage.getItem(
      "currentQuestionIndex"
    );
    if (loadedCurrentQuestionIndex)
      setcurrentQuestionIndex(parseInt(loadedCurrentQuestionIndex));
    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return <Text style={styles.root}>Loading......</Text>;
  }
  return (
    <View style={styles.root}>
      <HeaderBar
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlank
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};

export default App;
