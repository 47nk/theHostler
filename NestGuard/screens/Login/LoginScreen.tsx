import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, TouchableOpacity, TextInput, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../Utils/colors';

class LoginScreen extends React.Component {
   
    render() {
   let { navigation } = this.props
  let image = require('./undraw_city_life_gnpr.png')
  const { width, height } = Image.resolveAssetSource(image);
        return (
            <SafeAreaView style ={{backgroundColor: "black", flex: 1}}>
                <View style={{ padding:16, marginTop:10, marginBottom: 32}}>
                    <TouchableOpacity  onPress={() => {navigation.popToTop()}}>
                        <Image style={{width:42, height:42}} source={require('./Button.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{  overflow: 'hidden', alignItems: 'center', position: 'relative', aspectRatio: width/height, }}>
                    <Image style={{ flex:1 }} resizeMode='contain' source={image} />
                </View>
                <View style={{margin: 16,marginTop:46}}>
                    <View style={{flexDirection:"row", marginBottom: 10, alignItems:"baseline"}} >
                        <Text style = {{color: colors.text, fontSize: 14, fontWeight:400}} >Enter your </Text>
                        <Text style = {{color: colors.piramiry, fontSize:16, fontWeight:"bold"}} >Phone Number</Text>
                    </View>
                    <TextInput style={{ height: 50, borderWidth: 1, padding: 16, borderRadius: 8, borderColor: "white", color:"white"}} placeholderTextColor = {"grey"} placeholder="Phone Number" keyboardType="numeric" />
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate("EnterOTP")}} style={{padding: 14, margin:31, backgroundColor: colors.piramiry, borderRadius: 6, justifyContent:'center', flexDirection:"row"}}>
                    <Text style = {{color: colors.primairyText, fontSize:16, fontWeight:500, paddingLeft: 8}} >Proceed</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}


export default LoginScreen;
