import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerImg: {
        width: 200,
        height: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#555'
    },

    caseList: {
        marginTop: 32
    },


    case: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    caseProperty :{
        fontSize: 14,
        color: '#555',
        fontWeight: 'bold'
    }, 

    caseValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#666'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    actionWhats: {
        backgroundColor: '#009933',
        borderRadius: 6,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionEmail: {
        backgroundColor: '#0066b3',
        borderRadius: 6,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }


});