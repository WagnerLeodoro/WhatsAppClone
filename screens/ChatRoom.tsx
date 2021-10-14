import React from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import ImageBack from '../assets/images/ImageBack.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground style={{width: '100%', height: '100%'}}source={ImageBack}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage messages={item} />}
                inverted
            />

            <InputBox />
        </ImageBackground>
    )
}

export default ChatRoomScreen;
