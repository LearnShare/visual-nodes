import React, {
  ReactElement,
} from 'react';

import styles from './index.module.scss';

interface UiStageProps {
  children: ReactElement,
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
