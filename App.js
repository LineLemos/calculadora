import {useState} from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const buttons = [
    "C",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ",",
    "=",
  ];

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")

const handleInput = (buttonPressed) => {
  if (
    buttonPressed === "*" ||
    buttonPressed === "/" ||
    buttonPressed === "+" ||
    buttonPressed === "-"
  ) {
    setCurrentNumber(currentNumber + " " + buttonPressed + " ");
    return;
  }
  if (buttonPressed === "DEL") {
    setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
    return;
  }
  if (buttonPressed === ",") {
    setCurrentNumber(currentNumber + buttonPressed);
    return;
  }
  if (buttonPressed === "+/-") {
    return;
  }
  if (buttonPressed === "C") {
    setLastNumber("");
    setCurrentNumber("");
    return;
  }
  if (buttonPressed === "=") {
    setLastNumber(currentNumber + " = ");
    calculator();
    return;
  }
  setCurrentNumber(currentNumber + buttonPressed);
};

const calculator = () => {
  const splitNumbers = currentNumber.split(" ");
  const operator = splitNumbers[1];

  if (operator === "*") {
    setCurrentNumber(
      (parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString()
    );
  }
  if (operator === "/") {
    setCurrentNumber(
      (parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString()
    );
  }
  if (operator === "+") {
    setCurrentNumber(
      (parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString()
    );
  }
  if (operator === "-") {
    setCurrentNumber(
      (parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString()
    );
  }
};


  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          <TouchableOpacity key={button} style={styles.button} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  result: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 300,
    backgroundColor: "#f5f5f5",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    minHeight: 80,
    minWidth: 80,
  },
  textButton: {
    color: "#5b5b5b",
    fontSize: 25,
  },
  resultText:{
    fontWeight:'100',
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },
  historyText:{
    fontSize: 22,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end'
  },
});
