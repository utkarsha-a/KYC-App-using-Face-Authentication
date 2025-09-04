import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import backgroundimg from "@/assets/images/flagbg.jpg"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={backgroundimg}
      resizeMode="cover"
      style = {styles.image}
      >
        <Text style={styles.text}>AI Powered KYC App</Text>
      </ImageBackground>
    </View>
  )
}

export default app
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(226, 223, 223, 0.5)',
  }
}
)