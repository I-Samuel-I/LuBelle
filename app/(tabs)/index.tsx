import { Image, Text, TouchableOpacity, View } from "react-native";

import img01 from "../../assets/images/profit.png"
import img02 from "../../assets/images/add.png"
import img03 from "../../assets/images/customer.png"
import img04 from "../../assets/images/ready-stock.png"

import mainContainer from "./style";
import { router, useRouter } from "expo-router";

export default function HomeScreen() {
  const goToStock = () =>{
    router.push("/(tabs)/screens/Products/index")
  }


  return (
    <>
      <View style={mainContainer.global}>
        <View style={mainContainer.headerContainer}>
          <Text style={mainContainer.headerText}>LUBELLE</Text>
        </View>
        <View style={mainContainer.sectionHome}>
          <TouchableOpacity style={mainContainer.sectionButton} onPress={goToStock}>
             <Image source={img04}style={{width: 75, height: 75,}}/>
            <Text style={mainContainer.buttonText}>Estoque</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainContainer.sectionButton}>
            <Image source={img01}style={{width: 75, height: 75,}}/>
            <Text style={mainContainer.buttonText}>Finanças</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainContainer.sectionButton}>
             <Image source={img02}style={{width: 75, height: 75,}}/>
            <Text style={mainContainer.buttonText}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainContainer.sectionButton}>
             <Image source={img03}style={{width: 75, height: 75,}}/>
            <Text style={mainContainer.buttonText}>Clientes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
