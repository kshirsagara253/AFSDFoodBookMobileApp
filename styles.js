// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        padding: 20,
    },
    header: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    logo: {
        height: '40vmin',
        pointerEvents: 'none',
    },
    link: {
        color: '#61dafb',
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 2,
        overflow: 'hidden',
        marginBottom: 20,
        height: 400,
        width: 400,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'cover',
    },
    cardBody: {
        padding: 20,
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    recipeLink: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#202b66',
        borderRadius: 4,
        padding: 10,
        width: 100,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
    },
    searchBox: {
        marginTop: 20,
        width: 400,
        padding: 10,
        fontSize: 16,
    },
});

export default styles;
