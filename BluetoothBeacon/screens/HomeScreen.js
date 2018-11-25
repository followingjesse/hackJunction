import React from 'react';
import {
  Alert,
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {WebBrowser} from 'expo';
import t from 'tcomb-form-native';
import {MonoText} from '../components/StyledText';
import logo from '../assets/images/kesko.png';
import bluetooth from '../assets/images/bluetooth.png';

const Form = t.form.Form;
const User = t.struct({email: t.String, password: t.String});

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
      logo: true,
      bluetooth: false
    };
  }
  static navigationOptions = {
    header: null
  };

  recommendation() {
    return "We suggest ice cream because tasty"
  }

  loggedIn = () => {
    this.setState({
      login: !this.state.login
    });
    this.setState({
      logo: !this.state.logo
    });
    this.setState({
      bluetooth: !this.state.bluetooth
    })
  };
  alert = (msg) => {
    console.log(msg)
  }

  onDeleteBTN = () => {
    this.alert(' OnDelete')
  }

  onPressEvent = () => {
    Alert.alert(
  'Whole Wheat Cheese',
  'Lactose \& Gluten Free',
  [
    {text: 'Add to cart', onPress: () => console.log('added to cart')},
    {text: 'Not interested', onPress: () => console.log('deleted'), style: 'cancel'},
    {text: 'Add to wishlist', onPress: () => console.log('added to wishlist')},
  ],
  { cancelable: false }
)
  }
  render() {
    return (<View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          {this.state.logo && <Image source={logo} style={styles.welcomeImage}/>}
          {
            this.state.bluetooth && <View style={styles.getStartedContainer}><Image source={bluetooth} style={styles.welcomeImage}/>
                <Text style={styles.liveContainer}>Suggested items will automatically appear as you walk through the store</Text>
                <Text style={styles.liveContainer}>
                  Happy Shopping!</Text>
                <Button color="#fff" title="button" onPress={this.onPressEvent}/>

              </View>
          }
        </View>
        {
          this.state.login && <View style={styles.getStartedContainer}>

              <Text style={styles.getStartedText}>Welcome to K Mart</Text>

              <View style={styles.form}>
                <Form type={User}/>
              </View>
              <View style={styles.login}>
                <Button onPress={this.loggedIn} title="Login" accessibilityLabel="Click to login" color="#fff"/>
              </View>
            </View>
        }

      </ScrollView>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 125
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  liveContainer: {
    marginTop: 20,
    fontSize: 17,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center'
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: -3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  form: {
    width: 200,
    marginTop: 20
  },
  login: {
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: 'rgb(222, 124, 22)'
  }
});
