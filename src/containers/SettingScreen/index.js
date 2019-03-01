import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

class SettingScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./../../assets/icon_setting.png')} style={[styles.tabIcon, { tintColor }]} />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>
          SettingScreen
        </Text>
      </SafeAreaView>
    )
  }
}

export default SettingScreen;
