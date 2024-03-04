import { AntDesign, Feather, MaterialIcons, FontAwesome, FontAwesome6, MaterialCommunityIcons    } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.avatarHeader}
            source={{
              uri: "https://th.bing.com/th/id/R.64a211b391773d2dfd1ba11e352f16b2?rik=d7o9YSvVMiDpTg&pid=ImgRaw&r=0",
            }}
          />
          <View style={styles.iconsHeader}>
            <Feather name="eye" color="white" size={22} />
            <AntDesign name="questioncircleo" size={22} color="white" />
            <Feather name="user" size={22} color="white" />
          </View>
        </View>
        <Text style={styles.textHeader}>Olá, Rômulo</Text>
      </View>
      <View style={styles.account}>
        <View style={styles.accountButton}>
          <Text style={styles.textAccount}>Conta</Text>
          <MaterialIcons name="arrow-right" size={24} color="black" />
        </View>
        <Text style={styles.textAmount}>R$ 139.397,21</Text>
      </View>
      <View style={styles.servicos}>

<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>

        <View style={styles.servico}>
          <MaterialIcons name="pix" size={32} color="black" />
          <Text style={{marginTop: 10,}}>PIX</Text>
        </View>

        <View style={styles.servico}>
          <FontAwesome  name="barcode" size={22} color="black" />
          <Text style={{marginTop: 10}}>PAGAR</Text>
        </View>

        <View style={styles.servico}>
          <FontAwesome6  name="money-bill-transfer" size={22} color="black" />
          <Text style={{ fontSize: 11}}>TRANSFERIR</Text>
        </View>

        <View style={styles.servico}>
          <FontAwesome6 name="money-bill-transfer" size={22} color="black" />
          <Text>DEPOSITO</Text>
        </View>

        <View style={styles.servico}>
        <MaterialCommunityIcons name="cellphone-dock" size={24} color="black" />
        <Text>Regargar celular</Text>
        </View>

        <View style={styles.servico}>
          <MaterialIcons name="pix" size={22} color="black" />
          <Text>Cobrar</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  servicos:{
    width: "100%",
    height: 90,
    marginVertical: 10,
  },
  servico: {
    backgroundColor: "#eee",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    padding: 20,
  },
  account: {
    width: "100%",
  },
  accountButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textAccount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textAmount: {
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#9c44dc",
    width: "100%",
    height: 200,
  },
  avatarHeader: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  iconsHeader: {
    flexDirection: "row",
    gap: 12,
  },
  textHeader: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer:{
    paddingVertical: 20,
  },
  
});
