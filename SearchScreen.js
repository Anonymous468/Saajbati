import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,View,Text} from 'react-native';
import { TextInput } from 'react-native-paper';
export default function SearchScreen({ navigation }) {
    const [name,setName] = React.useState("");
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: '' }}>
            <Text
            style={{ fontSize: 30, fontWeight: 'bold',color: "#3D5A90" }}>Saajbaati</Text>
            <Text
            style={{fontWeight: 'bold',color: "#3D5A90" }}>An initiative by Newtown Police Commisionarate</Text>
            <TextInput
        style={{width: 300,
        height: 15,
        backgroundColor: '#fff',
        //paddingVertical: 10,
        //paddingHorizontal: 15,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        fontSize: 14,
        margin: 14}}
        placeholder="Search for Stores"
        onChangeText={(value) => setName(value)}
        left={<TextInput.Icon name="store-search-outline" />}
        mode="outlined"
      />
        <Text>{name}</Text>
        </View>
    );
}