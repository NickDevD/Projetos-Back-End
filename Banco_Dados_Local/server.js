import express from "express";


const img = [
    {
      id: 1,  
      descricao: "Teste 1",
      imagem: "/Banco_Dados_Local/img/60c0c3ee045ba.jpg"
    },
    {
      id: 2,  
      descricao: "Teste 2: Uma imagem incrível!",
      imagem: "/caminho/para/outra/imagem.jpg"
    },
    {
      id: 3,  
      descricao: "Teste 3: Mais uma imagem",
      imagem: "https://exemplo.com/imagem.png" // Você pode usar URLs também
    }
  ];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor executando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Bem vindo ao Servidor Local!");
});


function buscarImgId(id) {
    return img.findIndex((img) =>{
        return img.id === Number(id)
    })
}

app.get("/api/img/:id", (req, res) => {
    const index = buscarImgId(req.params.id);
    res.status(200).json(img[index]);
}) 