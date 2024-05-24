/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image,  ImageSourcePropType, Pressable } from 'react-native';
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

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (

    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
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
    width: 200,
    height: 200,
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

});

