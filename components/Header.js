import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function Header(props) {
  const [tela, setTela] = useState(1);
  const voltarHome = () => {
    props.setTela(1);
  };
  
  return (
    <View
      style={{
        position: 'fixed',
        overflow: 'hidden',
        top: 0,
        width: '100%',
        zIndex: 10,
      }}>
      <View
        style={{
          height: 70,
          padding: 10,
          backgroundColor: 'black',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 2,
          borderColor: 'red',
        }}>
        <Text style={styles.header}>OpenFlix</Text>
        <Text style={styles.header}>
          <TouchableOpacity onPress={voltarHome}>
            <Image
              style={styles.logo}
              source={require('../assets/home_circle_icon_137496.png')}
            />
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Sans-serif',
    fontSize: 20,
    marginTop: 15,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: '50%',
    backgroundColor: 'red',
  },
});
