import moment from 'moment';
import React from 'react';
import { Image, View, Text, TouchableWithoutFeedback } from 'react-native';
import {ChatRoom} from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClik = () => {
        navigation.navigate('ChatRoom', { 
            id: chatRoom.id,
            name: user.name, 
        })
    };

    return (
        <TouchableWithoutFeedback onPress={onClik}>
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />            
                </View>

                <View style={styles.midContainer}>
                    <Text style={styles.username} >{user.name}</Text>
                    <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
                
                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatListItem;
