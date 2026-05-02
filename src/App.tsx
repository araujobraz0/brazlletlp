import './App.css'

import iconImg from './assets/brazllet-icon.png'
import homeLightImg from './assets/Home_light.jpg'
import homeDarkImg from './assets/Home_dark.jpg'
import addImg from './assets/Adicionar_lancamento.jpg'
import fixedImg from './assets/Gastos_fixos.jpg'
import entradasImg from './assets/Entradas.jpg'
import saidasImg from './assets/Saidas.jpg'
import cardsImg from './assets/Cartoes.jpg'
import investmentsImg from './assets/Investimentos.jpg'
import goalsImg from './assets/Coisas_para_comprar_e_objetivos.jpg'
import pixImg from './assets/Anotacoes_e_pix.jpg'
import exportImg from './assets/Exportacao.jpg'
import importImg from './assets/Importacao.jpg'
import graphLightImg from './assets/Grafico_light.jpg'
import graphDarkImg from './assets/Grafico_dark.jpg'

type Feature = {
  title: string
  eyebrow: string
  description: string
  image: string
  imageAlt: string
  variant?: 'wide' | 'phone' | 'dark' | 'wide dark'
}

const APK_URL = 'https://github.com/araujobraz0/brazlletlp/releases/download/v1.0.0/brazllet_v1.0.0.apk'

const features: Feature[] = [
  {
    title: 'Home completa e elegante',
    eyebrow: 'Visão geral',
    description:
      'Acompanhe salário, saldo atual, entradas, saídas, mês selecionado e atalhos principais em uma tela limpa e rápida de entender.',
    image: homeLightImg,
    imageAlt: 'Tela inicial do Brazllet no modo claro',
    variant: 'phone',
  },
  {
    title: 'Modo escuro premium',
    eyebrow: 'Tema automático',
    description:
      'Use o app no modo claro ou escuro, mantendo o mesmo visual Brazllet com contraste confortável e aparência premium.',
    image: homeDarkImg,
    imageAlt: 'Tela inicial do Brazllet no modo escuro',
    variant: 'phone',
  },
  {
    title: 'Lançamentos com data e categoria',
    eyebrow: 'Entradas, saídas, fixos e parcelas',
    description:
      'Cadastre movimentações com nome, valor, categoria e data. O fluxo foi pensado para ser simples no dia a dia.',
    image: addImg,
    imageAlt: 'Modal de adicionar lançamento no Brazllet',
    variant: 'phone',
  },
  {
    title: 'Gastos fixos por mês',
    eyebrow: 'Controle recorrente',
    description:
      'Acompanhe contas fixas, vencimentos, valores pagos e não pagos, mantendo histórico por mês com organização.',
    image: fixedImg,
    imageAlt: 'Área de gastos fixos do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Entradas variáveis',
    eyebrow: 'Receitas extras',
    description:
      'Registre vendas, proventos e outras entradas para entender tudo que soma ao seu orçamento mensal.',
    image: entradasImg,
    imageAlt: 'Área de entradas variáveis do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Saídas por categoria',
    eyebrow: 'Gastos variáveis',
    description:
      'Separe seus gastos por categorias como mercado, lazer, comida, transporte e outras áreas importantes.',
    image: saidasImg,
    imageAlt: 'Área de saídas variáveis do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Cartões e parcelas',
    eyebrow: 'Fatura organizada',
    description:
      'Controle limite, disponível, fatura atual, próxima fatura e parcelas de forma visual e fácil de acompanhar.',
    image: cardsImg,
    imageAlt: 'Área de cartões do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Investimentos do mês',
    eyebrow: 'Percentual automático',
    description:
      'Defina uma porcentagem para separar automaticamente e acompanhe o aporte sugerido com base no seu salário ou entradas.',
    image: investmentsImg,
    imageAlt: 'Área de investimentos do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Coisas para comprar e objetivos',
    eyebrow: 'Planejamento pessoal',
    description:
      'Guarde desejos de compra, marque itens comprados e acompanhe objetivos financeiros com barra de progresso.',
    image: goalsImg,
    imageAlt: 'Área de coisas para comprar e objetivos do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Pix e anotações',
    eyebrow: 'Lembretes úteis',
    description:
      'Salve chaves Pix, contatos importantes, links e anotações para ter tudo à mão quando precisar.',
    image: pixImg,
    imageAlt: 'Área de anotações e Pix do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Relatórios por categoria',
    eyebrow: 'Gráficos visuais',
    description:
      'Entenda para onde o dinheiro foi com gráficos e resumos por categoria no modo claro e no modo escuro.',
    image: graphLightImg,
    imageAlt: 'Gráfico de saídas por categoria no modo claro',
    variant: 'wide',
  },
  {
    title: 'Gráficos no modo escuro',
    eyebrow: 'Leitura confortável',
    description:
      'Visualize os mesmos relatórios no tema escuro, mantendo o padrão visual do app.',
    image: graphDarkImg,
    imageAlt: 'Gráfico de saídas por categoria no modo escuro',
    variant: 'wide dark',
  },
  {
    title: 'Exportação organizada',
    eyebrow: 'Backup e relatórios',
    description:
      'Exporte seus dados em formatos úteis, com estrutura organizada para guardar, conferir ou compartilhar.',
    image: exportImg,
    imageAlt: 'Tela de backup e exportação do Brazllet',
    variant: 'phone',
  },
  {
    title: 'Importação com pré-visualização',
    eyebrow: 'Dados externos',
    description:
      'Importe dados por arquivos compatíveis e revise antes de confirmar, mantendo mais controle sobre o que entra no app.',
    image: importImg,
    imageAlt: 'Tela de importação do Brazllet',
    variant: 'wide',
  },
]

