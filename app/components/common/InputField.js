import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//config
import Colors from '../../config/Colors';

function InputField({
  onTouchStart = () => {},
  onTouchEnd = () => {},
  placeholder,
  multipleLines = false,
  handleFeild,
  borderColor = borderColor,
  // borderLeftColor = Colors.white,
  // borderTopColor = Colors.white,
  // borderRightColor = Colors.white,
  // borderBottomColor = Colors.white,
  borderWidth = borderWidth,
  fontFamily = null,
  placeholderColor = '#B4B6B8',
  borderRadius = RFPercentage(1),
  backgroundColor = Colors.white,
  keyboardType = 'default',
  textCenter = 'left',
  fontSize = RFPercentage(2.5),
  editIcon = false,
  dropdownIcon = false,
  placeholderAtCenter = false,
  width,
  value,
  height = RFPercentage(6.9),
  secure = false,
  handleClear = false,
  leftIconName = '',
  autoFocus = false,
  searchMarginLeft = null,
  color = 'black',
  ...otherProps
}) {
  const [eyeIcon, setEyeIcon] = useState(false);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: backgroundColor,
          // borderBottomColor: borderBottomColor,
          // borderTopColor: borderTopColor,
          // borderRightColor: borderRightColor,
          // borderLeftColor: borderLeftColor,
          borderWidth: borderWidth,
          borderColor: borderColor,
          width: width,
          height: height,
          borderRadius: borderRadius,
          marginVertical: RFPercentage(0.7),
        }}>
        <TextInput
          placeholder={placeholder}
          multiline={multipleLines ? true : false}
          placeholderTextColor={placeholderColor}
          onChangeText={text => handleFeild(text)}
          onResponderStart={onTouchStart}
          onEndEditing={onTouchEnd}
          value={value}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          secureTextEntry={secure && !eyeIcon}
          textAlign={textCenter}
          style={{
            flexWrap: 'wrap',
            // top: RFPercentage(1.4),
            right: RFPercentage(0.5),
            color: color,
            alignSelf: 'center',
            fontFamily: fontFamily,
            fontSize: fontSize,
            width: leftIconName ? '85%' : '90%',
          }}
          {...otherProps}></TextInput>

        {secure ? (
          <TouchableOpacity
            onPress={() => setEyeIcon(!eyeIcon)}
            style={{position: 'absolute', right: RFPercentage(1)}}>
            <Ionicons
              color={eyeIcon ? Colors.darkGrey2 : Colors.darkGrey}
              style={{right: RFPercentage(0.5)}}
              size={RFPercentage(3)}
              name={eyeIcon ? 'eye' : 'eye-off-outline'}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* <View
        style={{
          width: '90%',
          height: RFPercentage(0.1),
          backgroundColor: Colors.darkGrey,
        }}></View> */}
    </View>
  );
}

export default InputField;
