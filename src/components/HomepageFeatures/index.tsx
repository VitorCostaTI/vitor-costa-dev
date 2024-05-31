import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Desenvolvimento',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Consultoria',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Marketing Digital',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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

function AdditionalContent() {
  return (
    <div className="text--justify margin-vert--lg">
      <div className="text--center padding-horiz--md">
        <Heading as="h2">Domine o digital - Vitor Costa</Heading>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p>
          Bem-vindo ao nosso site, com a nossa parceria. A sua presença na internet é nossa prioridade. 
          Domine o digital: estratégias de marketing digital e desenvolvimento que alavancam os resultados! 
          Transformamos ideias em soluções digitais eficazes, auxiliando sua marca a se sobressair e alcançar novos níveis de sucesso.
        </p>
        <p>
          Minha abordagem é totalmente personalizada, focando em entender suas necessidades específicas 
          e oferecer soluções sob medida. Eu estou aqui para ajudá-lo a se destacar no universo digital, 
          desde a criação de conteúdo interativo até a criação de websites otimizados.
          Juntos, é possível estabelecer uma presença online sólida e impactante que aumente a visibilidade do seu empreendimento.
        </p>
        <p><b>Vamos começar essa jornada em conjunto?</b></p>
      </div>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <AdditionalContent />
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
  );
}
