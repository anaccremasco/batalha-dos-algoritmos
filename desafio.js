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
if (nivelAtual > 10) {
    console.log(`Uma voz em sua mente avisa que está na hora, ela finalmente está pronta`);
}

//Verificação de resursos especiais
if (ouroAtual >= 30 ) {
    console.log(`${nomePersonagem} vai até uma cabana isolada nas profundezas da floresta, onde um ancião bem antigo vende poções mágicas`);
    console.log(`${nomePersonagem} comprou uma poção para enfeitiçar sua ${NOME_ARMA} e agora está com ${ouroAtual - 30} moedas de ouro`)
    ouroAtual = ouroAtual - 30
}

//Verificação de classe específica
if (classe == "maga") {
    console.log("A mágia escorre através das profundezas de sua alma...");
}

//CAPÍTULO 2: Escolha Estratégica
console.log("");
console.log("CAPÍTULO 2: Katana do Destino");

//Escolhas baseadas em recursos
if (ouroAtual >= 50) {
    console.log(`Com tantas moedas sobrando, ${nomePersonagem} consegue comprar mais poções na caverna`);
} else {
    console.log("Você não tem ouro suficiente, mas conseguiu comprar a sua poção para sua katana com as moedas que você tinha antes");
}

//Sua experiencia e mágia
if (xp >= 100) {
    console.log(`${nomePersonagem} tem experiencia suficiente para conseguir encantar sua ${NOME_ARMA} sozinha`);
} else {
    console.log(`${nomePersonagem} precisa de ajuda do velho ancião para encantar sua katana `);
}

//CAPÍTULO 3: A Batalha Ancestral
console.log("");
console.log("CAPÍTULO 3: A Batalha Ancestral ");
let poderInimigo = 70;

//Combate
if (vidaAtual <= 30) {
    console.log(`Com sua vida quase chegando ao fim ${nomePersonagem} já não consegue respirar com antes, entino sua visão ficando turva e escura.`);
    console.log(`Com sua última chance de sobreviver, usa toda sua força que lhe resta`);
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 50 && classe === "maga") {
    console.log(`${nomePersonagem} usa todo seu poder mágico junto com sua ${NOME_ARMA}`)
    poderInimigo -= (forca + 20);
    manaAtual -= 30
} else {
    console.log("Luta final")
    poderInimigo -= (forca / 2);
    vidaAtual += 10;
}

//EPÍLOGO
if (poderInimigo <= 0) {
    console.log("A batalha foi vencida")
    experiencia += 100;
    combateVencidos++;
    console.log(`${nomePersonagem} é uma lenda em toda Algorithmia`)
} else {
    console.log("A batalha foi perdida" + nomePersonagem + "não conseguiu sobreviver a batalha")
}

console.log("")
console.log("FIM DO CAPÍTULO")