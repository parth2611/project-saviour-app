import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar ,Platform ,ActivityIndicator, PermissionsAndroid, Alert } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';

export default class Camera extends Component {


    static navigationOptions = {
        title: 'Camera',
    };


    state = { isPermitted: false };
    constructor(props) {
        super(props);
    }

    onPress() {
        var that = this;
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'CameraExample App Camera Permission',
                            message: 'CameraExample App needs access to your camera ',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If CAMERA Permission is granted
                        //Calling the WRITE_EXTERNAL_STORAGE permission function
                        requestExternalWritePermission();
                    } else {
                        alert('CAMERA permission denied');
                    }
                } catch (err) {
                    alert('Camera permission err', err);
                    console.warn(err);
                }
            }
            async function requestExternalWritePermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            title: 'CameraExample App External Storage Write Permission',
                            message:
                                'CameraExample App needs access to Storage data in your SD Card ',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If WRITE_EXTERNAL_STORAGE Permission is granted
                        //Calling the READ_EXTERNAL_STORAGE permission function
                        requestExternalReadPermission();
                    } else {
                        alert('WRITE_EXTERNAL_STORAGE permission denied');
                    }
                } catch (err) {
                    alert('Write permission err', err);
                    console.warn(err);
                }
            }
            async function requestExternalReadPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                        {
                            title: 'CameraExample App Read Storage Read Permission',
                            message: 'CameraExample App needs access to your SD Card ',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If READ_EXTERNAL_STORAGE Permission is granted
                        //changing the state to re-render and open the camera
                        //in place of activity indicator
                        that.setState({ isPermitted: true });
                    } else {
                        alert('READ_EXTERNAL_STORAGE permission denied');
                    }
                } catch (err) {
                    alert('Read permission err', err);
                    console.warn(err);
                }
            }
            //Calling the camera permission function
            requestCameraPermission();
        } else {
            this.setState({ isPermitted: true });
        }
    }
    onBottomButtonPressed(event) {
        const captureImages = JSON.stringify(event.captureImages);
        if (event.type === 'left') {
            this.setState({ isPermitted: false });
        } else {
            Alert.alert(
                event.type,
                captureImages,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    }

    render() {

        if (this.state.isPermitted) {
            alert(this.state.isPermitted);
            return (
            

              <CameraKitCameraScreen
                // Buttons to perform action done and cancel
                actions={{
                  rightButtonText: "Done",
                  leftButtonText: "Cancel"
                }}
                onBottomButtonPressed={event =>
                  this.onBottomButtonPressed(event)
                }
                flashImages={{
                  // Flash button images
                  on: require("../../Images/flashon.png"),
                  off: require("../../Images/flashoff.png"),
                    auto: require("../../Images/flashauto.png")
                }}
                    cameraFlipImage={require("../../Images/flip.png")}
                    captureButtonImage={require("../../Images/capture.png")}
              />
            );
        }
        
        else {
            return (
             

                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress.bind(this)}
                  >
                    <Text>Open Camera</Text>
                  </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Container: {
        flex: 1,
        flexDirection: "column"
    },
    topBar: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#256d7b"
    },

    leftHeader: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "flex-start"
    },

    rightHeader: {
        flex: 1,
        justifyContent: "flex-end"
    },

    txtBar: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16, marginLeft: 10
    },

    contentBar: {
        flex: 1
    },

    imgMenu: {
        width: 20,
        height: 20
    },

    imgClick: {
        width: 40,
        height: 40,
        justifyContent: "center"
    },

    imgHome: {
        width: 200,
        height: 200
    }

});