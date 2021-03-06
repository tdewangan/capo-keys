import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import Expo from 'expo';
import icon from './../assets/icons/app-icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from './../constants';

import KeysButtons from './../components/KeysButtons';
import CapoButtons from './../components/CapoButtons';
import CapoKey from './../components/CapoKey';
import ViewChordsButton from './../components/ViewChordsButton';

const cacheImages = (images) => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: (
            <Image
                source={icon}
                style={styles.logoStyle}
            />
        )
    });
    state = {
        appIsReady: false
    }
    componentWillMount() {
        this.loadAssetsAsync();
    }
    async loadAssetsAsync() {
        const imageAssets = cacheImages([icon]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                {/* Modal */}
                <View style={styles.containerStyle}>
                    <KeysButtons />
                    <Divider style={styles.dividerStyle} />
                    <CapoButtons />
                    <Divider style={styles.dividerStyle} />
                    <CapoKey />
                </View>
                <ViewChordsButton style={styles.buttonContainerStyle} />
                {/* Content */}
            </View>
        );
    }

}
const styles = {
    logoStyle: {
        marginTop: 20,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dividerStyle: {
        backgroundColor: '#2196F3',
        width: SCREEN_WIDTH * 0.9
    },
    buttonContainerStyle: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
export default MainScreen;
