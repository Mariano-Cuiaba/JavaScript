// FUnção para exibir informações sobre cada classe de personagem
function exibirInfoClasse(classe) {
  switch (classe) {
    case "Guerreio":
        console.log("Classe: Guerreiro");
        console.log("Descrição: Os guerreiros são combatentes corpo a corpo resistentes, especializados no uso de armas e armaduras pesadas.");
        console.log("Habilidades: Ataque poderoso, restência a danos.");
        break;
    case "Mago":
        console.log("Classe: Mago");
        console.log("Descrição: Os magos são mestres do poder arcano, capazes de lançar feitiços poderoso e controlar os elementos.");
        console.log("Habilidades: Magias de ataque, controle elemental.");
        break;
    case "Ladino":
        console.log("Classe: Ladino");
        console.log("Descrição: Os ladrões são especialistas em furtividade e astúcia, capazes de realizar ataques furtivos e desarmar armadilhas.");
        console.log("Habilidades: Futividade, ataques preciosos.");
        break;
    default:
        console.log ("Classe não reconhecida. Escolha entre Guerreio, Mago ou Ladino.");
    }
}

// Chamando a função e passando como parâmetro "Mago"
exibirInfoClasse("Mago");