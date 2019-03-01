import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Image, Text } from 'react-native';
import { styles } from './styles';

class CalendarScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Calendar',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./../../assets/icon_calendar.png')} style={[styles.tabIcon, { tintColor }]} />
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
          CalendarScreen
        </Text>
      </SafeAreaView>
    )
  }
}

export default CalendarScreen;
