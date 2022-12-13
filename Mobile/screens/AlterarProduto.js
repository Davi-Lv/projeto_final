import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Header } from "react-native-elements";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function AlterarProduto({ navigation, route }) {
  const [getNomeProduto, setNomeProduto] = useState();
  const [getCapacidade, setCapacidade] = useState();
  const [getPreco, setPreco] = useState();
  const [getId, setId] = useState();

  // receber dados do contatos da pagina Lista
  useEffect(() => {
    if (route.params) {
      const { nomeProduto } = route.params;
      const { capacidade } = route.params;
      const { preco } = route.params;
      const { id } = route.params;

      setNomeProduto(nomeProduto);
      setCapacidade(capacidade);
      setPreco(preco);
      setId(id);
    }
  }, []);

  // alterar os dados da API na Lista - metodo PUT
  function alterarDados() {
    axios
      .put("http://192.168.1.102:5555/produto/:id" + getId, {
        nomeProduto: getNomeProduto,
        capacidade: getCapacidade,
        preco: getPreco,
      })
      .then(function (response) {
        showMessage({
          message: "Produto alterado com sucesso!!",
          type: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
        showMessage({
            message: "Algo deu errado, tente novamente mais tarde.",
            type: "warning",
          });
      });
  }

  // Exclui os dados da API na Lista - metodo DELETE
  function excluirDados() {
    axios
      .delete("http://192.168.1.102:5555/produto/:id" + getId)
      .then(function (response) {
        showMessage({
          message: "Produto excluido com sucesso!!",
          type: "danger",
        });

        setNomeProduto(null);
        setCapacidade(null);
        setPreco(null);
        setId(null);
      })
      .catch(function (error) {
        console.log(error);
        showMessage({
            message: "Algo deu errado, tente novamente mais tarde.",
            type: "warning",
          });
      });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <FlashMessage position="top" />
      <Header
        centerComponent={{ text: "Alterar dados do produto", style: { color: "#fff" } }}
        leftComponent={
          <Button
            title="<"
            onPress={() => navigation.navigate("ListDeProdutos")}
          />
        }
      />
      <Text>Nome</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setNomeProduto(text)}
      />

      <Text>Capacidade</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setCapacidade(text)}
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <Text>Preço (R$)</Text>
      <TextInput
        keyboardType="number-pad"
        returnKeyType="done"
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setPreco(text)}
      />
      <Button
        title="Salvar"
        style={{ paddingTop: 20, width: 300 }}
        buttonStyle={{backgroundColor: "#697F8C"}}
        onPress={() => alterarDados()}
      />
      <Button
        title="Excluir"
        style={{ paddingTop: 20, width: 300 }}
        buttonStyle={{backgroundColor: "#435159"}}
        onPress={() => excluirDados()}
      />
    </View>
  );
}
