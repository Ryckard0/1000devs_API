const calculaIdade = (req, res) => {
    const hoje = new Date(Date.now())
    const nascimento = new Date("2002-03-19")
    const idade = hoje.getFullYear() - nascimento.getFullYear()

    res.json({
        "nome": "Ricardo",
        "cidade": "Monte Mor",
        "UF": "SP",
        "profissao": "Programador",
        "nascimento": idade,
    })
}

module.exports = {
    calculaIdade
}