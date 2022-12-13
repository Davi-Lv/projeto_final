import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ListItem, Button, Header, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";

export default function ListaScreen({ navigation, route }) {
  const [list, setlist] = useState([]);
  const refresh = useIsFocused();

  useEffect(() => {
    function consultarDados() {
      axios
        .get("http://192.168.1.102:5555/clientes/")
        .then(function (response) {
          setlist(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    consultarDados();
  }, [refresh]);

  return (
    <View>
      <Header
        centerComponent={{
          text: "Lista de produtos",
          style: { color: "#fff" },
        }}
        rightComponent={
          <Button
            title="+"
            onPress={() => navigation.navigate("CadastroProduto")}
          />
        }
      />

      <ScrollView>
        {list.map((produto, indice) => (
          <ListItem
            key={indice}
            bottomDivider
            onPress={() =>
              navigation.navigate("AlterarProduto", {
                nomeProduto: produto.nomeProduto,
                capacidade: produto.capacidade,
                preco: produto.preco,
                id: produto.id,
              })
            }
          >
            <Card title="CARD WITH DIVIDER">
              <Image
                style={styles.imagens}
                source={{
                  uri: "https://www.magazinerural.com.br/media/padroes/produto-sem-imagem.png",
                }}
              />

              <ListItem.Content>
                <ListItem.Title>Produto: {produto.nomeProduto}</ListItem.Title>
                <ListItem.Subtitle>
                  Capacidade: {produto.capacidade}
                </ListItem.Subtitle>
                <ListItem.Subtitle>Valor: {produto.preco}</ListItem.Subtitle>
              </ListItem.Content>
            </Card>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imagens: {
    width: 300,
    height: 200,
  },
});
