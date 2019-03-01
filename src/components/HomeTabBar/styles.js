import { StyleSheet } from 'react-native';
import { Metric, Colors } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#565764',
    flexDirection: 'row',
    paddingHorizontal: Metric.marginHorizontal / 2
  },
  subContainer: {
    flex: 1,
    alignItems: 'center'
  },
  iconTabBar: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark
  },
  boldText: {
    ...Metric.font.h4,
    fontWeight: 'bold',
    color: Colors.gray,
    marginTop: 10
  },
  activeBar: {
    height: 5,
    backgroundColor: Colors.green,
    width: '80%',
  },
  activeBarContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
