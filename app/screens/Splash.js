import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';

const Splash = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SigninScreen');
    }, 500);
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{
          marginTop: RFPercentage(-10),
          width: RFPercentage(40),
          height: RFPercentage(7),
        }}
        source={require('../../assets/Images/logo.jpeg')}
      />

      <Image
        style={{
          marginTop: RFPercentage(3),
          width: RFPercentage(28),
          height: RFPercentage(0.5),
        }}
        source={require('../../assets/Images/splashLine.png')}
      />

      <View style={{position: 'absolute', bottom: RFPercentage(5)}}>
        <Text style={styles.label}>By Fakhruddin Properties</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: RFPercentage(2.1),
    color: Colors.primary,
    marginVertical: 5,
  },
});
