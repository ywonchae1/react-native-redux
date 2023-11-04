import { View, Text, FlatList } from 'react-native'
import React, {useCallback, useState} from 'react'
import Header from '../components/Header/Header'
import { Typography } from '../components/Typography';
import LottoNumberView from '../components/LottoNumberView';
import { useSelector } from 'react-redux';
import LottoNumberBox from '../components/LottoNumberBox';
import { useNavigation } from '@react-navigation/native';

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
  
  const navigation = useNavigation();
  const onPressDetail = (date, numbers) => navigation.navigate('Detail', {date: date, numbers: numbers});
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
          const dateformat = `${item.date.getFullYear()}. ${item.date.getMonth()}. ${item.date.getDay()}.`;
          const numbers = item.numbers;
          return <LottoNumberBox date={dateformat} numbers={numbers} onPress={() => onPressDetail(dateformat, numbers)} />
        }} />
    </View>
  )
}