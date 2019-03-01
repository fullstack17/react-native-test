import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Colors } from '../../themes';

const ITEMS = [
  { name: 'Revenue', image: require('../../assets/icon_revenue_active.png') },
  { name: 'Clients', image: require('../../assets/icon_client.png') },
  { name: 'Notifications', image: require('../../assets/icon_notification.png') }
];

export const HomeTabbar = ({
  activeIndex,
  onPress
}) => {
  return (
    <View style={styles.container}>
      {ITEMS.map((item, index) => (
        <TouchableOpacity style={styles.subContainer} onPress={() => onPress(index)} key={`key-${index}`}>
          <View style={activeIndex === index ? [styles.iconContainer, { backgroundColor: Colors.darkGreen }] : styles.iconContainer}>
            <Image source={item.image} style={styles.iconTabBar}/>
          </View>
          <Text style={activeIndex === index ? [styles.boldText, { color: Colors.green }] : styles.boldText}>
            {item.name}
          </Text>
          {activeIndex === index && <View style={styles.activeBarContainer}>
            <View style={styles.activeBar} />
          </View>}
        </TouchableOpacity>
      ))}
    </View>
  );
};
