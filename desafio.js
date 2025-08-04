let nome = "Andrômeda";
let classe = "maga";
let nivel = 13;
let vida = 100;
let ouro = 63;
let xp = 70;
let danoBase = 50;

const NOME_ARMA = "katana de bugs"
const NOME_ARMADURA = "Armadura criptografada"
const DEFESA_BASE = 40

xp += 150;
ouro -= 30;
vida += 40;
danoBase *= 2;

let ataqueTotal = nivel + danoBase;
let defesaTotal = DEFESA_BASE + (nivel / 2);

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log("Lore da personagem:", nome)
console.log("")
console.log(`${nome}, uma ${classe} lendária, vive na vila abandonada de bugs do reino de Algorithmia`);
console.log(`Onde encontrou a ${NOME_ARMA}, uma arma antiga, capaz de bugar sistemas `);
console.log(`Com um nivel de ${nivel} e ataque total de ${ataqueTotal}, é temida pelos programadores`);
console.log(`Com sua ${NOME_ARMADURA}, sua resistencia é aumentada para ${DEFESA_BASE}`);
console.log(`Após treinar por anos na vila, sua experiencia aumentou para ${xp} e agora guarda ${ouro} moedas`);
console.log(`Depois de se recuperar de ataques de inimigos, sua vida é restaurada em ${vida} pontos`);
console.log("Vida Restante:", vidaSuficiente , "Ataque Forte:", ataqueForte  , "Nível avançado:", nivelAvancado);
console.log("Pode enfrentar o Guardião dos códigos?", podeEnfrentarGuardiao);

// Continuação

//Atributos do Guerreiro

let nomePersonagem = "Andrômeda";
let classePersonagem = "Maga";
let vidaAtual = vida;
let vidaMaxima = 150;
let manaAtual = 100;
let manaMaxima = 200;
let nivelAtual = nivel;
let experiencia = xp;
let ouroAtual = ouro;

//Novos atributos para batalha
let forca = 50;
let defesa = 100;
let agilidade = 60;
let combateVencidos = 2;

//Estado atual da história
let localAtual = "Vila abandonada no reino de Algorithmia";
let missaoAtual = "Enfrentar o Guardião dos códigos";

//Prólogo
console.log ("")
console.log("PRÓLOGO:")
console.log(`${nomePersonagem} uma ${classePersonagem} lendária, se prepara para enfrentar o grande Guardião dos códigos, afim de recuperar os códigos ancestrais que foram roubados a milhares de anos`);
console.log(`Com sua ${NOME_ARMA}, ela treina por dias, até que o dia finalmente chegue, aumentando cada uma de suas habilidades.`);
console.log(`Sua força: ${forca} | Sua defesa: ${defesa} | Sua agilidade: ${agilidade}`);

//CAPÍTULO 1: Condicionais Simples na narrativa
console.log("")
console.log("CAPÍTULO 1: O aviso dos ancestrais");

//Verificação baseada no nível do personagem
if (nivelAtual < 10) {
    console.log(`Uma voz em sua mente avisa que você precisa treinar mais com a ${NOME_ARMA}, afim de que adquira novas habilidades`);
}

//Verificação de resursos especiais
if (ouroAtual >= 50 ) {
    console.log(`${nomePersonagem} vai até uma cabana isolada nas profundezas da floresta, onde um mago bem antigo vende poções mágicas`);
}

//Verificação de classe específica
if (classe == "Maga") {
    console.log("A mágia escorre através das profundezas de sua alma...");
}