const highlights = [
  'Entradas, saídas e gastos fixos em um só lugar',
  'Cartões, parcelas, objetivos e coisas para comprar',
  'Investimentos, Pix, anotações e busca global',
  'Importação, exportação e relatórios visuais',
]

function App() {
  return (
    <main className="pageShell">
      <header className="heroSection" id="inicio">
        <nav className="topbar" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Brazllet início">
            <span className="brandIconWrap">
              <img src={iconImg} alt="Ícone do Brazllet" />
            </span>
            <span>
              <strong>Brazllet</strong>
              <small>Sua wallet sob controle</small>
            </span>
          </a>

          <div className="navLinks">
            <a href="#recursos">Recursos</a>
            <a href="#preco">Preço</a>
            <a href="#download-apk">Baixar</a>
          </div>
        </nav>

        <section className="heroIntro" aria-label="Apresentação do Brazllet">
          <div className="heroCopy">
            <span className="pill">Controle financeiro pessoal</span>
            <h1>Organize seu mês com um app bonito, simples e completo.</h1>
            <p>
              O Brazllet reúne gastos, entradas, cartões, parcelas, metas, investimentos,
              Pix, anotações, importação, exportação e relatórios em um visual premium feito
              para usar todos os dias.
            </p>

            <div className="heroActions" id="baixar">
              <a className="primaryButton" href={APK_URL}>
                Baixar APK
              </a>
            </div>

            <div className="heroMiniGrid" id="preco" aria-label="Resumo rápido do app">
              <div className="miniCard priceMiniCard">
                <span>Premium</span>
                <strong>R$ 6,90/mês</strong>
                <small>7 dias grátis para testar.</small>
              </div>
              <div className="miniCard">
                <span>Android</span>
                <strong>APK direto</strong>
                <small>Instale e comece a organizar.</small>
              </div>
              <div className="miniCard">
                <span>Visual</span>
                <strong>Light e dark</strong>
                <small>Combina com o modo do celular.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="previewStrip" aria-label="Prévias do aplicativo">
          <div className="previewText">
            <span className="sectionEyebrow">Prévia do app</span>
            <h2>Visual Brazllet em modo claro e escuro.</h2>
            <p>As imagens ficam abaixo da primeira chamada para o download não sair da tela inicial.</p>
          </div>
          <div className="previewShots">
            <figure>
              <img src={homeLightImg} alt="Home do Brazllet no modo claro" />
              <figcaption>Modo claro</figcaption>
            </figure>
            <figure className="darkPreview">
              <img src={homeDarkImg} alt="Home do Brazllet no modo escuro" />
              <figcaption>Modo escuro</figcaption>
            </figure>
          </div>
        </section>
      </header>

      <section className="summarySection" aria-label="Resumo do aplicativo">
        <div className="summaryCard">
          <div>
            <span className="sectionEyebrow">O que o app possui</span>
            <h2>Tudo para acompanhar seu dinheiro sem complicar.</h2>
          </div>
          <div className="highlightGrid">
            {highlights.map((item) => (
              <div className="highlightItem" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featuresSection" id="recursos">
        <div className="sectionHeader">
          <span className="sectionEyebrow">Recursos do Brazllet</span>
          <h2>Uma explicação rápida de cada parte do aplicativo.</h2>
          <p>
            As telas abaixo mostram os principais recursos que o usuário encontra ao usar o Brazllet.
          </p>
        </div>

        <div className="featuresGrid">
          {features.map((feature, index) => (
            <article
              className={`featureCard ${feature.variant?.includes('wide') ? 'featureWide' : ''} ${
                feature.variant?.includes('dark') ? 'featureDark' : ''
              }`}
              key={feature.title}
            >
              <div className="featureText">
                <span>
                  {String(index + 1).padStart(2, '0')} · {feature.eyebrow}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className={`featureImageWrap ${feature.variant?.includes('phone') ? 'phoneImageWrap' : ''}`}>
                <img src={feature.image} alt={feature.imageAlt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="downloadSection" id="download-apk">
        <div className="downloadCard">
          <img src={iconImg} alt="Ícone do Brazllet" />
          <div>
            <span className="sectionEyebrow">Android APK</span>
            <h2>Baixe o Brazllet e comece pelo teste grátis.</h2>
            <p>
              Coloque aqui o link do seu APK quando ele estiver hospedado. O botão pode apontar para
              Google Drive, GitHub Releases, Supabase Storage ou outro link direto de download.
            </p>
          </div>
          <a className="primaryButton" href={APK_URL} aria-label="Adicionar link do APK">
            Baixar APK
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
