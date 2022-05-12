import React from 'react';
import { Alert, Dimensions, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import Icon from "react-native-vector-icons/MaterialIcons";
import Card from '../components/card';

const COLORS = { primary: '#1f145c', white: '#fff' }
var width = Dimensions.get('window').width;

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [items, setItems] = React.useState([
    { id: 1, task: 'first card', completed: true },
    { id: 2, task: 'second card', completed: false },
  ])

  const [textInput, setTextInput] = React.useState('')

  const addItem = () => {
    if (textInput.trim().length <= 0) {
      Alert.alert('Error', 'please add text');
      return;
    }
    setTextInput('')
    const newTodo = {
      id: Math.random(),
      task: textInput,
      completed: false
    }
    setItems([...items, newTodo])
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={(item) => <Card todo={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
      />

      <View style={styles.footer}>
        <TextInput placeholder='add new item'
          onChangeText={(text) => setTextInput(text)}
          value={textInput} />
        <TouchableOpacity onPress={addItem}>
          <Icon name="add" size={35} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 14,
    backgroundColor: 'white',
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 14,
    borderRadius: 50,
  }
});
