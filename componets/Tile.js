/**
 * Created by chenqingbiao on 16/7/4.
 */

'use strict';
var React = require('react');

import {
    Component,
    StyleSheet,
    View,
    Text
} from 'react-native';

var Tile = React.createClass({
    render: function () {

        return (
            <View style={styles.tile}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {this.props.header}
                    </Text>
                </View>
                <View style={styles.content}>
                    {this.props.children}
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    tile: {
        backgroundColor: 'rgba(99,140,170,0.5)',
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10
    },
    header: {
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(255,255,255,0.1)'
    },
    headerText:{
        color: '#fff'
    },
    content: {
        flex: 1
    }
});

module.exports = Tile;