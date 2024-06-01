import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageWelcome() {
  return (
    <div className="text--justify margin-vert--lg">
      <div className="text--center padding-horiz--md">
        <Heading as="h2"><Translate>Domine o digital</Translate> - Vitor Costa</Heading>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p>
          <Translate>Bem-vindo ao nosso site, com a nossa parceria. A sua presença na internet é nossa prioridade.
            Domine o digital: estratégias de marketing digital e desenvolvimento que alavancam os resultados!
            Transformamos ideias em soluções digitais eficazes, auxiliando sua marca a se sobressair e alcançar novos níveis de sucesso.</Translate>
        </p>
        <p>
          <Translate>Minha abordagem é totalmente personalizada, focando em entender suas necessidades específicas
            e oferecer soluções sob medida. Eu estou aqui para ajudá-lo a se destacar no universo digital,
            desde a criação de conteúdo interativo até a criação de websites otimizados.
            Juntos, é possível estabelecer uma presença online sólida e impactante que aumente a visibilidade do seu empreendimento.</Translate>
        </p>
        <p><b><Translate>Vamos começar essa jornada em conjunto?</Translate></b></p>
      </div>
    </div>
  );
}

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'feature.development.title',
      message: 'Desenvolvimento',
    }),
    Svg: require('@site/static/img/coding.svg').default,
    description: (
      <>
        <Translate>Criamos websites e plataformas digitais otimizadas para atender às suas necessidades
          específicas.</Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'feature.consultancy.title',
      message: 'Consultoria',
    }),
    Svg: require('@site/static/img/consulter.svg').default,
    description: (
      <>
        <Translate>Implementamos técnicas avançadas de otimização de SEO para garantir que seu site seja facilmente
          encontrado pelos motores de busca e ganhe visibilidade online.</Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'feature.marketing.title',
      message: 'Marketing Digital',
    }),
    Svg: require('@site/static/img/marketing.svg').default,
    description: (
      <>
        <Translate>Desenvolvemos estratégias de marketing digital sob medida para aumentar seus resultados e atingir
          seu público-alvo de forma eficiente.</Translate>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <>
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FrequenceQuestion() {
  return (
    <>
      <div className="text--justify margin-vert--lg">
        <div className="text--center padding-horiz--md">
          <Heading as="h2"><Translate>Perguntas Frequentes</Translate></Heading>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p>
            <Translate>Nós queremos que você tenha uma boa experiência ao trabalhar conosco. Explore as perguntas abaixo para entender como podemos ajudá-lo a transformar suas ideias em soluções digitais eficazes e aumentar os resultados do seu negócio. Se não encontrar a resposta que quer, entre em contato. Vamos aprender o digital!</Translate>
          </p>
        </div>
      </div>
    </>
  )
}

export default function Homepage(): JSX.Element {
  return (
    <>
      <HomepageWelcome />

      <br />
      <br />

      <HomepageFeatures />

      <hr style={
        {
          maxWidth: '80%',
          margin: '50px auto'
        }} />

      <FrequenceQuestion />
    </>
  );
}
