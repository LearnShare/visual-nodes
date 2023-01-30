import React, {
  ReactNode,
} from 'react';

import styles from './index.module.scss';

interface UiNodeProps {
  title: string;
  ins?: ReactNode;
  outs?: ReactNode;
  display?: ReactNode;
}

function UiNode({
  title,
  ins,
  outs,
  display,
}: UiNodeProps) {
  return (
    <div className={ styles.node }>
      <div className={ styles.title }>{ title }</div>
      <div className={ styles.slots }>
        <div className={ styles.in }>{
          ins
        }</div>
        <div className={ styles.display }>{
          display
        }</div>
        <div className={ styles.out }>{
          outs
        }</div>
      </div>
    </div>
  );
}

export default UiNode;
