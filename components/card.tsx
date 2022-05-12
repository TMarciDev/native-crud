import React from 'react';
import { View, Text } from '../components/Themed';


export default function Card({ todo }) {
    return (
        <View style={{
            backgroundColor: 'grey', width: '90vw',
            padding: '15px', margin: '5px', borderRadius: 30,
        }}>
            <Text>{todo?.item.task}</Text>
        </View>
    );
}
;
