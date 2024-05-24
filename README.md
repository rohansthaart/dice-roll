# Roll The Dice App

This is a simple React Native application that simulates the roll of two dice. The app uses the `react-native-haptic-feedback` library to provide haptic feedback when the dice are rolled.

## Features

- Two dice that can be rolled to generate a random number between 1 and 6.
- Haptic feedback when the dice are rolled.
- Displays the result of the roll, indicating which player won or if it was a draw.

## How to Use

To roll the dice, simply press the "Roll The Dice" button. The dice images will change to reflect the result of the roll, and the result will be displayed above the dice.

## Components

- **Dice**: This is a simple component that takes an image URL as a prop and displays the image.
- **App**: This is the main component of the application. It manages the state of the dice and the result of the roll. It also handles the logic for rolling the dice and determining the result.

## Styles

The application uses React Native's `StyleSheet` to create styles for the components. The styles are defined in a `styles` object at the bottom of the file.

## Dependencies

- `react-native`
- `react-native-haptic-feedback`

## Installation

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `react-native run-android` or `react-native run-ios` to start the application on your emulator or device.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
