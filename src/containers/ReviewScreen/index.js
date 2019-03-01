import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Reviews',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./../../assets/icon_review.png')} style={[styles.tabIcon, { tintColor }]} />
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
          ReviewScreen
        </Text>
      </SafeAreaView>
    )
  }
}

export default ReviewScreen;
