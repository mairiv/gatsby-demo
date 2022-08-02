import * as React from 'react';
import * as styles from './HeaderSection.module.scss';
import { Button } from '../Button';
import { Technologies } from './components/Technologies';

export const HeaderSection = () => (
  <section className={styles.wrap}>
    <div className={styles.container}>
      <Technologies />

      <h1 className={styles.header}>Configuration Management as&nbsp;a&nbsp;service</h1>

      <p className={styles.description}>
        From small startups to big enterprises, Configu helps prevent critical production failures, reduce the cost of
        configuration management and increase your application reliability and quality along with your CI/CD pipeline.
      </p>

      <div className={styles.buttonsWrap}>
        <Button uiType={'primaryButton'} className={styles.buttonLink} href="#get-started-link">
          Get Started
        </Button>

        <Button uiType={'link'} className={styles.underlineLink} href="#demo-link">
          Schedule a Demo
        </Button>
      </div>
    </div>
  </section>
);
