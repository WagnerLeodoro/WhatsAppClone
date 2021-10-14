import React from 'react';
import { Image, View, Text, TouchableWithoutFeedback } from 'react-native';
import { User} from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClik = () => {
        
    };

    return (
        <TouchableWithoutFeedback onPress={onClik}>
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />            
                </View>

                <View style={styles.midContainer}>
                    <Text style={styles.username} >{user.name}</Text>
                    <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default ContactListItem;
