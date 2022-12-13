import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Input } from "react-native-elements";

export default function Login({ navigation, route }) {
  const [getEmail, setEmail] = useState();
  const [getPasswordd, setPasswordd] = useState();

  async function entrar() {
    await axios
      .get("http://192.168.1.102:5555", {
        email: getEmail,
        Passwordd: getPasswordd,
      })
      .then(function (response) {
        console.log(response);
        navigation.navigate("Lista");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 2.5, alignItems: "center", paddingTop: 100 }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: "http://cdn.onlinewebfonts.com/svg/img_329115.png",
          }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.entrarContaText}>Login</Text>
        <Input
          placeholder="Email"
          onChange={(value) => setEmail(value)}
          onChangeText={(text) => setEmail(text)}
          leftIcon={{ type: "email", name: "email", color: "#414E68" }}
        />
        <Text style={styles.entrarContaText}>Senha</Text>
        <Input
          placeholder="Senha"
          onChange={(value) => setPasswordd(value)}
          secureTextEntry={true}
          leftIcon={{ type: "Password", name: "vpn-key", color: "#414E68" }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate("ListDeProdutos"), entrar;
          }}
          buttonStyle={[styles.Button, { backgroundColor: "#435159" }]}
        />
        <Button
          title="Cadastre-se"
          onPress={() => navigation.navigate("CadastroCliente")}
          buttonStyle={[styles.Button]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EBF0F2",
  },
  Button: {
    marginBottom: 20,
    backgroundColor: "#697F8C",
  },
  entrarContaText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
