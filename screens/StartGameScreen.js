import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resentInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const convertedNumber = parseInt(enteredNumber);

    if (
      isNaN(convertedNumber) ||
      convertedNumber <= 0 ||
      convertedNumber > 99
    ) {
      Alert.alert("Invalid number", "Number must be between 1 and 99", [
        { text: "Ok", style: "destructive", onPress: resentInputHandler },
      ]);
      return;
    }

    onPickNumber(convertedNumber);
  }

  const marginTopDimensions = height < 380 ? 30 : 100;

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View
          style={[styles.rootContainer, { marginTop: marginTopDimensions }]}
        >
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resentInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
