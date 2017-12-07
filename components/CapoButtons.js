import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

import { selectCapo } from '../actions';
import { BUTTON_GROUP_STYLE as styles } from './../constants';

const CAPO_POSITIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
class CapoButtons extends Component {
    render() {
        const { selectedCapo } = this.props.selectedValues;
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text h3>Capo</Text>
                <Text h1 style={{ marginBottom: 2 }}>{selectedCapo}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectCapo(index + 1)}
                    selectedIndex={selectedCapo - 1}
                    buttons={CAPO_POSITIONS}
                    containerStyle={styles.containerStyle}
                    buttonStyle={styles.buttonStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                />

            </View>
        );
    }
}

const mapStateToProps = ({ selectedValues }) => ({ selectedValues });
export default connect(mapStateToProps, { selectCapo })(CapoButtons);
