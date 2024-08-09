/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/Home';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ListComp from './src/List';

const { width, height } = Dimensions.get('window');


const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username != "test" || password != "test") {
      alert("Please enter valid username and password");
      return;
    }

    onLogin();
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={"#276975"} barStyle="dark-content" />

      <View style={styles.incline} />

      <View style={{ paddingHorizontal: "7%" }} >

        <View style={styles.header}>
          <Text style={styles.headerText}>Proceed With Your</Text>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <Text style={{ color: "#276975", fontSize: 14 }} >Enter Username</Text>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={(value) => { setUsername(value); }} placeholder="Enter Username" style={styles.input} />
          <Icon name="user" size={20} color="#276975" style={styles.icon} />
        </View>

        <Text style={{ color: "#276975", fontSize: 14 }} >Enter Password</Text>

        <View style={styles.inputContainer}>
          <TextInput onChangeText={(value) => { setPassword(value) }} placeholder="Enter Password" secureTextEntry={!showPassword} style={styles.input} />
          <TouchableOpacity onPress={() => { setShowPassword(!showPassword); }} >
            <Icon name={showPassword ? "eye" : "eye-slash"} size={20} color="#276975" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => { handleLogin() }} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const App = () => {
  const [login, setLogin] = useState(false);
  const [activeComp, setActiveComp] = useState(1);
  return (
    <>
      {activeComp === 0 ? <LoginScreen onLogin={() => { setLogin(true); setActiveComp(1); }} /> : <></>}
      {activeComp === 1 ? <HomeScreen /> : <></>}
      {activeComp === 2 ? <ListComp /> : <></>}

      {activeComp != 0 ? <View style={{ width: "100%", height: 50, backgroundColor: "#276975", position: "absolute", bottom: 0, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
        <TouchableOpacity onPress={() => { setActiveComp(1); }}
          style={[
            { width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 2 },
            activeComp === 1 ? { backgroundColor: "white" } : {}
          ]}
        >
          <MaterialCommunityIcon name="qrcode-scan" color={activeComp === 1 ? "#276975" : "white"} size={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setActiveComp(2); }} style={
          [
            { width: 30, height: 30, justifyContent: "center", alignItems: "center", borderRadius: 2 },
            activeComp === 2 ? { backgroundColor: "white" } : {}
          ]
        } >
          <Entypo name="text-document" color={activeComp === 2 ? "#276975" : "white"} size={20} />
          <AntDesign name="clockcircleo" color={activeComp === 2 ? "#276975" : "white"} size={10} style={{ position: "absolute", bottom: 1, left: -1, zIndex: 1 }} />
        </TouchableOpacity>
      </View> : <></>}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  incline: {
    width: width * 1.5, // make it wider than the screen
    height: height / 4.5,
    backgroundColor: '#276975',
    // position: 'absolute',
    top: -50,
    left: -width * 0.25,
    transform: [{ rotate: '-15deg' }],
  },
  header: {
    marginBottom: 50,
    marginTop: 50
  },
  headerText: {
    fontSize: 16,
    color: '#276975',
  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#276975',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E0',
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#4A5568',
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: '#276975',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
