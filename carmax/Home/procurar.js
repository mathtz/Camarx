const modais = [
  // romance
  { name: "Antes Que o Mundo Pare", modalId: "modalR01" },
  { name: "Manual Antiamor em 10 Passos", modalId: "modalR02" },
  { name: "No Silêncio de Nós Dois", modalId: "modalR03" },
  { name: "O Peso do Que Ficou", modalId: "modalR04" },
  { name: "Cartas do Coração", modalId: "modalR05" },
  { name: "Sob o Seu Sol", modalId: "modalR06" },
  { name: "Eternamente Nós", modalId: "modalR07" },
  { name: "A Realidade do Amor", modalId: "modalR08" },
  { name: "365 Razões Pra Ficar", modalId: "modalR09" },
  { name: "Para Todos os Crushes Que Já Tive", modalId: "modalR10" },
  // romance
  // terror
  { name: "Entre Sombras", modalId: "modalT01" },
  { name: "Silêncio Mortal", modalId: "modalT02" },
  { name: "O Último Sino", modalId: "modalT03" },
  { name: "Entre Nós", modalId: "modalT04" },
  { name: "Sorriso Mortal", modalId: "modalT05" },
  { name: "O Vídeo", modalId: "modalT06" },
  { name: "Eco do Passado", modalId: "modalT07" },
  { name: "Brincadeira Macabra", modalId: "modalT08" },
  { name: "Escuridão Mortal", modalId: "modalT09" },
  { name: "Grito Final", modalId: "modalT10" },
  // terror
  // comedia
  { name: "Feira em Festa", modalId: "modalC01" },
  { name: "Fantasmas de Folga", modalId: "modalC02" },
  { name: "Clique Errado", modalId: "modalC03" },
  { name: "Confusão dos Patetas", modalId: "modalC04" },
  { name: "Dennis, o Pequeno Caos", modalId: "modalC05" },
  { name: "Confusões à Cegas", modalId: "modalC06" },
  { name: "Babá em Apuros", modalId: "modalC07" },
  { name: "Esqueceram a Casa", modalId: "modalC08" },
  { name: "Minha Mãe, Minha Comédia", modalId: "modalC09" },
  { name: "Jantar Caótico", modalId: "modalC10" },
  // comedia
  // drama
  { name: "Liberdade Proibida", modalId: "modalDR01" },
  { name: "Mensagens do Coração", modalId: "modalDR02" },
  { name: "Ecos do Universo", modalId: "modalDR03" },
  { name: "Última Hora do Amor", modalId: "modalDR04" },
  { name: "Steve: Uma Vida Singela", modalId: "modalDR05" },
  { name: "Dias Inesquecíveis", modalId: "modalDR06" },
  { name: "Companheiro de Quatro Patas", modalId: "modalDR07" },
  { name: "Carta Para Você", modalId: "modalDR08" },
  { name: "Vigília da Alma", modalId: "modalDR09" },
  { name: "Recomeços", modalId: "modalDR10" },
  // drama
  // documentario
  { name: "Sempre ao Lado Deles", modalId: "modalD01" },
  { name: "Corrida nas Alturas", modalId: "modalD02" },
  { name: "Ritmo da Manhã", modalId: "modalD03" },
  { name: "Luzes Que Não Entram", modalId: "modalD04" },
  { name: "Notas da Vida", modalId: "modalD05" },
  { name: "Pesadelo Noturno", modalId: "modalD06" },
  { name: "Dentro da Mente Canina", modalId: "modalD07" },
  { name: "Bastidores do Palco", modalId: "modalD08" },
  { name: "Labirinto de Kubrick", modalId: "modalD09" },
  { name: "O Pavor dos Números", modalId: "modalD10" },
  // documentario
  // suspense
  { name: "Reflexo Mortal", modalId: "modalS01" },
  { name: "Mentes em Colapso", modalId: "modalS02" },
  { name: "O Alibi Final", modalId: "modalS03" },
  { name: "Offline para Sempre", modalId: "modalS04" },
  { name: "Entre o Sono e o Inferno", modalId: "modalS05" },
  { name: "Não Olhe pra Trás", modalId: "modalS06" },
  { name: "Fragmentos de Mim", modalId: "modalS07" },
  { name: "O Guardião", modalId: "modalS08" },
  { name: "Presença Oculta", modalId: "modalS09" },
  { name: "O Silêncio dos Olhos", modalId: "modalS10" },
  // suspense
  // ação
  { name: "O Gênio da Bomba", modalId: "modalA01" },
  { name: "Código de Vingança", modalId: "modalA02" },
  { name: "O Guardião Implacável", modalId: "modalA03" },
  { name: "Ninguém é Invencível", modalId: "modalA04" },
  { name: "O Monstro Submerso", modalId: "modalA05" },
  { name: "Liberdade à Força", modalId: "modalA06" },
  { name: "Mutantes em Conflito", modalId: "modalA07" },
  { name: "Visitantes Mortais", modalId: "modalA08" },
  { name: "Assassino de Alvo", modalId: "modalA09" },
  { name: "Trancada na Tempestade", modalId: "modalA10" },
  // ação
  // ficção
  { name: "Amor Digital", modalId: "modalF01" },
  { name: "Noite de Interferências", modalId: "modalF02" },
  { name: "Assassino do Futuro", modalId: "modalF03" },
  { name: "Cidade Caída", modalId: "modalF04" },
  { name: "O Homem Estranho", modalId: "modalF05" },
  { name: "Brilho Eterno da Memória", modalId: "modalF06" },
  { name: "Outro Planeta", modalId: "modalF07" },
  { name: "Segurança Impossível", modalId: "modalF08" },
  { name: "O Homem Invisível", modalId: "modalF09" },
  { name: "Crimes no Tempo", modalId: "modalF10" },
  // ficção
];

const input = window.document.getElementById("searchInput");
const autocompleteList = window.document.getElementById("autocomplete-list");

function openModal(modalId) {
  const modal = window.document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(modalId) {
  const modal = window.document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  autocompleteList.innerHTML = "";

  if (!query) return;

  const filtered = modais.filter((p) => p.name.toLowerCase().includes(query));

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.textContent = p.name;

    div.addEventListener("click", () => {
      openModal(p.modalId);
      autocompleteList.innerHTML = "";
      input.value = "";
    });

    autocompleteList.appendChild(div);
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== input && !autocompleteList.contains(e.target)) {
    autocompleteList.innerHTML = "";
  }
});

window.document.querySelectorAll(".close").forEach((bnt) => {
  bnt.addEventListener("click", () => {
    const modalId = bnt.getAttribute("data-modal");
    closeModal(modalId);
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

modais.forEach((item) => {
  // tenta encontrar o botão pelo mesmo id do modal (ou outro padrão que você definir)
  const botao = document.getElementById("btn-" + item.modalId);
  const modal = document.getElementById(item.modalId);

  if (botao && modal) {
    // abre o modal ao clicar no botão
    botao.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }
});
