import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class CapoKey extends Component {
    render() {
        const { selectedValues: { capoKeyIndex }, keys } = this.props;
        return (
            <View style={{ alignItems: 'center' }}>
                <Text h3>CapoKey</Text>
                <Text h3>{keys[capoKeyIndex].key}</Text>
            </View>
        );
    }
}
const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });
export default connect(mapStateToProps)(CapoKey);
