import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class CapoKey extends Component {
    render() {
        return (
            <View>
                <Text h3>CapoKey</Text>
                <Text h1>(Key)</Text>
            </View>
        );
    }
}

export default connect()(CapoKey);
