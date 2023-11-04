import { View, Button, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import LottoNumberBox from '../components/LottoNumberBox'
import { TextInput } from 'react-native';

export default function DetailScreen({route}) {
    const [title, onChangeTitle] = useState('title');
    const [text, onChangeText] = useState('test');

    const onPressButton = () => {

    }

  return (
    <View style={{ flex: 1 }}>

      <Header>
        <Header.Title title="MEMO" />
      </Header>

      <View style={{paddingVertical: 24}}>
        <LottoNumberBox  date={route.params.date} numbers={route.params.numbers} />
      </View>

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <View
        style={{
            height: 500,
            paddingHorizontal: 20,
            backgroundColor: 'gray',
            justifyContent: 'space-evenly'
        }}>
            <TextInput
                style={{ backgroundColor: 'lightgray', borderRadius: 15, height: 40, paddingHorizontal: 20 }}
                onChangeText={onChangeTitle}
                value={title}
            />
            <TextInput
                style={{ backgroundColor: 'lightgray', borderRadius: 15, height: 160, paddingHorizontal: 20 }}
                onChangeText={onChangeText}
                value={text}
            />
            <Button color='white' onPress={onPressButton} title='저장하기' />
        </View>
      </View>
      
    </View>
  )
}
