import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectKeyIndex } from './../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class KeysButtons extends Component {
    render() {
        const { selectedValues: { selectedKeyIndex }, keys } = this.props;
        const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key]));
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text h3>Key</Text>
                <Text h1>{keys[selectedKeyIndex].key}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectKeyIndex(index)}
                    selectedIndex={selectedKeyIndex}
                    buttons={keyButtons}
                    containerStyle={styles.containerStyle}
                    buttonStyle={styles.buttonStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: 'white'
    },
    selectedTextStyle: {
        color: 'orange',
        fontWeight: '900'
    }
};
const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });
export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);
