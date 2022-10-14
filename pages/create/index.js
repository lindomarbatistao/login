import React, { alert, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, Button } from 'react-native';
import styles from './styles'
import DropDownPicker from 'react-native-dropdown-picker';


export default function Create({ navigation }) {
    const [tabela, setTabela] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.texto1}>
                    Create
                </Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.texto2}>Tabela</Text>
                <View style={styles.direction}>
                    <TextInput
                        style={styles.caixa1}
                        placeholder='Nome da Tabela'
                        onChangeText={(e) => { setTabela(e) }}
                    />
                    <TouchableOpacity
                        style={styles.botaoTabela}
                        onPress={Alert.alert('foi')}
                    >
                        <Text style={styles.texto2}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
