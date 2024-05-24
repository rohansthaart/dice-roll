/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native';
import React, { PropsWithChildren } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from './assets/one.png';
import DiceTwo from './assets/two.png';
import DiceThree from './assets/three.png';
import DiceFour from './assets/four.png';
import DiceFive from './assets/five.png';
import DiceSix from './assets/six.png';


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}





// ReactNativeHapticFeedback.trigger("impactLight", options);

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = React.useState<ImageSourcePropType>(DiceOne);
  const [dice2Image, setDice2Image] = React.useState<ImageSourcePropType>(DiceOne);
  const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
  const [result, setResult] = React.useState<string>('');

  const getRandomDice = () => {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);

    setDiceImage(diceImages[randomNumber1]);
    setDice2Image(diceImages[randomNumber2]);

    if (randomNumber1 > randomNumber2) {
      return ('Player 1 wins 🚩');
    } else if (randomNumber1 < randomNumber2) {
      return ('Player 2 wins 🚩');
    } else {
      return ('Draw 🎌');
    } 
  };

  const rollDiceOnTap = () => {
    const result = getRandomDice();
    ReactNativeHapticFeedback.trigger('impactLight', options);
    setResult(result);
  };

  return (

    <View style={styles.container}>
      <Text style={styles.heading}>Roll The Dice</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage} />
        <Dice imageUrl={dice2Image} />

      </View>
      <Pressable onPress={rollDiceOnTap} style={styles.rollDiceBtn}><Text style={styles.rollDiceText}>Roll The Dice</Text></Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2',
  },
  diceImage: {
    width: 150,
    height: 150,
    margin: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
  rollDiceBtn: {
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginTop: 20,
  },
  rollDiceText: {
    color: 'white',
  },
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    marginBottom: 20,
    color: 'green',
  }
});

