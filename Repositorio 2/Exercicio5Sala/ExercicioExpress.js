const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

// Middleware para fazer o parsing do corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para listar 3 nomes diferentes
app.get('/listagem', (req, res) => {
    const nomes = ['Bryan', 'Kamilla', 'Bianca']; // Exemplo de lista de nomes
    res.json(nomes);
});

// Rota para criar novos registros com 3 parâmetros via JSON
app.post('/criar', (req, res) => {
    const { nome, rgm, disciplina } = req.body;
    
    // Verifica se todos os parâmetros foram fornecidos
    if (!nome || !rgm || !disciplina) {
        return res.status(400).json({ error: 'Todos os parâmetros (nome, rgm, disciplina) são obrigatórios.' });
    }
    
    // Simplesmente retorna os parâmetros recebidos como confirmação
    res.json({ nome, rgm, disciplina });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
