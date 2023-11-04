import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Typography } from './Typography'
import LottoNumberView from './LottoNumberView'

export default function LottoNumberBox({ date, numbers, onPress = ()=>{} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginHorizontal: 24,
        height: 120,
        backgroundColor: 'white'
      }}>
        <Typography fontSize={16}>{date}</Typography>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <LottoNumberView numbers={numbers} />
        </View>
      </View>
    </TouchableOpacity>
  )
}