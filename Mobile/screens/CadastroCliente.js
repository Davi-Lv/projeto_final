import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Input } from "react-native-elements";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function CadastroCliente({ navigation, route }) {
  const [getEmail, setEmail] = useState();
  const [getPasswordd, setPasswordd] = useState();
  const [getNome, setNome] = useState();

  const SalvarDados = async () => {
    await axios
      .post("http://192.168.1.102:5555/clientes/", {
        email: getEmail,
        Passwordd: getPasswordd,
        nome: getNome,
      })
      .then(function (response) {
        showMessage({
          message: "Cadastro Realizado com sucesso!!",
          type: "success",
        });
      })
      .catch(function (error) {
        showMessage({
          message: "Registro não realizado, volte novamente mais tarde.",
          type: "warning",
        });
      });
  };

  useEffect(() => {
    if (route.params) {
      const { email } = route.params;
      const { passwordd } = route.params;
      const { nome } = route.params;

      setEmail(email);
      setPasswordd(passwordd);
      setNome(nome);
    }
  }, []);

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 3, alignItems: "center", paddingTop: 100 }}>
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: "http://cdn.onlinewebfonts.com/svg/img_329115.png",
          }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={styles.entrarContaText}>Cadastro de conta</Text>
        <Input
          placeholder="Nome"
          onChangeText={(text) => setNome(text)}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          onChangeText={(text) => setPasswordd(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Button
          onPress={SalvarDados}
          title="Salvar"
          buttonStyle={[styles.Button, { backgroundColor: "#435159" }]}
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
