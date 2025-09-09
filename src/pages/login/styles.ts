import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    loginContainer: {
        width: '75%',
        margin: 45,
        marginTop: 150,
    },
    logo: {
        width: 350,
        height: 230,
        marginBottom: 2,
        margin: -29,
    },
    inputContainer: {
        width: '85%',
        alignItems: 'center',
        margin: 25,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        fontWeight: '700',
    },
    inputFocused: {
        borderColor: '#8A2BE2',
        shadowColor: '#8A2BE2',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    button: {
        marginTop: 10,
        width: '60%',
        height: 50,
        backgroundColor: '#4B0082',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#8A2BE2',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    footerContainer: {
        marginTop: 100,
        alignItems: 'center',
        paddingBottom: 20,
        justifyContent: 'center',
    },
    footerWhite: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 8,
    },
    footerPurple: {
        color: '#4B0082',
        fontSize: 15,
        fontWeight: '600',
    },
});
