import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Picker,
} from 'react-native';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, alignContent: "center", textAlign: "center" }} >
          Special Diets
        </Text>
        <Picker>
          <Picker.Item label="Gluteeniton" value="4" />
          <Picker.Item label="Kananmunaton" value="7" />
          <Picker.Item label="Kasvis (lakto-ovo)" value="6" />
          <Picker.Item label="Laktoositon" value="2" />
          <Picker.Item label="Maidoton" value="3" />
          <Picker.Item label="Sokeriton" value="5" />
          <Picker.Item label="Vähälaktoosinen" value="2" />
        </Picker>
        <Button
          style={{ fontSize: 20, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._handlePress()}
          title="Submit"
        >
        </Button>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
