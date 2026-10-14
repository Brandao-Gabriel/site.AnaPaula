/* =====================================================================
 * DRA. ANA PAULA BRANDÃO | ODONTOLOGIA
 * JavaScript
 * ===================================================================== */

/* ================================================================
   ✏️ MEXA SOMENTE NESTE BLOCO
   ================================================================ */
var WHATSAPP = "5511942663418";
var EMAIL = "brandao.anapaula@gmail.com";
var ENDERECO = "R. Primeiro de Janeiro, 186 - Vila Clementino, São Paulo, 04044-060";
var FOTO_TRATAMENTO = "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=420";

var TRATAMENTOS = [
  { icon:"🦷", nome:"Clínica Geral", dur:"50 min", resumo:"Cuidados odontológicos completos, incluindo limpeza, restaurações e prevenção de doenças bucais.", detalhe:"A clínica geral oferece atendimento odontológico básico e preventivo, como limpezas profundas, tratamentos de cáries, restaurações e orientações para higiene bucal. Ideal para manutenção da saúde oral e detecção precoce de problemas." },
  { icon:"🔬", nome:"Endodontia", dur:"60 min", resumo:"Tratamento de canal para salvar dentes com infecções profundas.", detalhe:"A endodontia, ou tratamento de canal, remove a polpa infectada do dente, preservando-o. É realizado sob anestesia local, com alta taxa de sucesso, evitando extrações e mantendo a funcionalidade do dente." },
  { icon:"✨", nome:"Alinhadores Estéticos", dur:"Avaliação", resumo:"Correção discreta e confortável para alinhamento dental.", detalhe:"Os alinhadores estéticos são aparelhos transparentes e removíveis que corrigem desalinhamentos dentários de forma invisível. Feitos sob medida, são confortáveis e eficientes, com duração variável dependendo da complexidade." },
  { icon:"💎", nome:"Facetas", dur:"2 sessões", resumo:"Lâminas finas para corrigir forma, cor e imperfeições dos dentes.", detalhe:"As facetas são lâminas de porcelana ou resina aplicadas sobre os dentes para melhorar aparência, corrigindo cor, forma e tamanho. São duradouras e resistentes, proporcionando um sorriso harmonioso e natural." },
  { icon:"🎨", nome:"Restaurações Estéticas", dur:"45 min", resumo:"Reparo de dentes danificados com materiais que combinam estética e funcionalidade.", detalhe:"As restaurações estéticas utilizam resinas compostas ou porcelana para reparar cáries, fraturas ou desgastes, restaurando forma e função dos dentes. São feitas com materiais que imitam o dente natural." },
  { icon:"👑", nome:"Prótese Fixa", dur:"Sob consulta", resumo:"Substituição de dentes perdidos com próteses fixas e duradouras.", detalhe:"A prótese fixa substitui dentes perdidos com coroas, pontes ou implantes, fixados permanentemente. Feita com materiais resistentes, restaura mastigação e estética, proporcionando conforto e longevidade." }
];

var AVALIACOES = [
  { nome:"Ana Souza", foto:"https://randomuser.me/api/portraits/women/44.jpg", nota:5, proc:"Facetas", data:"há 2 semanas", n:14, util:9, texto:"Atendimento impecável e resultados incríveis! A Dra. Ana Paula explicou cada etapa antes de começar e o resultado ficou super natural. Meu sorriso mudou e ninguém percebe que são facetas." },
  { nome:"João Pereira", foto:"https://randomuser.me/api/portraits/men/32.jpg", nota:5, proc:"Endodontia", data:"há 1 mês", n:38, util:17, guia:true, texto:"A Dra. Ana Paula me fez perder o medo de dentista. Fiz tratamento de canal sem sentir nada e saí no horário. Consultório limpo, moderno e equipe muito gentil." },
  { nome:"Maria Oliveira", foto:"https://randomuser.me/api/portraits/women/68.jpg", nota:5, proc:"Clínica Geral", data:"há 1 mês", n:8, util:5, texto:"Ambiente acolhedor e equipe muito atenciosa! Faço limpeza a cada seis meses aqui e nunca me senti tão bem cuidada. Agendei pelo WhatsApp e responderam em poucos minutos." },
  { nome:"Carlos Menezes", foto:"https://randomuser.me/api/portraits/men/45.jpg", nota:4, proc:"Alinhadores Estéticos", data:"há 2 meses", n:22, util:7, texto:"Comecei o tratamento com alinhadores e já vejo diferença nas fotos. Só achei que demoraria um pouco menos, mas o acompanhamento é excelente e ela tira todas as dúvidas." },
  { nome:"Fernanda Lima", foto:"https://randomuser.me/api/portraits/women/26.jpg", nota:5, proc:"Restaurações Estéticas", data:"há 3 meses", n:51, util:21, guia:true, texto:"Restauração perfeita, ninguém consegue apontar qual dente foi tratado. Cor exata do meu dente. Explicou tudo com calma e o valor antes de começar, sem surpresa." },
  { nome:"Patrícia Gomes", foto:"https://randomuser.me/api/portraits/women/90.jpg", nota:5, proc:"Prótese Fixa", data:"há 4 meses", n:11, util:8, texto:"Coloquei prótese fixa depois de anos com problema e voltei a mastigar normalmente. Cuidado do início ao fim, com acompanhamento depois da entrega. Recomendo de olhos fechados." },
  { nome:"Rafael Andrade", foto:"https://randomuser.me/api/portraits/men/76.jpg", nota:5, proc:"Clínica Geral", data:"há 5 meses", n:19, util:12, texto:"Consultório fácil de chegar, perto do metrô, com ponto de ônibus na porta. Atendimento pontual e preço justo. Vim por indicação da minha mãe e agora a família toda vem aqui." }
];

