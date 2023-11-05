import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from './Typography'

export default function SaveBtn() {
  return (
    <TouchableOpacity onPress={() => console.log('saved!!')}>
      <View
        style={{
          width: 80,
          paddingVertical: 5,
          backgroundColor: '#007aff',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography fontSize={13} color='white'>저장</Typography>
      </View>
    </TouchableOpacity>
  )
}