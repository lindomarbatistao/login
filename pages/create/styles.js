import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0C4DE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex: 0.5,
        width: '100%',
        alignItems: "center",
        justifyContent: "flex-start",
    },
    container2: {
        backgroundColor: '#00C4DE',
        width: '100%',
        flex: 1.5,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 20,
    },
    texto1: {
        fontSize: 50,
        color: '#000'
    },
    texto2: {
        fontSize: 20,
        color: '#333',
        paddingLeft: 10,
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '100%',
        height: 60,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    caixa1: {
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 8,
        color: '#555',
        height: 40,
        width: '70%',
        padding: 10,
    },
    botaoTabela: {
        backgroundColor: '#3479Af',
        borderRadius: 10,
        height: 40,
        width: '20%',
        alignItems: "center",
        justifyContent: "center",

    },
    direction: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-evenly'
    }
})

export default styles