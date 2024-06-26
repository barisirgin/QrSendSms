import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Henüz taranamadı')

  //Kamera izni tanımlama
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }
  
  // Kamera İzni İste
  useEffect(() => {
    askForCameraPermission();

  }, []);

 
  // Barkodu taradığımızda terminalde ne olacagi
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
   
  };

  // İzinleri kontrol edin ve ekranları döndürün
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Kamera izni istiyorum ?</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Kameraya erismek istiyorum ?'} onPress={() => askForCameraPermission()} />
        
      </View>)
  }

  // Görünümü tekrar taramak için döndür
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title={'Tekrar taramak ister misin ?'} onPress={() => setScanned(false)} color='green' />}
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    color:"white",
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 320,
    width: 320,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'green'
  },
  
});

