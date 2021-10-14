import moment from 'moment';
import React from 'react';
import { View, Text } from 'react-native';
import { Message } from '../../types';
import styles from './styles';

export type ChatMessageProps = {
    messages: Message
};

const ChatMessage = (props: ChatMessageProps) => {
    const { messages } = props;

    const isMyMessage = () => {
        return messages.user.id === 'u1';
    }
    return (
        <View style={styles.container}>
            
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{messages.user.name}</Text>}
                <Text style={styles.message}>{messages.content}</Text>
                <Text style={styles.time}>{moment(messages.createdAt).fromNow()}</Text>
            </View>

        </View>
    )
}

export default ChatMessage;
