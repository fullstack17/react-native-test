import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';
import { LineChart } from 'react-native-chart-kit';
import { styles } from './styles';
import { Metric, Colors } from '../../themes';
import { HomeTabbar } from '../../components';

const CHART_CONFIG = {
  backgroundColor: Colors.dark,
  backgroundGradientFrom: Colors.dark,
  backgroundGradientTo: Colors.dark,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./../../assets/icon_home.png')} style={[styles.tabIcon, { tintColor }]} />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      rating: 4.5,
      activeTabIndex: 0
    }
  }

  onPressTabBar = (activeTabIndex) => {
    this.setState({ activeTabIndex });
  };

  render() {
    const { rating, activeTabIndex } = this.state;

    return (
      <SafeAreaView style={styles.parentContainer}>
        <ScrollView style={styles.container}>
          <ImageBackground
            source={require('../../assets/img_background.png')}
            style={styles.imgBackground}
          >
            <Image source={require('../../assets/img_example.png')} style={styles.imgMain}/>
            <TouchableOpacity style={styles.btnShareContainer}>
              <Image source={require('../../assets/icon_share.png')} style={styles.iconShare} />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.mainContainer}>
            <View>
              <View style={styles.avatarContainer}>
                <Image source={require('../../assets/img_avatar.png')} style={styles.iconAvatar}/>
              </View>
              <TouchableOpacity style={styles.instagramContainer}>
                <Image source={require('../../assets/icon_instagram.png')} style={styles.iconInstagram} />
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.whiteBoldText}>
                Anthony Martial
              </Text>
              <Text style={styles.whiteTinyText}>
                Barber with 9 Years of Experience
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={rating}
                containerStyle={styles.starRating}
                emptyStar={require('./../../assets/icon_star_empty.png')}
                halfStar={require('./../../assets/icon_star_half.png')}
                fullStar={require('./../../assets/icon_star.png')}
                starSize={14}
              />
              <Text style={styles.graySmallText}>
                (17 Reviews)
              </Text>
            </View>
            <TouchableOpacity style={styles.btnViewProfileContainer}>
              <Text style={styles.whiteBold1Text}>
                View Profile
              </Text>
            </TouchableOpacity>
            <HomeTabbar onPress={this.onPressTabBar} activeIndex={activeTabIndex}/>
            <View style={styles.subContainer}>
              <TouchableOpacity style={styles.subContainer1}>
                <Text style={styles.whiteText}>
                  Sep
                </Text>
                <Image source={require('../../assets/icon_arrow_down.png')} style={styles.iconDown} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.subContainer2}>
                <Text style={styles.whiteBold1Text}>
                  Week2
                </Text>
                <Image source={require('../../assets/icon_arrow_down.png')} style={styles.iconDown} />
              </TouchableOpacity>
            </View>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ]
                }]
              }}
              width={Metric.width} // from react-native
              height={220}
              chartConfig={CHART_CONFIG}
              bezier
              style={{
                marginVertical: 8,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
