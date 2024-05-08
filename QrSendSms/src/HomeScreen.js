import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (

    
    <View style={{flex:1,backgroundColor:"black"}} >
      
      <Text style={styles.text}>Merhabalar↓</Text>
      <Button
        
        onPress={() => navigation.navigate('QR')}
        title="QR Kod Tarayıcı"
        color="yellow"
        alignItems="center"
        
      />
      <Button
        onPress={() => navigation.navigate('Con')}
        title="Rehber"
        color="yellow"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "pink",
    fontSize:32,
    fontWeight: "bold",
    alignItems:"center",
    textAlignVertical: "center",
    textAlign: "center",
    alignContent:"center",
    justifyContent: 'center',
    margin: 60,
    borderColor: 'black',
    borderWidth: 40,
   // paddingLeft: 40,
  },

});

export default HomeScreen;

