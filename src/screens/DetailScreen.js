import { View, Button, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import LottoNumberBox from '../components/LottoNumberBox'
import { TextInput } from 'react-native';
import SaveBtn from '../components/SaveBtn';
import { FlatList } from 'react-native';
import { Typography } from '../components/Typography';

// test data
const data = [{
    title: '내가 만약 로또에 당첨된다면 ...',
    text: '좋겠다 여기에 적는 게 의미가 있을까? 였나? 부자되세요 만수무강 무병장수하세요',
    id: 1,
},
{
    title: '204902940293원',
    text: '히히',
    id: 2,
},
{
    title: '204902940293원',
    text: '히히',
    id: 3,
},
{
    title: '204902940293원',
    text: '히히',
    id: 4,
},
{
    title: '204902940293원',
    text: '히히',
    id: 5,
},
{
    title: '204902940293원',
    text: '히히',
    id: 6,
},
{
    title: '204902940293원',
    text: '히히',
    id: 7,
},
]

export default function DetailScreen({route}) {
    const [title, onChangeTitle] = useState('');
    const [text, onChangeText] = useState('');

    const renderItem = ({item}) => {
        return (
            <View style={{ paddingVertical: 10 }}>
                <View style={{ paddingBottom: 5 }}>
                 <Typography fontSize={14} color='#007aff'>{item.title}</Typography>
                </View>
                <View>
                 <Typography fontSize={13} color='#000000'>{item.text}</Typography>
                </View>
            </View>   
        )
    }
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
      <View style={{ height: 208 }}>
        <FlatList
            data={data}
            // data={[{title: title, text: text}]}
            renderItem={renderItem}
            keyExtractor={(item)=>String(item.id)}
            contentContainerStyle={{
                backgroundColor:'#d9d9d9',
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginHorizontal: 24
            }}
        />
      </View>   
    </View>
  )
}
