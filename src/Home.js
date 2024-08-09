import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, StatusBar, PermissionsAndroid, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const { width } = Dimensions.get('window');

const HomeScreen = () => {

    const [showQrScanner, setShowQrScanner] = useState(false);

    const onSuccess = async (data) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message:
                        'App needs access to your camera ' +
                        'so you can scan qr code.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            } else {
                Linking.openSettings();
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Camera Permission',
                    message:
                        'App needs access to your camera ' +
                        'so you can scan qr code.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("done");
            } else {
                console.warn("warn", granted);
            }
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        requestCameraPermission();
    }, [])

    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor={"#276975"} barStyle="dark-content" />

                {/* Top Navigation Bar */}
                <View style={styles.navbar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Ionicons name="logo-tux" size={40} color="#276975" style={styles.logo} />
                        <Text style={styles.brandText}>Tranzol</Text>
                    </View>
                    <View style={styles.navIcons}>
                        <View style={{ flexDirection: "row", fontWeight: "700" }} >
                            <TouchableOpacity>
                                <Entypo name="location" size={20} color="#276975" />
                            </TouchableOpacity>
                            <Text style={{ color: "#276975", fontWeight: "700", marginLeft: 5 }} >Enter Code</Text>
                        </View>
                        <TouchableOpacity style={{ alignSelf: "flex-end" }} >
                            <Icon name="sign-out" size={20} color="#276975" style={styles.logoutIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {showQrScanner ? <View style={{ width: 150, height: 150, backgroundColor: "red" }} >
                    <QRCodeScanner
                        onRead={onSuccess}
                        flashMode={RNCamera.Constants.FlashMode.torch}
                        topContent={
                            <Text style={styles.centerText}>
                                Go to{' '}
                                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                                your computer and scan the QR code.
                            </Text>
                        }
                        bottomContent={
                            <TouchableOpacity style={styles.buttonTouchable}>
                                <Text style={styles.buttonText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        }
                    />
                </View> : <></>}

                {/* Scanner Section */}
                <Text style={styles.scannerText}>Scanner</Text>
                <View style={styles.scanBox}>
                    <TouchableOpacity onPress={() => { setShowQrScanner(true); }} style={styles.scanButton}>
                        <Text style={styles.scanButtonText}>SCAN HERE</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Enter PassNo" style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Enter TruckNo" style={styles.input} />
                </View>

                {/* In and Out Buttons */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>OUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    logo: {
        marginRight: 10,
    },
    brandText: {
        fontSize: 20,
        color: '#276975',
        fontWeight: 'bold',
    },
    navIcons: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    logoutIcon: {
        marginLeft: 20,
    },
    scannerText: {
        fontSize: 22,
        color: '#276975',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    scanBox: {
        height: 200,
        backgroundColor: '#276975',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    scanButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    scanButtonText: {
        color: '#276975',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#CBD5E0',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    input: {
        fontSize: 16,
        color: '#276975',
        paddingVertical: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    actionButton: {
        backgroundColor: '#276975',
        paddingVertical: 15,
        width: width * 0.4,
        borderRadius: 5,
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
