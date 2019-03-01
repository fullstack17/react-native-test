import { StyleSheet } from 'react-native';
import { Colors, Metric } from './../../themes';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    flex: 1,
  },
  imgBackground: {
    height: Metric.height / 3
  },
  imgMain: {
    width: '100%',
    height: '100%'
  },
  iconShare: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  btnShareContainer: {
    position: 'absolute',
    right: Metric.marginHorizontal,
    top: 40,
  },
  mainContainer: {
    alignItems: 'center'
  },
  avatarContainer: {
    marginTop: -55,
    height: 110,
    width: 110,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  iconInstagram: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  instagramContainer: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  whiteBoldText: {
    ...Metric.font.h3Bold,
    color: Colors.white,
    marginTop: 10,
    textAlign: 'center'
  },
  whiteTinyText: {
    ...Metric.font.h3Tiny,
    color: Colors.white,
    marginTop: 10,
    textAlign: 'center'
  },
  starRating: {
    width: 80,
    marginRight: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  graySmallText: {
    color: Colors.grey,
    ...Metric.font.h5,
    textAlignVertical: 'center',
  },
  btnViewProfileContainer: {
    backgroundColor: Colors.red,
    height: 30,
    width: 130,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metric.marginHorizontal
  },
  whiteBold1Text: {
    ...Metric.font.h3Bold,
    fontWeight: 'bold',
    color: Colors.white,
  },
  subContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginHorizontal: Metric.marginHorizontal,
    marginVertical: Metric.marginHorizontal,
  },
  whiteText: {
    ...Metric.font.h3,
    color: Colors.white
  },
  iconDown: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    marginLeft: 5
  },
  subContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
  }
});
