import { View, Button, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import LottoNumberBox from '../components/LottoNumberBox'
import { TextInput } from 'react-native';
import SaveBtn from '../components/SaveBtn';

export default function DetailScreen({route}) {
    const [title, onChangeTitle] = useState('');
    const [text, onChangeText] = useState('');

  return (
    <View style={{ flex: 1 }}>

      <Header>
        <Header.Title title="MEMO" />
      </Header>

      <View style={{paddingVertical: 24}}>
        <LottoNumberBox date={route.params.date} numbers={route.params.numbers} />
        <View
        style={{
            height: 312,
            paddingHorizontal: 20,
            paddingVertical: 12,
            marginHorizontal: 24,
            backgroundColor: '#d9d9d9',
            justifyContent: 'space-evenly',
        }}>
            <TextInput
                style={{ backgroundColor: '#f2f2f2', borderRadius: 15, height: 50, paddingHorizontal: 20 }}
                onChangeText={onChangeTitle}
                value={title}
                placeholder='제목...'
            />
            <TextInput
                style={{ backgroundColor: '#f2f2f2', borderRadius: 15, height: 120, paddingTop: 15, paddingBottom: 15, paddingHorizontal: 20 }}
                onChangeText={onChangeText}
                value={text}
                placeholder='내용...'
                multiline={true}
            />
            <View style={{ alignItems: 'flex-end'}}>
                <SaveBtn />
            </View>
        </View>
      </View>
      
    </View>
  )
}
