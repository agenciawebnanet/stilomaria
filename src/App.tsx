import {useState} from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Play,
  Share2,
  Star,
} from 'lucide-react';
import {ResilientImage} from './components/ResilientImage';
import {ShareBioModal} from './components/ShareBioModal';
import {StoryVideoModal} from './components/StoryVideoModal';
import {
  BRAND_INFO,
  CAAMT_INFO,
  COLOR_PARTNERSHIP_INFO,
  CONSULTANTS,
  GOOGLE_REVIEWS,
  REAL_ASSETS,
} from './data/brandData';

function GoogleGIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.1.74-2.51 1.18-4.22 1.18-3.25 0-6-2.19-6.98-5.15H1.01v3.14C3.05 21.2 7.2 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.02 14.02A7.19 7.19 0 0 1 4.64 12c0-.7.13-1.38.38-2.02V6.84H1.01A11.98 11.98 0 0 0 0 12c0 1.93.46 3.75 1.01 5.16l4.01-3.14Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.8 0 3.41.62 4.68 1.84l3.51-3.51C18.07 1.19 15.3 0 12 0 7.2 0 3.05 2.8 1.01 6.84l4.01 3.14C6 6.94 8.75 4.75 12 4.75Z"
      />
    </svg>
  );
}

export default function App() {
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [reviewOffset, setReviewOffset] = useState(0);

  const visibleReviews = [
    GOOGLE_REVIEWS[reviewOffset % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(reviewOffset + 1) % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(reviewOffset + 2) % GOOGLE_REVIEWS.length],
    GOOGLE_REVIEWS[(reviewOffset + 3) % GOOGLE_REVIEWS.length],
  ];

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_INFO.fullAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2400);
    } catch {
      setCopiedAddress(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div id="topo" className="min-h-screen bg-[#FAF9F6] text-[#1A1816] flex flex-col">
      {/* Top Bar: strict 3-zone contract */}
      <header className="sticky top-0 z-40 bg-[#4A2E29] text-[#FAF9F6] border-b border-[#5E3D37]">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between gap-8">
          <a
            href="#topo"
            aria-label="Stilo Maria - Início"
            className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D8B998] rounded"
          >
            <img
              src={REAL_ASSETS.logoWhite}
              alt="Stilo Maria Ladieswear"
              className="h-9 w-auto object-contain"
            />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#EFE6DD]"
          >
            <a
              href="#historia"
              className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              História
            </a>
            <a
              href="#consultoras"
              className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Consultoras
            </a>
            <a
              href="#parcerias"
              className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Parcerias
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Depoimentos
            </a>
            <a
              href="#localizacao"
              className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Localização
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#consultoras"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#3B231F] bg-[#F3E6D8] rounded-lg hover:bg-[#FFFFFF] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Falar com Consultora
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Section 1: Hero Editorial */}
        <section className="relative bg-[#573831] text-[#FAF9F6] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between gap-8">
                <div>
                  <p className="text-xs font-medium tracking-wide text-[#E6D2BE]">
                    {BRAND_INFO.name} <span aria-hidden="true">·</span> {BRAND_INFO.specialty}{' '}
                    <span aria-hidden="true">·</span> {BRAND_INFO.addressCity}
                  </p>

                  <h1
                    className="font-display font-semibold text-[#FAF9F6] mt-3 tracking-tight leading-[1.05]"
                    style={{
                      fontSize: 'clamp(2.35rem, 4.2vw, 3.8rem)',
                      textWrap: 'balance',
                    }}
                  >
                    {BRAND_INFO.tagline}
                  </h1>

                  <p className="text-base sm:text-lg text-[#EFE2D5] leading-relaxed mt-4 max-w-xl">
                    {BRAND_INFO.headline}. Atendimento online direto com nossas consultoras em
                    Cuiabá, convênio CAAMT e análise de coloração pessoal.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="#historia"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#3B231F] bg-[#F3E6D8] rounded-lg hover:bg-[#FFFFFF] transition-colors whitespace-nowrap"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      {BRAND_INFO.storyLabel}
                    </a>

                    <a
                      href={BRAND_INFO.storyYoutubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-[#FAF9F6] border border-[#8A645B] rounded-lg hover:bg-[#66433B] transition-colors whitespace-nowrap"
                    >
                      Abrir no YouTube
                      <ArrowUpRight className="w-4 h-4 text-[#E6D2BE]" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setShareModalOpen(true)}
                      aria-label="Compartilhar página"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 text-sm font-medium text-[#E6D2BE] hover:text-[#FFFFFF] hover:bg-[#66433B] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <Share2 className="w-4 h-4" />
                      Compartilhar
                    </button>
                  </div>
                </div>

                {/* Quick Direct Bio Links for Thaila & Marisa */}
                <div className="border-t border-[#734E46] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CONSULTANTS.map((consultant) => (
                    <a
                      key={consultant.id}
                      href={consultant.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5 p-3 rounded-xl bg-[#482D27] border border-[#6C4941] hover:border-[#D8B998] transition-colors"
                    >
                      <img
                        src={consultant.photoSrc}
                        alt={consultant.photoAlt}
                        className="w-12 h-12 rounded-lg object-cover object-top shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-[#E6D2BE] tabular-nums">
                          {consultant.phoneDisplay}
                        </p>
                        <p className="text-sm font-semibold text-[#FAF9F6] truncate">
                          {consultant.ctaLabel}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D8B998] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Real Hero Portrait */}
              <div className="lg:col-span-5 flex">
                <div className="relative w-full min-h-[360px] lg:min-h-full rounded-2xl overflow-hidden bg-[#4A2E29] border border-[#734E46]">
                  <ResilientImage
                    src={REAL_ASSETS.heroPortrait}
                    alt="Stilo Maria — Elegância com Propósito"
                    fallbackTitle="Stilo Maria"
                    className="w-full h-full object-cover object-top lg:absolute lg:inset-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#2B1916]/90 via-[#2B1916]/35 to-transparent">
                    <p className="text-xs text-[#E6D2BE]">
                      {BRAND_INFO.specialty} <span aria-hidden="true">·</span>{' '}
                      {BRAND_INFO.addressCity}
                    </p>
                    <p className="font-display text-2xl font-medium text-[#FAF9F6] mt-0.5">
                      {BRAND_INFO.headline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vídeo Oficial Inline — Conheça a história da Stilo Maria! */}
        <section id="historia" className="bg-[#482C26] text-[#FAF9F6] border-t border-[#68453E] py-14 lg:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs font-medium tracking-wide text-[#E6D2BE]">
                  Nossa Essência <span aria-hidden="true">·</span> Vídeo Oficial
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FAF9F6]">
                  {BRAND_INFO.storyLabel}
                </h2>
                <p className="text-sm sm:text-base text-[#EFE2D5] leading-relaxed max-w-lg">
                  Assista ao vídeo institucional da Stilo Maria e conheça de perto nosso propósito,
                  nossa curadoria em alfaiataria feminina e o atendimento na boutique em Cuiabá.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStoryModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#3B231F] bg-[#F3E6D8] rounded-lg hover:bg-[#FFFFFF] transition-colors whitespace-nowrap"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Expandir vídeo
                  </button>
                  <a
                    href={BRAND_INFO.storyYoutubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-[#FAF9F6] border border-[#8A645B] rounded-lg hover:bg-[#5E3B34] transition-colors whitespace-nowrap"
                  >
                    Assistir no YouTube
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E6D2BE]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#7D574F] bg-[#2B1916] shadow-xl">
                  <iframe
                    src={BRAND_INFO.storyYoutubeEmbedUrl}
                    title="Conheça a história da Stilo Maria!"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Consultoras Online */}
        <section id="consultoras" className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium text-[#8B6D43]">
                Atendimento Oficial <span aria-hidden="true">·</span> WhatsApp Direto
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1816] mt-1">
                Número ativo de nossas consultoras online
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#4D463F] tabular-nums">
              <Clock className="w-4 h-4 text-[#8B6D43] shrink-0" />
              <span>
                {BRAND_INFO.hoursWeekday} <span aria-hidden="true">·</span> {BRAND_INFO.hoursSaturday}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONSULTANTS.map((consultant) => (
              <article
                key={consultant.id}
                className="bg-[#FFFFFF] border border-[#E5DFD5] rounded-2xl overflow-hidden flex flex-col transition-transform duration-150 hover:-translate-y-0.5"
              >
                <div className="aspect-[5/4] bg-[#EFECE5] overflow-hidden">
                  <ResilientImage
                    src={consultant.photoSrc}
                    alt={consultant.photoAlt}
                    fallbackTitle={consultant.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <p className="text-xs text-[#6E655B] tabular-nums">
                      {consultant.role} <span aria-hidden="true">·</span> {consultant.phoneDisplay}
                    </p>
                    <h3 className="font-display text-3xl font-semibold text-[#1A1816] mt-1">
                      {consultant.name}
                    </h3>
                  </div>

                  <a
                    href={consultant.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF9F6] bg-[#4A2E29] rounded-lg hover:bg-[#38211D] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {consultant.ctaLabel}
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Convênio CAAMT & Parceria Ana Paula Fortes */}
        <section id="parcerias" className="border-t border-[#E5DFD5] bg-[#F3F0EA]/70 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 space-y-14">
            {/* Convênio CAAMT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E5DFD5] p-3">
                  <ResilientImage
                    src={CAAMT_INFO.photoSrc}
                    alt={CAAMT_INFO.photoAlt}
                    fallbackTitle="Convênio CAAMT"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-medium text-[#8B6D43]">
                  {CAAMT_INFO.kicker} <span aria-hidden="true">·</span> {CAAMT_INFO.note}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1816]">
                  {CAAMT_INFO.title}
                </h2>
                <p className="text-base text-[#4D463F] leading-relaxed max-w-xl">
                  {CAAMT_INFO.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={CONSULTANTS[0].whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF9F6] bg-[#4A2E29] rounded-lg hover:bg-[#38211D] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Cadastrar benefício com Thaila
                  </a>
                  <a
                    href={CONSULTANTS[1].whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1A1816] bg-[#FFFFFF] border border-[#D8D0C5] rounded-lg hover:bg-[#FAF9F6] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#8B6D43]" />
                    Cadastrar benefício com Marisa
                  </a>
                </div>
              </div>
            </div>

            <hr className="border-[#E5DFD5]" />

            {/* Parceria Ana Paula Fortes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 lg:order-1 order-2 space-y-4">
                <p className="text-xs font-medium text-[#8B6D43]">
                  {COLOR_PARTNERSHIP_INFO.kicker} <span aria-hidden="true">·</span> Consultoria de
                  Imagem e Estilo
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1816]">
                  {COLOR_PARTNERSHIP_INFO.title} — {COLOR_PARTNERSHIP_INFO.subtitle}
                </h2>
                <p className="text-base text-[#4D463F] leading-relaxed max-w-xl">
                  {COLOR_PARTNERSHIP_INFO.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={CONSULTANTS[0].whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF9F6] bg-[#4A2E29] rounded-lg hover:bg-[#38211D] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Agendar com Thaila
                  </a>
                  <a
                    href={CONSULTANTS[1].whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1A1816] bg-[#FFFFFF] border border-[#D8D0C5] rounded-lg hover:bg-[#FAF9F6] transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#8B6D43]" />
                    Agendar com Marisa
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-2 order-1">
                <div className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E5DFD5] p-3">
                  <ResilientImage
                    src={COLOR_PARTNERSHIP_INFO.photoSrc}
                    alt={COLOR_PARTNERSHIP_INFO.photoAlt}
                    fallbackTitle="Ana Paula Fortes"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Depoimentos Reais do Google com Fotos das Clientes */}
        <section id="depoimentos" className="bg-[#FAF2EB] border-t border-[#E5DFD5] py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <img
                src={REAL_ASSETS.googleBadge}
                alt="Avaliação Google 5 estrelas"
                className="h-9 w-auto mx-auto object-contain"
              />
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#4A2E29] leading-tight">
                Veja depoimentos de clientes que confiam em nosso trabalho!
              </h2>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {visibleReviews.map((review) => (
                  <article
                    key={review.id}
                    className="bg-[#FFFFFF] border border-[#EAE0D5] rounded-xl p-5 shadow-xs flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <ResilientImage
                            src={review.avatarSrc}
                            alt={`Foto de ${review.author}`}
                            fallbackTitle={review.author}
                            className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#E5DFD5]"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#1A1816] truncate">
                              {review.author}
                            </p>
                            <p className="text-[11px] text-[#6E655B] tabular-nums">{review.date}</p>
                          </div>
                        </div>
                        <GoogleGIcon />
                      </div>

                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-0.5 text-[#F4B400]" aria-label="5 estrelas">
                          {[0, 1, 2, 3, 4].map((starIndex) => (
                            <Star key={starIndex} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <BadgeCheck
                          className="w-4 h-4 text-[#4285F4] ml-1 shrink-0"
                          aria-label="Avaliação verificada no Google"
                        />
                      </div>

                      <p className="text-sm text-[#2E2925] leading-relaxed">{review.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Controls to cycle through all 5 verified reviews */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setReviewOffset(
                      (prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length
                    )
                  }
                  aria-label="Depoimento anterior"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#FFFFFF] border border-[#D8D0C5] text-[#4A2E29] hover:bg-[#4A2E29] hover:text-[#FAF9F6] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#6E655B] tabular-nums">
                  {reviewOffset + 1} / {GOOGLE_REVIEWS.length}
                </span>
                <button
                  type="button"
                  onClick={() => setReviewOffset((prev) => (prev + 1) % GOOGLE_REVIEWS.length)}
                  aria-label="Próximo depoimento"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-[#FFFFFF] border border-[#D8D0C5] text-[#4A2E29] hover:bg-[#4A2E29] hover:text-[#FAF9F6] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Localização, Trabalhe Conosco & Banner Oficial */}
        <section id="localizacao" className="border-t border-[#E5DFD5] bg-[#FFFFFF] py-16">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs font-medium text-[#8B6D43]">
                  Endereço <span aria-hidden="true">·</span> {BRAND_INFO.addressCity}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1816]">
                  Visite nossa loja física
                </h2>

                <div className="text-sm text-[#4D463F] space-y-1 leading-relaxed">
                  <p className="font-semibold text-[#1A1816]">{BRAND_INFO.addressLine1}</p>
                  <p>{BRAND_INFO.addressLine2}</p>
                  <p>{BRAND_INFO.addressCity}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href={BRAND_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF9F6] bg-[#4A2E29] rounded-lg hover:bg-[#38211D] transition-colors whitespace-nowrap"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Abrir no Google Maps
                  </a>

                  <a
                    href={BRAND_INFO.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#1A1816] bg-[#FAF9F6] border border-[#D8D0C5] rounded-lg hover:bg-[#F3F0EA] transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#8B6D43]" />
                    Abrir no Waze
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium text-[#4D463F] hover:text-[#1A1816] hover:bg-[#F3F0EA] rounded-lg transition-colors whitespace-nowrap"
                  >
                    {copiedAddress ? (
                      <Check className="w-3.5 h-3.5 text-[#234F2D]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedAddress ? 'Endereço copiado' : 'Copiar endereço'}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 lg:pl-10 lg:border-l lg:border-[#E5DFD5] space-y-4">
                <p className="text-xs font-medium text-[#8B6D43]">
                  Carreiras <span aria-hidden="true">·</span> Equipe Stilo Maria
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1816]">
                  Faça parte da nossa equipe agora mesmo!
                </h2>
                <p className="text-sm text-[#4D463F] leading-relaxed">
                  Envie seu currículo agora mesmo para o e-mail abaixo:
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={BRAND_INFO.mailtoUrl}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1A1816] bg-[#F3F0EA] border border-[#D8D0C5] rounded-lg hover:bg-[#EAE3D8] transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#8B6D43]" />
                    {BRAND_INFO.email}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#4D463F] hover:text-[#1A1816] hover:bg-[#F3F0EA] rounded-lg transition-colors whitespace-nowrap"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#234F2D]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copiedEmail ? 'E-mail copiado' : 'Copiar e-mail'}
                  </button>
                </div>
              </div>
            </div>

            {/* Wide Official Brand Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E5DFD5] bg-[#573831]">
              <ResilientImage
                src={REAL_ASSETS.heroCoverWide}
                alt="Capa oficial Stilo Maria"
                fallbackTitle="Stilo Maria"
                className="w-full h-56 sm:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-[#2B1916]/45 flex flex-col items-center justify-center text-center px-6">
                <img
                  src={REAL_ASSETS.logoWhite}
                  alt="Logo Stilo Maria"
                  className="h-12 sm:h-14 w-auto object-contain mb-3"
                />
                <p className="font-display text-xl sm:text-2xl italic text-[#FAF9F6] max-w-2xl">
                  “{BRAND_INFO.verseText}”
                </p>
                <p className="text-xs font-medium text-[#E6D2BE] mt-2">{BRAND_INFO.verseRef}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#5E3D37] bg-[#4A2E29] text-[#EFE2D5] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <p>{BRAND_INFO.copyright}</p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={CONSULTANTS[0].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors whitespace-nowrap"
            >
              WhatsApp Thaila
            </a>
            <a
              href={CONSULTANTS[1].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors whitespace-nowrap"
            >
              WhatsApp Marisa
            </a>
            <a
              href={BRAND_INFO.storyYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors whitespace-nowrap"
            >
              Nossa História
            </a>
            <button
              type="button"
              onClick={() => setShareModalOpen(true)}
              className="hover:text-[#FFFFFF] transition-colors whitespace-nowrap"
            >
              Compartilhar Bio
            </button>
          </div>
        </div>
      </footer>

      <StoryVideoModal isOpen={storyModalOpen} onClose={() => setStoryModalOpen(false)} />
      <ShareBioModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </div>
  );
}
