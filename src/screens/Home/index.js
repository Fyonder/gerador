import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/Modal';

let charset = "abcderfhijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXWYZ@#$%0123456789"

const Home = () => {

    const [size, setSize] = useState(10)
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVizible, setModalVizible] = useState(false);

    function generatePassword() {
        let password = "";

        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n))
        }

        setPasswordValue(password)
        setModalVizible(true);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
            />

            <Text style={styles.title}>{size} Caracteres</Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={20}
                    minimumTrackTintColor="#000"
                    maximumTrackTintColor="#ff0000"
                    thumbTintColor="#392de9"
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVizible} animationType="fade" transparent={true}>
                <ModalPassword
                    password={passwordValue}
                    handleClose={() => setModalVizible(false)}
                />
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F3FF",
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 6,
    },
    button: {
        backgroundColor: '#392de9',
        width: "80%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 18,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Home;