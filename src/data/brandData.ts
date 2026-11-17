import logoWhite from '../assets/stilo-maria/logo_header.png';
import logoChampagne from '../assets/stilo-maria/logo_alt.png';
import heroCoverWide from '../assets/stilo-maria/capasitebio.jpg';
import heroPortrait from '../assets/stilo-maria/hero_alt.jpg';
import thailaPhoto from '../assets/stilo-maria/thaila.webp';
import marisaPhoto from '../assets/stilo-maria/marisa.png';
import caamtPhoto from '../assets/stilo-maria/advogada.webp';
import colorAnalysisPhoto from '../assets/stilo-maria/anapaulafortes.webp';
import footerTexture from '../assets/stilo-maria/footer_bg.jpg';
import googleBadge from '../assets/stilo-maria/group26.png';
import rosangelaAvatar from '../assets/stilo-maria/reviews/rosangela.jpg';
import catarinaAvatar from '../assets/stilo-maria/reviews/catarina.jpg';
import tanielaAvatar from '../assets/stilo-maria/reviews/taniela.jpg';
import yasmimAvatar from '../assets/stilo-maria/reviews/yasmim.jpg';
import marciaAvatar from '../assets/stilo-maria/reviews/marcia.jpg';

export interface ConsultantProfile {
  id: string;
  name: string;
  role: string;
  phoneDisplay: string;
  whatsappUrl: string;
  ctaLabel: string;
  photoSrc: string;
  photoAlt: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  date: string;
  text: string;
  avatarSrc: string;
}

export const REAL_ASSETS = {
  logoWhite,
  logoChampagne,
  heroCoverWide,
  heroPortrait,
  thailaPhoto,
  marisaPhoto,
  caamtPhoto,
  colorAnalysisPhoto,
  footerTexture,
  googleBadge,
};

export const BRAND_INFO = {
  name: 'STILO MARIA',
  tagline: 'ELEGÂNCIA com PROPÓSITO!',
  headline: 'Se vista com confiança e elegância',
  specialty: 'Especialista em alfaiataria',
  storyLabel: 'Conheça a história da Stilo Maria!',
  storyYoutubeUrl: 'https://youtube.com/shorts/nkIBwY-8Y9A?feature=share',
  storyYoutubeEmbedUrl: 'https://www.youtube.com/embed/nkIBwY-8Y9A?rel=0',
  hoursLabel: 'Horário de atendimento',
  hoursWeekday: 'Segunda a Sexta 9h às 18h',
  hoursSaturday: 'Sábado 9h às 13h',
  addressLine1: 'Avenida: Isaac Póvoas, Número: 1495',
  addressLine2: 'Bairro: Centro Norte · Anexo: Edifício Emília Sala 01 Térreo',
  addressCity: 'Cuiabá - MT',
  fullAddress:
    'Avenida Isaac Póvoas, Número 1495, Bairro Centro Norte, Anexo Edifício Emília Sala 01 Térreo, Cuiabá - MT',
  email: 'atendimento@stilomaria.com.br',
  mailtoUrl: 'mailto:atendimento@stilomaria.com.br',
  bioUrl: 'https://bio.stilomaria.com.br/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Avenida+Isaac+Povoas+1495+Centro+Norte+Cuiaba+MT',
  wazeUrl: 'https://waze.com/ul?q=Avenida+Isaac+Povoas+1495+Cuiaba+MT',
  verseText:
    'Tudo o que fizerem, seja em palavra ou em ação, façam-no em nome do Senhor Jesus, dando por meio dele graças a Deus Pai.',
  verseRef: 'Colossenses 3:17',
  copyright: 'Copyright STILO MARIA – Todos os direitos reservados 2026',
};

export const CONSULTANTS: ConsultantProfile[] = [
  {
    id: 'thaila',
    name: 'Thaila',
    role: 'Consultora Online Stilo Maria',
    phoneDisplay: '(65) 9222-8898',
    whatsappUrl:
      'https://wa.me/556592228898?text=Ol%C3%A1%2C%20estive%20no%20site%20e%20gostaria%20de%20falar%20com%20a%20consultora%20Thaila.',
    ctaLabel: 'Fale com THAILA agora mesmo!',
    photoSrc: REAL_ASSETS.thailaPhoto,
    photoAlt: 'Consultora Thaila na boutique Stilo Maria',
  },
  {
    id: 'marisa',
    name: 'Marisa',
    role: 'Consultora Online Stilo Maria',
    phoneDisplay: '(65) 99944-3933',
    whatsappUrl:
      'https://wa.me/5565999443933?text=Ol%C3%A1%2C%20estive%20no%20site%20e%20gostaria%20de%20falar%20com%20a%20consultora%20Marisa.',
    ctaLabel: 'Fale com MARISA agora mesmo!',
    photoSrc: REAL_ASSETS.marisaPhoto,
    photoAlt: 'Consultora Marisa na boutique Stilo Maria',
  },
];

export const CAAMT_INFO = {
  kicker: 'Desconto exclusivo!',
  title: 'Convênio CAAMT para Advogadas',
  description:
    'Em convênio com a CAAMT você cliente advogada tem desconto exclusivo em nossa loja. Faça seu cadastro e garanta já esse benefício.',
  note: 'CAAMT (Caixa de Assistência dos Advogados)',
  photoSrc: REAL_ASSETS.caamtPhoto,
  photoAlt: 'Cliente advogada vestindo alfaiataria branca Stilo Maria',
};

export const COLOR_PARTNERSHIP_INFO = {
  kicker: 'Parceria',
  title: 'Ana Paula Fortes',
  subtitle: 'Análise de Coloração Pessoal Stilo Maria',
  description:
    'Em parceria com Ana Paula Fortes, consultora de imagem e estilo, criamos a análise de coloração StiloMaria onde você poderá descobrir suas melhores cores de cabelo, make, acessórios e roupas.',
  photoSrc: REAL_ASSETS.colorAnalysisPhoto,
  photoAlt: 'Análise de coloração pessoal Stilo Maria com círculo cromático e peças de alfaiataria',
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rosangela',
    author: 'Rosangela Miranda',
    date: '28/05/2024',
    text: 'Muito bem atendida',
    avatarSrc: rosangelaAvatar,
  },
  {
    id: 'catarina',
    author: 'Catarina De Assumpcao',
    date: '09/03/2024',
    text: 'Atendimento excepcional! Peças selecionadas e diferentes! Enfim ameiiiiii! Parabéns!',
    avatarSrc: catarinaAvatar,
  },
  {
    id: 'taniela',
    author: 'Taniela Carvalho',
    date: '21/02/2024',
    text: 'Experiência incrível, as meninas são maravilhosas… voltarei com certeza 🥰🥰',
    avatarSrc: tanielaAvatar,
  },
  {
    id: 'yasmim',
    author: 'Yasmim Rangel',
    date: '17/02/2024',
    text: 'Amei',
    avatarSrc: yasmimAvatar,
  },
  {
    id: 'marcia',
    author: 'Marcia Cardoso',
    date: '16/02/2024',
    text: 'Excelente, amei vendedora maravilhosa',
    avatarSrc: marciaAvatar,
  },
];
