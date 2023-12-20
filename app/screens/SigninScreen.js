import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Screen from '../components/Screen';
import InputField from '../components/common/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';

// config
import Colors from '../config/Colors';

const SigninScreen = ({navigation, route}) => {
  const [rememberMe, setRememberMe] = useState(false);

  const [inputField, SetInputField] = useState([
    {
      placeholder: 'Email',
      value: '',
    },
    {
      placeholder: 'Password',
      value: '',
      // secure: true,
    },
  ]);

  const handleChange = (text, i) => {
    let tempfeilds = [...inputField];
    tempfeilds[i].value = text;
    SetInputField(tempfeilds);
  };

  const handleLogin = () => {
    // showIndicator(true);
    let tempfeilds = [...inputField];

    if (tempfeilds[0].value === '' || tempfeilds[1].value === '') {
      alert('Please fill all the feilds to proceed');
      // showIndicator(false);
      return true;
    }
    // props.navigation.navigate('HomeTab');
    try {
      // API INTEGRATION WILL COME HERE
    } catch (error) {
      alert('Error');
    }

    // showIndicator(false);
  };
  return (
    <Screen style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 3,
          justifyContent: 'flex-end',
          width: '90%',
        }}
        onPress={() => {}}>
        <Text style={{marginLeft: 5, color: Colors.darkGrey}}>Language</Text>
        <Image
          style={{
            marginLeft: RFPercentage(0.5),
            width: RFPercentage(2.5),
            height: RFPercentage(2.5),
          }}
          source={require('../../assets/Images/globe.png')}
        />
      </TouchableOpacity>
      <Image
        style={{
          marginTop: RFPercentage(0),
          width: RFPercentage(8),
          height: RFPercentage(12),
        }}
        source={require('../../assets/Images/leaf.jpeg')}
      />

      <Image
        style={{
          marginTop: RFPercentage(0.6),
          width: RFPercentage(25),
          height: RFPercentage(4),
        }}
        source={require('../../assets/Images/slogo.jpeg')}
      />

      {/* Input field */}
      <View
        style={{
          marginTop: RFPercentage(3),
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          alignSelf: 'center',
        }}>
        {inputField.map((item, i) => (
          <View
            key={i}
            style={{
              marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1),
              alignSelf: 'center',
            }}>
            <InputField
              placeholder={item.placeholder}
              placeholderColor={Colors.darkGrey}
              placeholderAtCenter={false}
              height={RFPercentage(6.2)}
              borderColor={Colors.grey}
              borderWidth={RFPercentage(0.1)}
              backgroundColor={'white'}
              secure={item.secure}
              borderRadius={RFPercentage(1.4)}
              color={Colors.black}
              fontSize={RFPercentage(2)}
              icon={item.icon}
              handleFeild={text => handleChange(text, i)}
              value={item.value}
              width={'97%'}
            />
          </View>
        ))}
      </View>

      {/* Remeber me and forget pass */}
      <View
        style={{
          width: '89%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: RFPercentage(1),
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => setRememberMe(!rememberMe)}
          activeOpacity={0.5}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: RFPercentage(2.3),
              width: RFPercentage(2.3),
              borderRadius: RFPercentage(20),
              borderWidth: RFPercentage(0.1),
              backgroundColor: rememberMe ? Colors.primary : 'transparent',
              marginRight: RFPercentage(1),
              borderColor: Colors.darkGrey,
            }}
          />
          <Text style={{color: '#322D31', fontSize: RFPercentage(1.7)}}>
            Remember me?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{position: 'absolute', right: 0}}>
          <Text style={{color: '#322D31', fontSize: RFPercentage(1.7)}}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Signin Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: Colors.primary,
          borderRadius: RFPercentage(5),
          height: RFPercentage(6.2),
          width: RFPercentage(20),
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: RFPercentage(5),
        }}
        onPress={handleLogin}>
        <Text style={{color: 'white', fontSize: RFPercentage(2.3)}}>
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Face ID */}
      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: RFPercentage(5),
        }}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            style={{width: RFPercentage(7), height: RFPercentage(7)}}
            source={require('../../assets/Images/face.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            style={{
              marginLeft: RFPercentage(4),
              width: RFPercentage(5.8),
              height: RFPercentage(5.8),
            }}
            source={require('../../assets/Images/finger.png')}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: RFPercentage(2),
          color: Colors.darkGrey,
          fontSize: RFPercentage(1.7),
        }}>
        Use Face ID / Finger Print
      </Text>

      {/* Social Media Login */}
      <View
        style={{
          marginTop: RFPercentage(5),
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: RFPercentage(6),
            height: RFPercentage(0.1),
            backgroundColor: Colors.primary,
          }}
        />
        <Text
          style={{color: Colors.darkGrey, marginHorizontal: RFPercentage(1)}}>
          or login with
        </Text>
        <View
          style={{
            width: RFPercentage(6),
            height: RFPercentage(0.1),
            backgroundColor: Colors.primary,
          }}
        />
      </View>

      {/* Social Media Icons */}
      <View
        style={{
          marginTop: RFPercentage(2),
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={{
              width: RFPercentage(5),
              height: RFPercentage(5),
            }}
            source={require('../../assets/Images/fbicon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={{
              marginLeft: RFPercentage(3),
              width: RFPercentage(5),
              height: RFPercentage(5),
            }}
            source={require('../../assets/Images/goicon.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        activeOpacity={0.8}
        style={{
          marginTop: RFPercentage(5),
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: RFPercentage(1.8),
            color: Colors.darkGrey2,
          }}>
          Don't have an account?
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              fontSize: RFPercentage(1.8),
              color: Colors.primary,
              marginLeft: RFPercentage(0.5),
              fontWeight: '600',
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{position: 'absolute', bottom: RFPercentage(3.5)}}>
        <Text
          style={{
            fontSize: RFPercentage(1.7),
            textDecorationLine: 'underline',
            color: Colors.darkGrey,
          }}>
          Terms of Service & Privacy Policy
        </Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  label: {
    fontSize: 15,
    color: Colors.primary,
    marginVertical: 5,
  },
});
