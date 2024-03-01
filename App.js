import { StyleSheet, View} from "react-native";
import FotoPerfil from "../primeiro-app/src/assets/perfil.png";
import InfoProfile from "./src/components/InfoProfile";
import MyPosts from "./src/components/MyPosts";

export default function App(){
    return (
        <View style={styles.container}>
            <InfoProfile
            image = {FotoPerfil}
            publi = {120}
            followers = {1000}
            following = {150}
            descriptions="Derick"/>
            <MyPosts/>
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