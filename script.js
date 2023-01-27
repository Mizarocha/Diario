function diaryList() {
  var moments = {
    robi01: {
      name: "Templo",
      image: "./img/Deus.png",
      description:
        "Amo está na presença de Deus, gosto de ir a igreja, Deus é meu pai o todo poderoso, ele está em toda parte ao mesmo tempo, ao redor de mim e de você e dentro de nós. Não podemos vê-lo e nem tocá-lo, mas sim sentir, sentimos com a fé e compreendemos com os sinais. Deus é vida, é alegria, é amor, é perdão, é compaixão, é união.",
      message: "Amai-vos, uns aos outros como eu vos amei!",
    },
    robi02: {
      name: "Viajar",
      image: "./img/viajar.png",
      description:
        "Amo viajar, conhecer os lugares e pessoas, viajar quebra a rotina, te faz dar uma pausa, esquecer os problemas e ter tempo de ficar na companhia de quem você mais ama. Isso te ajuda a manter-se feliz e de bem com a vida. Te faz conectar consigo mesma ,te faz ficar leve, revigorada e renovada.",
      message: "Viajar colabora para a sua felicidade, viajar é vida!",
    },
    robi03: {
      name: "Música",
      image: "./img/musica.png",
      description:
        " Música é minha paixão, eu gosto de todos os tipos. Além de ouvir eu canto e encanto, coloco para fora meu lado cantora do chuveiro kkkk, me sinto tão bem. A música ela acalma, alivia o stresse e ajuda na memória, aumenta a disposição e até desperta a criatividade, esses são alguns de vários benefícios que tem. Se deixar eu fico o tempo todo ouvindo música, ouvir música só faz bem, eu amo muito.",
      message: "Faz de você a sua música favorita!",
    },
    robi04: {
      name: "Comida",
      image: "./img/comer.png",
      description:
        "Quem não gosta de um mega sanduíche com batatas fritas em ? Falar a verdade eu amo.Gosto de comer também naturais e saudáveis, mas uma vez na semana eu como esse sanduba que me sustenta e satisfaz no momento da fome e está tudo bem. Como é bom comer o que quer e quando sente vontade né, nossa é maravilhoso, uma sensação muito boa.",
      message: "Não fique preso a mitos, come, saborei e seja feliz!",
    },
    robi05: {
      name: "Happy Hour",
      image: "./img/happy hour.png",
      description:
        "Sair pra divertir com minha companheira, família e amigos é tudo de bom, amo muito, e prazeroso está nos lugares com quem amamos e nos fazem bem, não tem preço. Isso é uma das coisas que mais prezo na minha vida. Curtir, ter uma hora de lazer é muito importante e fundamental pra todos nós isso é qualidade de vida. É um momento de distração, relaxante e te mantém saudável, ganha bem-estar, motivação e rendimento.",
      message: "Saia, diverta-se, comemore, viva a vida!",
    },
    robi06: {
      name: "Conhecimento",
      image: "./img/conhecimento.png",
      description:
        "Eu sou apaixonada em aprender de ter conhecimento das coisas, saber das informações e passar algo para outras pessoas, auxiliar nos estudos, em diálogo e decisões, é muito importante te faz ter maturidade. Sem conhecimento você não chega a lugar nenhum e não consegui nada, o conhecimento transforma vidas, utilizando corretamente é capaz de construir um mundo melhor. Eu estou a cada dia buscando conhecimentos, evoluindo para meu crescimento e para o próximo.",
      message:
        "Conhecimento é descobrir, compreender, compartilhar e construir!",
    },
  };

  var cards = document.getElementById("cards");

  for (var robi in moments) {
    cards.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      moments[robi].image +
      '"/>' +
      "<details>" +
      "<summary>" +
      moments[robi].name +
      "</summary>" +
      "<p>" +
      moments[robi].description +
      "</p>" +
      "<blockquote><q>" +
      moments[robi].message +
      "</q></blockquote>" +
      "</details></div>";
  }
}

diaryList();
