import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import LottoNumberBox from '../components/LottoNumberBox'

export default function DetailScreen({route}) {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="MEMO" />
      </Header>
      <View style={{paddingVertical: 24}}>
        <LottoNumberBox  date={route.params.date} numbers={route.params.numbers} />
      </View>
    </View>
  )
}