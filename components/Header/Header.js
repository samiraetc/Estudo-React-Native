import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import chat from '../../assets/chat.svg';

const Header = (props) => {
    const [search, setSearch] = useState();

    console.log(search);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEHlbtkhUSwGQ/profile-displayphoto-shrink_400_400/0/1596808189619?e=1623283200&v=beta&t=SKCbch-lqZ-3Wix712cGtOPuM9joB5oCmDtfoWXstdc'}}></Image>

            <TextInput style={styles.input} placeholder={'Pesquisar'} onChangeText={text => setSearch(text)} placeholderTextColor="#000000"/>

            <Image style={styles.chat} source={{uri: 'https://static.thenounproject.com/png/423449-200.png'}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 55,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },
    input: {
        paddingHorizontal: 10,
        backgroundColor: '#dce6f1',
        width: 250,
    },
    chat: {
        width: 40,
        height: 40,
    }

})

export default Header;