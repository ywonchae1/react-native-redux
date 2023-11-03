import { View, Text, FlatList } from 'react-native'
import React, {useCallback, useState} from 'react'
import Header from '../components/Header/Header'
import { Typography } from '../components/Typography';
import LottoNumberView from '../components/LottoNumberView';
import { useSelector } from 'react-redux';

export default function HistoryListScreen(props) {
  /*
  const [history] = useState([
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  ]);
  */
  const history = useSelector((state) => state.numbers.history); // redux

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY" />
      </Header>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24
        }}
        renderItem={({ item }) => {
          return (
            <View style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
              marginHorizontal: 24,
              height: 120,
              backgroundColor: 'white'
            }}>
              <Typography fontSize={16}>{item.date.getFullYear()}. {item.date.getMonth()}. {item.date.getDay()}.</Typography>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <LottoNumberView numbers={item.numbers} />
              </View>
            </View>
          )
        }} />
    </View>
  )
}