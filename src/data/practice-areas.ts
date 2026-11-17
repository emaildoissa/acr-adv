export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  image: string;
  summary: string;
  intro: string[];
  services: string[];
  benefits: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'familia',
    title: 'Direito de Família',
    shortTitle: 'Família',
    icon: 'bi:house-heart',
    image: '/img/area-familia.jpg',
    summary:
      'Divórcio, guarda, alimentos, união estável e mediação de conflitos familiares com sensibilidade e firmeza.',
    intro: [
      'Os conflitos familiares exigem mais do que conhecimento técnico: exigem escuta, discrição e estratégia pensada para proteger o que há de mais importante em cada família. Atuamos em todo o espectro do Direito de Família, sempre priorizando acordos que preservem relacionamentos e, quando necessário, com atuação firme em juízo.',
      'Do divórcio consensual à disputa de guarda, nossa equipe conduz cada etapa com comunicação clara, prazo definido e foco no bem-estar de todos os envolvidos, especialmente das crianças.',
    ],
    services: [
      'Divórcio consensual e litigioso',
      'Guarda, visitação e regulamentação de convivência',
      'Alimentos e revisão de pensão',
      'União estável e reconhecimento de sociedades de fato',
      'Partilha de bens e regimes de casamento',
      'Mediação e solução consensual de conflitos',
      'Alienação parental e proteção de menores',
      'Investigação de paternidade',
    ],
    benefits: [
      'Prioridade à solução consensual, com menor tempo e custo',
      'Atendimento discreto e humanizado',
      'Clareza sobre prazos e custos desde a consulta inicial',
      'Acompanhamento das audiências por advogado da equipe',
    ],
  },
  {
    slug: 'trabalhista',
    title: 'Direito do Trabalho',
    shortTitle: 'Trabalhista',
    icon: 'bi:briefcase',
    image: '/img/area-trabalhista.jpg',
    summary:
      'Verbas rescisórias, horas extras, assédio, acidentes de trabalho e consultoria preventiva para empregadores.',
    intro: [
      'Relações de trabalho geram dúvidas e conflitos que podem ser evitados ou bem resolvidos com orientação correta no tempo certo. Atuamos tanto na defesa de trabalhadores quanto na consultoria preventiva de empresas, com estratégia ajustada a cada realidade.',
      'Nosso acompanhamento cobre desde a negociação extrajudicial até a execução de sentença, sempre com atenção aos prazos e à documentação que faz a diferença no resultado.',
    ],
    services: [
      'Reclamações trabalhistas do trabalhador',
      'Verbas rescisórias, FGTS e multas',
      'Horas extras e adicionais (noturno, insalubridade, periculosidade)',
      'Assédio moral e sexual',
      'Acidentes de trabalho e doenças ocupacionais',
      'Defesa de empregadores e consultoria preventiva',
      'Acordos extrajudiciais e homologação',
      'Alterações contratuais e dispensas',
    ],
    benefits: [
      'Análise gratuita de documentos na consulta inicial',
      'Honorários transparentes, condicionados ao êxito quando cabível',
      'Estratégia extrajudicial quando for a melhor via',
      'Acompanhamento até a efetiva receita dos valores',
    ],
  },
  {
    slug: 'criminal',
    title: 'Direito Criminal',
    shortTitle: 'Criminal',
    icon: 'bi:shield-lock',
    image: '/img/area-criminal.jpg',
    summary:
      'Defesa técnica rigorosa em inquéritos, júri e crimes econômicos, com atendimento 24 horas em urgências.',
    intro: [
      'Em matéria criminal, cada minuto importa. Uma defesa técnica desde as primeiras declarações pode decidir o rumo do caso. Nossa equipe atua com rigor absoluto na preservação de garantias constitucionais, em todas as fases: inquérito, processo, recursos e execução penal.',
      'Atendimento reservado, resposta rápida e atuação em todo o território nacional por meio de correspondentes.',
    ],
    services: [
      'Atendimento em delegacia e audiência de custódia',
      'Defesa em crimes contra a pessoa e contra o patrimônio',
      'Crimes de trânsito e suspensão de habilitação',
      'Crimes econômicos e contra a Administração Pública',
      'Tribunal do Júri',
      'Dosimetria da pena e recursos',
      'Execução penal, progressão e indulto',
      'Acompanhamento de inquéritos policiais',
    ],
    benefits: [
      'Atendimento 24 horas em prisões e urgências',
      'Reservado e sigiloso do primeiro contato',
      'Acompanhamento presencial de audiências',
      'Correspondentes em todo o Brasil',
    ],
  },
  {
    slug: 'civil-consumidor',
    title: 'Direito Civil e do Consumidor',
    shortTitle: 'Civil e Consumidor',
    icon: 'bi:cart-check',
    image: '/img/area-civil-consumidor.jpg',
    summary:
      'Indenizações, contratos, dívidas, negativação e relações de consumo com estratégia objetiva e resultado mensurável.',
    intro: [
      'Seus direitos patrimoniais e de consumidor merecem defesa eficiente, sem burocracia desnecessária. Atuamos em disputas envolvendo empresas, seguradoras, instituições financeiras e particulares, com foco em solução rápida quando possível e litígio firme quando necessário.',
      'Também orientamos consumidores na revisão de contratos, cobranças indevidas e na defesa contra práticas abusivas.',
    ],
    services: [
      'Indenizações por danos morais e materiais',
      'Responsabilidade civil e acidentes de consumo',
      'Revisão e rescisão de contratos',
      'Cobranças indevidas, negativação e limpeza de nome',
      'Seguros e planos de saúde',
      'Cobranças, despejos e contratos de locação',
      'Fraudes e estelionato consumidor',
      'Ações possessórias e conflitos entre vizinhos',
    ],
    benefits: [
      'Avaliação gratuita da viabilidade do caso',
      'Prioridade à via administrativa quando ela resolve',
      'Clareza sobre custos e riscos antes da propositura',
      'Acompanhamento até a satisfação do direito',
    ],
  },
  {
    slug: 'empresarial',
    title: 'Direito Empresarial',
    shortTitle: 'Empresarial',
    icon: 'bi:building',
    image: '/img/area-empresarial.jpg',
    summary:
      'Constituição de sociedades, contratos, societário, recuperação judicial e consultoria jurídica para empresas.',
    intro: [
      'Empresas seguras se constroem sobre contratos bem-feitos e estruturas societárias adequadas. Oferecemos consultoria jurídica de longo prazo para negócios de todos os portes, do pequeno empreendedor à sociedade em expansão, combinando prevenção de litígios com atuação firme quando eles surgem.',
      'Atuamos também em impasses societários, fusões, aquisições e na recuperação de empresas em crise, com planejamento financeiro e jurídico integrado.',
    ],
    services: [
      'Constituição de sociedades e alterações contratuais',
      'Contratos comerciais e de fornecimento',
      'Acordos de sócios e resolução de impasses societários',
      'Recuperação judicial e extrajudicial',
      'Compliance e proteção de dados (LGPD)',
      'Propriedade intelectual e marcas',
      'Consultoria jurídica mensal',
      'Representação em disputas societárias',
    ],
    benefits: [
      'Contratos sob medida, com cláusulas de proteção real',
      'Rotina de compliance simples e aplicável',
      'Resposta rápida às demandas do dia a dia',
      'Estratégia de litígio integrada ao negócio',
    ],
  },
  {
    slug: 'imobiliario',
    title: 'Direito Imobiliário',
    shortTitle: 'Imobiliário',
    icon: 'bi:house-door',
    image: '/img/area-imobiliario.jpg',
    summary:
      'Compra e venda, regularização de imóveis, locações, incorporações e usucapião com segurança jurídica.',
    intro: [
      'Imóvel é o maior patrimônio da maioria das famílias — e também a fonte de muitos conflitos. Oferecemos segurança jurídica em todas as etapas: da análise documental prévia à aquisição, passando pela regularização de escrituras, ao acompanhamento de financiamentos e à defesa em disputas de posse e propriedade.',
      'Atuamos também em incorporações, loteamentos e contratos com construtoras, protegendo tanto proprietários quanto compradores.',
    ],
    services: [
      'Due diligence e análise documental de imóveis',
      'Compra e venda e promessas de compra e venda',
      'Regularização de imóveis e usucapião',
      'Ações possessórias e de despejo',
      'Contratos de locação e revisão de aluguel',
      'Incorporações e loteamentos',
      'Direito de vizinhança e conflitos de limites',
      'Financiamento imobiliário e leilões',
    ],
    benefits: [
      'Verificação completa da documentação antes de qualquer assinatura',
      'Escritura e registro acompanhados de perto',
      'Evitação de surpresas dedívidas e ônus ocultos',
      'Suporte no pós-venda, quando necessário',
    ],
  },
  {
    slug: 'previdenciario',
    title: 'Direito Previdenciário',
    shortTitle: 'Previdenciário',
    icon: 'bi:heart-pulse',
    image: '/img/area-previdenciario.jpg',
    summary:
      'Aposentadorias, auxílios, BPC, revisões e recursos administrativos e judiciais contra o INSS.',
    intro: [
      'Negar um benefício ou pagar menos do que o devido não é o fim do caminho — é o começo da defesa. Orientamos o segurado em todo o processo previdenciário, do planejamento da aposentadoria à revisão de benefícios já concedidos, com análise completa do CNIS e das contribuições.',
      'Priorizamos a via administrativa quando ela é mais rápida e recorremos judicialmente quando necessário, sempre com prazos acompanhados e comunicação transparente.',
    ],
    services: [
      'Planejamento previdenciário e escolha da melhor regra',
      'Aposentadorias por idade, tempo e especial',
      'Auxílio-doença e reabilitação',
      'Pensão por morte e salário-maternidade',
      'BPC/LOAS e benefícios assistenciais',
      'Recurso administrativo e judicial contra o INSS',
      'Revisão de benefícios e acúmulo ilegítimo',
      'Adicionais de 25% para quem precisa de assistência',
    ],
    benefits: [
      'Análise gratuita do CNIS na consulta inicial',
      'Prioridade às vias administrativas mais rápidas',
      'Atendimento humanizado, com assistência a idosos e PCD',
      'Acompanhamento até a efetiva receita do benefício',
    ],
  },
  {
    slug: 'tributario',
    title: 'Direito Tributário',
    shortTitle: 'Tributário',
    icon: 'bi:receipt',
    image: '/img/area-tributario.jpg',
    summary:
      'Consultoria tributária, defesa em execuções fiscais, recuperação de créditos e planejamento tributário lícito.',
    intro: [
      'Pagar o tributo devido é obrigação; pagar mais do que o devido é desperdício. Atuamos no planejamento tributário lícito, na defesa de contribuintes em processos administrativos e judiciais e na recuperação de créditos tributários, com análise técnica apurada de cada caso.',
      'Para empresas, oferecemos revisão de regime tributário, defesa em autos de infração e acompanhamento de execuções fiscais, reduzindo riscos e custos.',
    ],
    services: [
      'Planejamento tributário e revisão de regime',
      'Defesa em autos de infração e embargos',
      'Execução fiscal e embargos à execução',
      'Recuperação de créditos tributários',
      'IRPJ, CSLL, PIS, COFINS e ICMS',
      'Imposto sobre a renda de pessoas físicas',
      'Parcelamentos e transação tributária',
      'Consultoria em operações societárias',
    ],
    benefits: [
      'Redução efetiva da carga tributária dentro da lei',
      'Defesa técnica em todos os níveis administrativos',
      'Acompanhamento de prazos fiscais rigorosos',
      'Relatórios periódicos de riscos e resultados',
    ],
  },
  {
    slug: 'sucessoes',
    title: 'Sucessões e Planejamento Patrimonial',
    shortTitle: 'Sucessões',
    icon: 'bi:file-earmark-richtext',
    image: '/img/area-sucessoes.jpg',
    summary:
      'Inventários, testamentos, heranças, holding familiar e proteção de patrimônio para as próximas gerações.',
    intro: [
      'Planejar a transmissão do patrimônio evita conflitos familiares, reduz tributos e protege o que você construiu. Atuamos no inventário judicial e extrajudicial, na elaboração de testamentos e pactos e na estruturação de holdings familiares, sempre com absoluta discrição.',
      'Também defendemos herdeiros em disputas sucessórias, colações e sonegação de inventário, com técnica e sensibilidade para as relações familiares.',
    ],
    services: [
      'Inventário judicial e extrajudicial',
      'Arrolamento e partilha de bens',
      'Testamentos e pactos sucessórios',
      'Holding familiar e planejamento sucessório',
      'Doações e retenção de usufruto',
      'Defesa em disputas de herança',
      'Regularização de imóveis herdados',
      'Planejamento de ITCMD e tributos sobre herança',
    ],
    benefits: [
      'Inventário via cartório quando cabível — mais rápido e barato',
      'Redução de tributos com planejamento adequado',
      'Discrição absoluta nas tratativas',
      'Estrutura que evita conflitos entre herdeiros',
    ],
  },
  {
    slug: 'medico-saude',
    title: 'Direito Médico e da Saúde',
    shortTitle: 'Médico e Saúde',
    icon: 'bi:bandaid',
    image: '/img/area-medico-saude.jpg',
    summary:
      'Erros médicos, negativas de planos de saúde, direito à saúde pública e defesa de profissionais da área.',
    intro: [
      'A saúde é o direito mais sensível que existe — e as disputas envolvendo medicina exigem técnica e cuidado redobrados. Atuamos na defesa de pacientes lesados por erro médico ou negativa de cobertura, no acesso a tratamentos e medicamentos e na proteção de profissionais e instituições de saúde.',
      'Compreendemos a linguagem da medicina e do direito — e sabemos traduzi-la com clareza para cada cliente.',
    ],
    services: [
      'Responsabilidade civil por erro médico',
      'Negativa de cobertura por planos de saúde',
      'Direito a medicamentos de alto custo',
      'Internações e UTI por urgência/emergência',
      'Tutela de urgência em tratamentos',
      'Defesa de médicos e clínicas em processos éticos',
      'Consentimento informado e prontuários',
      'Acesso a exames e procedimentos pelo SUS',
    ],
    benefits: [
      'Ações com pedido de urgência sempre que o quadro exige',
      'Rede de consultores médicos para análise técnica',
      'Atendimento humanizado em momentos delicados',
      'Defesa qualificada de profissionais da saúde',
    ],
  },
];

export function getArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}