var DISTRIBUICAO = [86, 6, 2, 1, 1];
var PERIODOS = ["Manhã", "Tarde", "Noite", "Qualquer horário"];
var POR_PAGINA = 3;
var GALERIA = [
  "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=460&w=640",
  "https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=460&w=640",
  "https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=460&w=640",
  "https://images.pexels.com/photos/6627353/pexels-photo-6627353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=460&w=640",
  "https://images.pexels.com/photos/3881451/pexels-photo-3881451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=460&w=640",
  "https://images.pexels.com/photos/19879746/pexels-photo-19879746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=460&w=640"
];
var FAQ = [
  ["Com que frequência devo ir ao dentista?", "Recomenda-se visitar o dentista a cada 6 meses, para prevenção e detecção precoce de problemas."],
  ["O clareamento dental danifica os dentes?", "Quando feito com acompanhamento profissional, é seguro e eficaz."],
  ["O que são lentes de contato dental?", "São lâminas ultrafinas aplicadas sobre os dentes para corrigir forma e cor."],
  ["Os implantes dentários são permanentes?", "Sim, com os cuidados adequados, duram décadas."],
  ["Como faço para agendar minha consulta?", "Escolha o tratamento aqui no site: o WhatsApp da Dra. Ana Paula abre com a sua mensagem pronta, com o seu nome e o tratamento desejado."]
];

/* ================================================================
   Daqui para baixo não precisa mexer
   ================================================================ */
function pega(id){ return document.getElementById(id); }

var Q = encodeURIComponent(ENDERECO);
var LINK_MAPS = "https://www.google.com/maps/search/?api=1&query=" + Q;
var LINK_ROTA = "https://www.google.com/maps/dir/?api=1&destination=" + Q;
var MAPA_SRC = "https://www.google.com/maps?q=" + Q + "&z=16&output=embed";
var LINK_MAIL = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Agendamento pelo site — Brandão Odontologia") + "&body=" + encodeURIComponent("Olá, Dra. Ana Paula! Tudo bem?\n\n");

var ends = document.querySelectorAll(".txt-endereco");
for(var te = 0; te < ends.length; te++){ ends[te].textContent = ENDERECO; }
var lms = document.querySelectorAll(".lm");
for(var tl = 0; tl < lms.length; tl++){ lms[tl].href = LINK_MAPS; }
pega("mapa").src = MAPA_SRC;
pega("linkEmail").href = LINK_MAIL;
pega("linkRota").href = LINK_ROTA;
pega("ano").textContent = new Date().getFullYear();

function montarMensagem(nome, tratamento, periodo){
  var linhas = [
    "Olá, Dra. Ana Paula! Tudo bem? 😁",
    nome ? "Meu nome é " + nome + " e vim pelo site da clínica." : "Vi o seu site e gostaria de um atendimento.",
    "O tratamento que eu quero é: " + tratamento + ".",
    periodo && periodo !== "Qualquer horário" ? "Minha preferência é no período da " + periodo + ". 💛" : null,
    "Esse tratamento está disponível? Pode me passar os horários livres, por favor? Eu me adapto com todo prazer!",
    "Desde já, obrigado(a) pela atenção. Até breve! 🦷✨"
  ];
  var mensagem = [];
  for(var i = 0; i < linhas.length; i++){ if(linhas[i]) mensagem.push(linhas[i]); }
  return mensagem.join("\n");
}

