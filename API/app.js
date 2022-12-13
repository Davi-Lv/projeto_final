const express = require("express");
const mysql = require("mysql2");
const connect = require("./conexao.js");

// Criando um objeto express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CADASTRAR O CLIENTE NO BANCO
  // TYPE POST para adicionar um cliente ao banco
  app.post("/clientes/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    return connect.execSQLQuery(
      "insert into cliente (nome, passwordd, email) value('" + req.body.nome + "','" + req.body.passwordd + "','" + req.body.email + "')",
      res
    );
  });

// CADASTRAR O PRODUTO NO BANCO
  // Type POST para adiconar produto ao banco
  app.post("/produto/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    return connect.execSQLQuery(
      "insert into produto (nomeProduto, capacidade, preco) value('" + req.body.nomeProduto + "','" + req.body.capacidade + "','" + req.body.preco + "')",
      res
    );
  });

// ALTERAÇÃO / EXCLUSÃO DE PRODUTOS
    // TYPE PUT para atualizar um produto no banco os dados
    app.put("/produto/:id", (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "PUT");
      return connect.execSQLQuery(
        "update produto set nomeProduto='" + req.body.nomeProduto + "', capacidade=" + req.body.capacidade + ", preco=" + req.body.preco + " where id=" + req.params.id + "",
        res
      );
    });

  // TYPE DELETE para deletar um produto do banco de dados
  app.delete("/produto/:id", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE");
    return connect.execSQLQuery(
      "delete from produto where id=" + req.params.id,
      res
    );
  });
// FIM - ALTERAÇÃO / EXCLUSÃO DE PRODUTOS


// Numero da porta
const PORT = process.env.PORT || 5555;

// Servidor Setup
app.listen(PORT, console.log(`Servidor começou na porta ${PORT}`));
