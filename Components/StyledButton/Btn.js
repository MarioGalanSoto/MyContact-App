import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './BtnStyles';

const StyledButton = (props) => {

  const {content, onPress } = props;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: '#990000'}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: '#F2EBE9'}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;