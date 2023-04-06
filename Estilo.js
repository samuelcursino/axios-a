import {StyleSheet} from "react-native";

const Estilo = StyleSheet.create({
    h3: {
        color: 'black',
        fontStyle: 'italic',
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    texto: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
        color: 'blue',
    },
    caixa: {
        borderWidth: 1,
        borderRadius: 20,
        minWidth: 300,
        textAlign: 'center',
        padding: 16,
    },
    botao: {
        backgroundColor: 'blue',
        margin: 48,
        padding: 16,
        borderRadius: 20,        
    },
    textoBotao: {
        color: 'yellow',
    }

})

export default Estilo;