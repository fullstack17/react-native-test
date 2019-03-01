import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  width,
  height,
  marginHorizontal: 20,
  tabBar: {
    tabLabelMarginBottom: 7,
    height: 60
  },
  font: {
    h3: {
      fontSize: 15
    },
    h3Tiny: {
      fontSize: 15,
      fontWeight: '100'
    },
    h3Bold: {
      fontSize: 15,
      fontWeight: '900'
    },
    h4: {
      fontSize: 13
    },
    h5: {
      fontSize: 11
    }
  }
}