function montarLink(nome, tratamento, periodo){
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(montarMensagem(nome, tratamento, periodo));
}

var tratamentosHtml = "";
for(var i = 0; i < TRATAMENTOS.length; i++){
  var t = TRATAMENTOS[i];
  tratamentosHtml += '<article class="trat">' +
    '<img src="' + FOTO_TRATAMENTO + '" alt="' + t.nome + '">' +
    '<div><h3><span>' + t.icon + '</span>' + t.nome + '</h3>' +
    '<p>' + t.resumo + '</p><div class="trat-botoes">' +
    '<button class="btn-detalhe" onclick="verDetalhe(\'d' + i + '\', this)">Saiba Mais</button>' +
    '<button class="btn-w" onclick="abrirModal(\'' + t.nome.split("'").join("") + '\')"><i class="fa-brands fa-whatsapp"></i> Agendar</button>' +
    '</div><div class="detalhe" id="d' + i + '">' + t.detalhe +
    '<p style="margin:10px 0 0"><span class="tag-proc">⏱️ Duração aproximada: ' + t.dur + '</span></p></div></div></article>';
}
pega("listaTratamentos").innerHTML = tratamentosHtml;

var servicosHtml = "";
for(var s = 0; s < TRATAMENTOS.length; s++){ servicosHtml += '<li><a href="#tratamentos">' + TRATAMENTOS[s].nome + '</a></li>'; }
pega("footServicos").innerHTML = servicosHtml;

function verDetalhe(id, botao){
  var abriu = pega(id).classList.toggle("aberto");
  botao.textContent = abriu ? "Mostrar menos" : "Saiba Mais";
}

var avaliacoesHtml = "";
for(var a = 0; a < AVALIACOES.length; a++){
  var r = AVALIACOES[a];
  var estrelas = "";
  for(var e = 1; e <= 5; e++){ estrelas += e <= r.nota ? "★" : "☆"; }
  avaliacoesHtml += '<article class="card-av"><div class="card-topo">' +
    '<img src="' + r.foto + '" alt="Foto de ' + r.nome + '"><div><h4>' + r.nome +
    (r.guia ? '<span class="tag-proc tag-azul">Guia local</span>' : '') + '</h4><small>' + r.n + ' avaliações</small></div></div>' +
    '<div class="card-estrelas">' + estrelas + '<span class="card-data">' + r.data + '</span></div>' +
    '<div style="margin-top:10px"><span class="tag-proc">🦷 ' + r.proc + '</span></div>' +
    '<p>' + r.texto + '</p><p class="card-rodape">👍 Útil (' + r.util + ') &nbsp;·&nbsp; ↗️ Compartilhar</p></article>';
}
pega("trilho").innerHTML = avaliacoesHtml;

function rolar(direcao){
  var trilho = pega("trilho");
  trilho.scrollBy({left: direcao * trilho.clientWidth * 0.8, behavior:"smooth"});
}

var total = 0;
for(var b = 0; b < DISTRIBUICAO.length; b++){ total += DISTRIBUICAO[b]; }
var barrasHtml = "";
for(var c = 0; c < DISTRIBUICAO.length; c++){
  var porcentagem = Math.round(DISTRIBUICAO[c] / total * 100);
  barrasHtml += '<div class="barra-item"><span style="width:10px">' + (5 - c) + '</span><span class="estrelas">★</span>' +
    '<span class="vazio"><span class="cheio" style="width:' + porcentagem + '%"></span></span><span style="width:32px">' + porcentagem + '%</span></div>';
}
barrasHtml += '<p style="font-size:12px;color:#777;margin:8px 0 0">✔️ Perfil verificado · Brandão Odontologia</p>';
pega("barras").innerHTML = barrasHtml;

