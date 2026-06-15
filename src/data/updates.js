// Histórico de novidades do app (changelog). A entrada mais recente vem
// primeiro; a marcada com `novo: true` ganha um selo de "novo" na tela.
// Datas reais, baseadas no histórico de commits do projeto.
export const UPDATES = [
  {
    date: '14/06/2026',
    title: 'Cara do jogo',
    novo: true,
    items: [
      'Baú do jogo no título e no favicon (aba do navegador)',
      'Portal do jogo no Planejador de rota',
      'Cavaleiro do jogo no Guia de fases',
    ],
  },
  {
    date: '13/06/2026',
    title: 'Temas e nível do herói',
    items: [
      'Dois temas trocáveis com imagem de fundo: roxo (cyberpunk) e cinza',
      'Recomendação de fases pelo nível do herói (avisa o que você ainda não clareia)',
      'Fundo mais limpo, sem o efeito de scanlines',
    ],
  },
  {
    date: '13/06/2026',
    title: 'Rotação mais inteligente',
    items: [
      'Planejador de rota: escolha os níveis e o app monta a rotação',
      'Cards arrastáveis para reordenar a rotação',
      '"Desde o último drop" por card, contando a partir do clique',
      'Média real entre os seus drops, com opção de usar como cooldown',
      'Destaque do próximo baú a ficar pronto',
      'Correção: 1 cronômetro por nível (o cooldown é global no jogo)',
      'Chefes de ato fora das recomendações (não dá para farmar fácil)',
    ],
  },
  {
    date: '13/06/2026',
    title: 'Lançamento',
    items: [
      'Cronômetro de drop por nível de baú, com alerta sonoro',
      'Guia das 120 fases com busca e filtros',
      'Persistência: sobrevive a F5 e a fechar o navegador',
      'Publicado no GitHub Pages',
    ],
  },
]
