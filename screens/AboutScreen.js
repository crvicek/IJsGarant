import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View, StatusBar } from 'react-native';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.logo}>
          <Image source={require('../assets/images/icon.png')} />
        </View>

        <Text style={styles.title}>IJS-GARANT</Text>
        <View style={styles.separator} />

        <Text style={styles.about}>
          {`Weerenweg 10
1161AH Zwanenburg (Amsterdam)

T: 020-2612591
E: amsterdam@ijs-garant.nl

kvk nr: 62496905
btw nr: NL817756644B01`}
        </Text>

        <Text style={styles.title}>OPENINGSTIJDEN</Text>
        <View style={styles.separator} />

        <Text style={styles.about}>
          {`IJs ophalen? Maak een afspraak!
Bel: 020 2612591

Onze bezorgtijden:
maandag t/m zondag
09:00 uur t/m 22:00 uur

VOLG ONS OP FACEBOOK`}
        </Text>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009CDE',
    marginTop: StatusBar.currentHeight,
  },
  title: {
    margin: 25,
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'lato',
  },
  about: {
    marginHorizontal: 25,
    marginVertical: 10,
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'lato',
  },
  logo: {
    backgroundColor: '#fff',
    flex: 1,
    resizeMode: 'contain',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#fff',
    marginHorizontal: 25,
  }
});
