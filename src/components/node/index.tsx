import React from 'react';

import NodeIn from './in';
import NodeOut from './out';

import styles from './index.module.scss';

interface UiNodeProps {
  title: string;
}

function UiNode({
  title,
}: UiNodeProps) {
  return (
    <div className={ styles.node }>
      <div className={ styles.title }>{ title }</div>
      <div className={ styles.slots }>
        <div className={ styles.in }>
          <NodeIn>1</NodeIn>
          <NodeIn>2</NodeIn>
        </div>
        <div className={ styles.display }>1 + 2 = 3</div>
        <div className={ styles.out }>
          <NodeOut>3</NodeOut>
        </div>
      </div>
    </div>
  );
}

export default UiNode;
