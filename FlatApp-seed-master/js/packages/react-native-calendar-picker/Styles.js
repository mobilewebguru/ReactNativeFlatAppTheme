/**
* Calendar Picker Component
* By Stephani Alves - April 11, 2015
*/
'use strict';

var StyleSheet = require('react-native').StyleSheet;
var secondary = require('../../themes/base-theme').brandSecondary

var styles = StyleSheet.create({
    calendar: {
        height: null,
        marginTop: 10
    },
    dayWrapper: {
        width: 45,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.0)'
    },

    dayButton: {
        width: 45,
        height: 40,
        alignSelf: 'center'
    },

    dayButtonSelected: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: secondary,
        alignSelf: 'center'
    },

    dayLabel: {
        fontSize: 12,
        color: '#222',
        marginTop: 6,
        fontWeight: '900',
        alignSelf: 'center'
    },
    selectedDayLabel: {
        fontSize: 12,
        color: '#fff',
        marginTop: 6,
        fontWeight: '900',
        alignSelf: 'center' 
    },

    dayLabelsWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        // borderBottomWidth: 1,
        // borderTopWidth: 1,
        // paddingTop: 10,
        // paddingBottom: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.0)',
        // borderColor: 'rgba(255,255,255,0.4)'
    },

    daysWrapper: {
        // alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 30,
        paddingBottom: 0,
        paddingTop: 10
    },

    dayLabels: {
        width: 45,
        fontSize: 14,
        fontWeight: '900',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
    },

    selectedDay: {
        width: 60,
        height:60,
        backgroundColor: secondary,
        borderRadius: 30,
        alignSelf: 'center'
    },

    monthLabel: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '900',
        width: 180,
        textAlign: 'center'
    },
    headerWrapperYear: {
        
    },
    headerWrapper: {
        alignItems: 'center',  
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 10,
        padding: 5,
        paddingBottom: 3,
        backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthSelector: {
        width: 60,
    },

    prev: {
        textAlign: 'left',
        color: '#fff'
    },

    next: {
        textAlign: 'right',
        color: '#fff'
    },

    yearLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },

    weeks: {
        flexDirection: 'column'
    },

    weekRow: {
        flexDirection: 'row'
    }
});

module.exports = styles;
