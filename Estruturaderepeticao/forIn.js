const carro = {
    marca: "Toyota",
    modelo: "Hillux",
    ano: 2024,
    cor: "Branca"
};
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}