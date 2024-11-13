import {
  View,
  ScrollView,
  FlatList,
  Text,
  Image,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import styled from 'styled-components/native';
import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    header: 'Javascript',
    text: 'Almost 3 years of learning on the Hexlet platform',
    logo: require('../../assets/js_arcade_64.png'),
  },
  {
    id: 2,
    header: 'Ruby',
    text: 'A few learning projects for fun',
    logo: require('../../assets/ruby_arcade_64.png'),
  },
  {
    id: 3,
    header: 'Python',
    text: 'The basics and a little deeper to try other popular languages',
    logo: require('../../assets/python_arcade_64.png'),
  },
];

const Item = ({item}) => (
  <ItemContainer>
    <LanguageContainer>
      <Image source={item.logo} style={styles.logo}/>
      <Text style={styles.header}>{item.header}</Text>
    </LanguageContainer>
    <DetailsContainer>
      <Text style={styles.text}>{item.text}</Text>
    </DetailsContainer>
  </ItemContainer>
);

export default function ExperienceScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (<Item item={item}></Item>)}
        />
      </SafeAreaView>
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#669999',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  header: {
    fontSize: 24,
    fontWeight:'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  logo: {
    width: 64,
    height: 64,
  },
});

const ItemContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifyContent: left;
  border: 2px solid white;
  padding: 10px;
  margin: 0px 10px 10px 10px;
  border-radius: 10px;
  font-family: sans-serif;
`
const LanguageContainer = styled.View`
  display: flex;
  flex-direction: column;
  justifyContent: flex-start;
  align-items: center;
`
const DetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justifyContent: flex-start;
`