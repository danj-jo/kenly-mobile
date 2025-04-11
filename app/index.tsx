import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    Touchable,
    TouchableOpacity,
    Button
} from "react-native";
import {useState} from "react"
import auth from "@react-native-firebase/auth"

export default function Index() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const signUp = async (mail: string, pass: string) => {
       try  {
            setLoading(true)
           await auth().createUserWithEmailAndPassword(mail, pass)
           alert('Your account has been created')
           // this method signs in and creates account
        }
        catch(e){
           console.error(e)
        }
        finally {
           setLoading(false)
       }

    }

    const signIn = () => {}
  return (
    <View
      style={styles.container}
    >
    <KeyboardAvoidingView behavior="padding">
        <Text> Email: </Text>
        <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            />
        <Text> Password: </Text>
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            autoCapitalize={"none"}
            secureTextEntry
        />
       <Button title={"Sign Up"} onPress={() => signUp}/>

    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex:1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
})