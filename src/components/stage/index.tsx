import React, {
  ReactNode,
} from 'react';

import styles from './index.module.scss';

interface UiStageProps {
  children: ReactNode,
}

function UiStage({
  children,
}: UiStageProps) {
  return (
    <div className={ styles.stage }>
      { children }
    </div>
  );
}

export default UiStage;