var totalPaginas = Math.ceil(GALERIA.length / POR_PAGINA);
var galeriaHtml = "";
for(var p = 0; p < totalPaginas; p++){
  galeriaHtml += '<div class="galeria-pagina' + (p === 0 ? ' ativa' : '') + '">';
  for(var g = p * POR_PAGINA; g < p * POR_PAGINA + POR_PAGINA; g++){
    if(g >= GALERIA.length) break;
    galeriaHtml += '<button class="foto" onclick="abrirZoom(\'' + GALERIA[g] + '\')"><img src="' + GALERIA[g] + '" alt="Consultório ' + (g + 1) + '"></button>';
  }
  galeriaHtml += '</div>';
}
pega("paginas").innerHTML = galeriaHtml;

var pontosHtml = "";
for(var d = 0; d < totalPaginas; d++){ pontosHtml += '<span class="ponto' + (d === 0 ? ' ativo' : '') + '"></span>'; }
pega("pontos").innerHTML = pontosHtml;

var paginaAtual = 0;
function trocarPagina(direcao){
  var paginas = document.querySelectorAll(".galeria-pagina");
  var pontos = document.querySelectorAll(".ponto");
  paginas[paginaAtual].classList.remove("ativa");
  pontos[paginaAtual].classList.remove("ativo");
  paginaAtual = (paginaAtual + direcao + totalPaginas) % totalPaginas;
  paginas[paginaAtual].classList.add("ativa");
  pontos[paginaAtual].classList.add("ativo");
}
function abrirZoom(src){ pega("zoomImg").src = src; pega("zoom").classList.add("aberto"); }
function fecharZoom(){ pega("zoom").classList.remove("aberto"); }

var faqHtml = "";
for(var f = 0; f < FAQ.length; f++){ faqHtml += '<details><summary>' + FAQ[f][0] + '</summary><p>' + FAQ[f][1] + '</p></details>'; }
pega("listaFaq").innerHTML = faqHtml;

var escolhido = TRATAMENTOS[0].nome;
var periodo = "Qualquer horário";
var chipsHtml = "";
for(var x = 0; x < TRATAMENTOS.length; x++){
  var tratamento = TRATAMENTOS[x];
  chipsHtml += '<button class="chip' + (x === 0 ? ' ativo' : '') + '" data-nome="' + tratamento.nome + '" onclick="escolher(this)">' + tratamento.icon + ' ' + tratamento.nome + '</button>';
}
pega("chips").innerHTML = chipsHtml;

var periodosHtml = "";
for(var y = 0; y < PERIODOS.length; y++){
  periodosHtml += '<button class="chip' + (PERIODOS[y] === "Qualquer horário" ? ' ativo' : '') + '" data-nome="' + PERIODOS[y] + '" onclick="escolherPeriodo(this)">' + PERIODOS[y] + '</button>';
}
pega("periodos").innerHTML = periodosHtml;

function limpar(grupo){
  var lista = grupo.querySelectorAll(".chip");
  for(var i = 0; i < lista.length; i++){ lista[i].classList.remove("ativo"); }
}
function escolher(botao){
  escolhido = botao.getAttribute("data-nome");
  limpar(pega("chips")); botao.classList.add("ativo"); atualizar();
}
function escolherPeriodo(botao){
  periodo = botao.getAttribute("data-nome");
  limpar(pega("periodos")); botao.classList.add("ativo"); atualizar();
}
function atualizar(){
  var nome = pega("nomePaciente").value.replace(/^\s+|\s+$/g, "");
  pega("bolha").textContent = montarMensagem(nome, escolhido, periodo);
  pega("botaoEnviar").href = montarLink(nome, escolhido, periodo);
}

var linksWpp = document.querySelectorAll(".lm-wpp");
for(var lw = 0; lw < linksWpp.length; lw++){ linksWpp[lw].href = montarLink("", ""); }
pega("nomePaciente").addEventListener("input", atualizar);
atualizar();

function abrirModal(tratamento){
  if(tratamento){
    var chips = pega("chips").querySelectorAll(".chip");
    for(var i = 0; i < chips.length; i++){
      var selecionado = chips[i].getAttribute("data-nome") === tratamento;
      chips[i].classList.toggle("ativo", selecionado);
      if(selecionado) escolhido = tratamento;
    }
  }
  pega("fundoModal").classList.add("aberto");
  document.body.style.overflow = "hidden";
  atualizar();
}
function fecharModal(){
  pega("fundoModal").classList.remove("aberto");
  document.body.style.overflow = "";
}
pega("fundoModal").addEventListener("click", function(evento){ if(evento.target === this) fecharModal(); });
document.addEventListener("keydown", function(evento){
  if(evento.key === "Escape"){ fecharModal(); fecharZoom(); }
});
