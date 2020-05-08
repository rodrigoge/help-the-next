import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Linking  } from 'react-native';
import styles from './styles';
import Logo from '../../assets/Logo.png';
import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';

export default function Cases(){
    const [cases, setCases] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const message = 'Olá, eu vim do Help The Next e quero te ajudar';

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${cases.title}`,
            recipients: [cases.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${cases.whatsapp};text=${message}`);
    }

    async function loadCases(){
        if(loading){
            return;
        }

        if(cases.length > 0 ){
            return;
        }

        setLoading(true);

        const response = await api.get('cases');
        setCases([...cases, ...response.data])
        setLoading(false)
    }

    useEffect(() => {
        loadCases();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.headerImg}/>
                <Text style={styles.headerText}>
                    Bem vindo ao Help The Next
                </Text>
            </View>

            <FlatList 
                data={cases}
                keyExtractor={cases => String(cases.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCases}
                onEndReachedThreshold={0.2}
                style={styles.caseList}
                renderItem={({ item: cases }) => (
                    <View style={styles.case}>
                        <Text style={styles.caseProperty}>CASO</Text>
                        <Text style={styles.caseValue}>{cases.title}</Text>

                        <Text style={styles.caseProperty}>DESCRIÇÃO</Text>
                        <Text style={styles.caseValue}>{cases.description}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(cases)}
                        >

                        </TouchableOpacity>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.actionWhats} onPress={sendWhatsapp}>
                                <Text style={styles.actionText}>WhatsApp</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.actionEmail} onPress={sendEmail}>
                                <Text style={styles.actionText}>E-mail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )}
            />
        </View>
    );
}