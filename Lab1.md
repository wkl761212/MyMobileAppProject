# Lab1 Ting Yau Li 000887388

# React Native Environment Setup Guide

## System Requirements
- **CPU**: Intel i5/i7/i9 or equivalent AMD
- **RAM**: 8GB minimum
- **OS**: Windows 10 or later, macOS Catalina or later, Ubuntu 18.04 or later

## Installation Instructions
1. Install Node.js from [Node.js website](https://nodejs.org/)
2. Install the React Native CLI with `npm install -g react-native-cli`
3. (Windows) Install Android Studio for the Android development environment
4. (macOS) Install Xcode for the iOS development environment
5. Make sure installed `Android SDK Platform 33` and `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image` in Android Studio SDK Manager

## Configuration Steps
- Set environment variables for  `ANDROID_HOME` with the path to the Android SDK
- Update `PATH` to include the path of `Android\Sdk\platform-tools`.

## Project Creation
- Create a new project with `npx react-native@latest init MyFirstApp` in command line.

## Running the Project
- Start the emulator from Android Studio
- Open the project directory with filename `android` in Android Studio
- Build and make project in Android Studio
- After building project, run the app.


## Troubleshooting
- If the build fails, check for SDK updates in Android Studio
- If the emulator does not show the script, type `npm run start` in the command line under the directory of the project. The enter `r` to reload the app. 
- If the emulator does not start, ensure your AVD is configured correctly

## Resources
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)
