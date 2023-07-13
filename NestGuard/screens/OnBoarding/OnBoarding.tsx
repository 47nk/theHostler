import * as React from 'react';
import { Image, View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import styles from './LoginStyle';
import colors from '../../Utils/colors';

function OnBoardingScreen({ navigation }) {

  let image = require('./Graphics.png')
  const { width, height } = Image.resolveAssetSource(image);
  return (
    <SafeAreaView style ={{backgroundColor: "black", flex: 1}}>
        <View style = {styles.titleContainer}>
            <Text style={styles.titleText} >Maintain Room</Text>
            <Text style={{...styles.titleText, fontWeight: "bold", color: colors.piramiry}} >Online</Text>
        </View>

        <View style={{
          overflow: 'hidden',
          alignItems: 'center',
          position: 'relative',
          aspectRatio: width/height,
        }}>
          <Image
             style={{
             flex:1
            }}
            resizeMode='contain'
            source={image}
          />
        </View>
        
        <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{padding: 14, margin:31, backgroundColor: colors.piramiry, borderRadius: 6, justifyContent:'center', flexDirection:"row"}}>
            <Image style={{width:22,height:22}} source={require('./Icons.png')}/>
          <Text style = {{color: colors.primairyText, fontSize:16, fontWeight:500, paddingLeft: 8}} >Continue with phone </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OnBoardingScreen;