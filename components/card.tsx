import React from 'react';
import { Dimensions } from 'react-native';
import { View, Text } from '../components/Themed';


export default function Card({ todo }) {
    var width = Dimensions.get('window').width;
    return (
        <View style={{
            backgroundColor: 'grey', width: width - 35,
            padding: 15, marginBottom: 10, borderRadius: 30,
        }}>
            <Text>{todo?.item.task}</Text>
        </View>
    );
}
;
