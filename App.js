import { StyleSheet, View} from "react-native";
import FotoPerfil from "../instagram/src/assets/perfil.png";
import InfoProfile from "./src/components/InfoProfile";

export default function App(){
    return (
        <View style={styles.container}>
            <InfoProfile
            image = {FotoPerfil}
            publi = {120}
            followers = {1000}
            following = {150}
            descriptions="Derick"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginHorizontal:16,
        marginVertical:35,
    },
})