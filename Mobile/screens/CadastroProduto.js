import axios from "axios";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Button, Header } from "react-native-elements";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function CadastroProduto({ navigation, route }) {
  const [getNomeProduto, setNomeProduto] = useState();
  const [getCapacidade, setCapacidade] = useState();
  const [getPreco, setPreco] = useState();

  async function inserirDados() {
    await axios
      .post("http://192.168.1.102:5555/produto/", {
        nomeProduto: getNomeProduto,
        capacidade: getCapacidade,
        preco: getPreco,
      })
      .then(function (response) {
        showMessage({
          message: "Registro salvo com sucesso!",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
        showMessage({
          message: "Registro não realizado, volte novamente mais tarde.",
          type: "warning",
        });        
      });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <FlashMessage position="top" />
      <Header
        centerComponent={{ text: "Inserir dados", style: { color: "#fff" } }}
        leftComponent={
          <Button title="<" onPress={() => navigation.navigate("ListaDeProduto")} />
        }
      />
      <Text>Nome</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setNomeProduto(text)}
      />

      <Text >Capacidade</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setCapacidade(text)}
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <Text>Preço (R$)</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setPreco(text)}
        keyboardType="number-pad"
        returnKeyType="done"
      />
      <Button
        title="Salvar"
        style={{ paddingTop: 20, width: 300 }}
        onPress={() => inserirDados()}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
