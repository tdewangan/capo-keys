import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../actions';

class ViewChordsButton extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text h3>Hello</Text>
                <Button
                    raised
                    icon={{ name: 'library-music' }}
                    backgroundColor="#2196F3"
                    title="View Transposed Chords"
                    onPress={() => this.props.openChordsModal()}
                />
            </View>
        );
    }
}

export default connect(null, { openChordsModal })(ViewChordsButton);
