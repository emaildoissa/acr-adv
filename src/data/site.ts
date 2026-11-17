export const site = {
  name: 'ACR Advogados',
  fullName: 'Antonio Carlos Rosa Advocacia',
  tagline: 'Advocacia com excelência, ética e compromisso',
  description:
    'Escritório de advocacia com atuação dedicada em dez áreas do Direito. Atendimento personalizado, estratégia sob medida e acompanhamento próximo em cada etapa do seu caso.',
  url: 'https://acradvogados.com.br',

  // Placeholders — substituir pelos contatos reais
  phone: '(00) 00000-0000',
  whatsapp: '(00) 00000-0000',
  whatsappUrl: 'https://wa.me/5500000000000',
  email: 'contato@acradvogados.com.br',
  address: 'Endereço do escritório, nº 000 — Bairro, Cidade/UF, CEP 00000-000',
  addressShort: 'Cidade/UF',
  hours: 'Segunda a Sexta, das 9h às 18h',
  hoursShort: '9h às 18h',

  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    youtube: '#',
  },

  oabDisclaimer:
    'Este site tem caráter exclusivamente informativo. As informações aqui publicadas não constituem aconselhamento jurídico. A contratação de serviços advocatícios exige consulta personalizada com advogado(a) inscrito(a) na OAB.',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Equipe', href: '/equipe' },
  {
    label: 'Áreas de Atuação',
    href: '/areas',
    children: [
      { label: 'Direito de Família', href: '/areas/familia' },
      { label: 'Direito do Trabalho', href: '/areas/trabalhista' },
      { label: 'Direito Criminal', href: '/areas/criminal' },
      { label: 'Direito Civil e do Consumidor', href: '/areas/civil-consumidor' },
      { label: 'Direito Empresarial', href: '/areas/empresarial' },
      { label: 'Direito Imobiliário', href: '/areas/imobiliario' },
      { label: 'Direito Previdenciário', href: '/areas/previdenciario' },
      { label: 'Direito Tributário', href: '/areas/tributario' },
      { label: 'Sucessões e Planejamento Patrimonial', href: '/areas/sucessoes' },
      { label: 'Direito Médico e da Saúde', href: '/areas/medico-saude' },
    ],
  },
  { label: 'Avaliações', href: '/avaliacoes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export const whyChooseUs = [
  {
    icon: 'bi:shield-check',
    title: 'Ética e Transparência',
    text: 'Atuação pautada nos princípios da OAB, com honorários e estratégia claros desde a primeira conversa.',
  },
  {
    icon: 'bi:people',
    title: 'Atendimento Personalizado',
    text: 'Cada caso é único. Você acompanha o andamento diretamente com o advogado responsável, sem intermediários.',
  },
  {
    icon: 'bi:award',
    title: 'Experiência Comprovada',
    text: 'Equipe dedicada às principais áreas do Direito, com formação continuada e atualização constante.',
  },
  {
    icon: 'bi:clock-history',
    title: 'Resposta Ágil',
    text: 'Prazos processuais são acompanhados de perto e você é avisado de cada movimentação relevante.',
  },
  {
    icon: 'bi:chat-dots',
    title: 'Comunicação Clara',
    text: 'Explicamos seu caso em linguagem simples, sem jargões desnecessários, do início ao fim.',
  },
  {
    icon: 'bi:graph-up-arrow',
    title: 'Foco em Resultado',
    text: 'Estratégia construída com você, avaliando riscos, custos e alternativas antes de cada decisão.',
  },
];

export const howWeWork = [
  {
    step: '1',
    icon: 'bi:calendar-check',
    title: 'Consulta Inicial',
    text: 'Entramos em contato para entender seu caso, coletar documentos e esclarecer suas dúvidas.',
  },
  {
    step: '2',
    icon: 'bi:clipboard-data',
    title: 'Análise e Estratégia',
    text: 'Estudamos os fatos e a legislação aplicável e apresentamos as melhores alternativas com custos previstos.',
  },
  {
    step: '3',
    icon: 'bi:file-earmark-check',
    title: 'Acompanhamento',
    text: 'Atuamos na causa com acompanhamento contínuo e comunicação transparente até a conclusão.',
  },
];

export const testimonials = [
  {
    name: 'Cliente 1',
    role: 'Direito de Família',
    text: 'Atendimento humano e competente do início ao fim. Tudo foi explicado com clareza e o resultado superou as expectativas.',
    video: false,
  },
  {
    name: 'Cliente 2',
    role: 'Direito do Trabalho',
    text: 'Profissionalismo raro. Acompanharam cada etapa do processo e sempre responderam com agilidade quando precisei.',
    video: false,
  },
  {
    name: 'Cliente 3',
    role: 'Direito Previdenciário',
    text: 'Depois de anos de indeferimento, o escritório organizou meu caso e a concessão saiu em poucos meses. Recomendo de olhos fechados.',
    video: false,
  },
  {
    name: 'Cliente 4',
    role: 'Direito Imobiliário',
    video: true,
    videoUrl: null,
    text: 'Depoimento em vídeo — placeholder.',
  },
  {
    name: 'Cliente 5',
    role: 'Direito Criminal',
    video: true,
    videoUrl: null,
    text: 'Depoimento em vídeo — placeholder.',
  },
  {
    name: 'Cliente 6',
    role: 'Direito Empresarial',
    video: true,
    videoUrl: null,
    text: 'Depoimento em vídeo — placeholder.',
  },
];

export const team = [
  {
    name: 'Antonio Carlos Rosa',
    role: 'Advogado Fundador — OAB/UF 000.000',
    photo: '/img/team-1.jpg',
    bio: 'Placeholder: formação, especialização e áreas de foco do advogado fundador.',
    areas: ['Direito de Família', 'Direito Civil e do Consumidor'],
    email: null,
    linkedin: '#',
  },
  {
    name: 'Sócio(a) 2',
    role: 'Advogado(a) — OAB/UF 000.000',
    photo: '/img/team-2.jpg',
    bio: 'Placeholder: formação, especialização e áreas de foco.',
    areas: ['Direito do Trabalho', 'Direito Previdenciário'],
    email: null,
    linkedin: '#',
  },
  {
    name: 'Sócio(a) 3',
    role: 'Advogado(a) — OAB/UF 000.000',
    photo: '/img/team-3.jpg',
    bio: 'Placeholder: formação, especialização e áreas de foco.',
    areas: ['Direito Empresarial', 'Direito Tributário'],
    email: null,
    linkedin: '#',
  },
  {
    name: 'Sócio(a) 4',
    role: 'Advogado(a) — OAB/UF 000.000',
    photo: '/img/team-4.jpg',
    bio: 'Placeholder: formação, especialização e áreas de foco.',
    areas: ['Direito Criminal', 'Direito Médico e da Saúde'],
    email: null,
    linkedin: '#',
  },
];
