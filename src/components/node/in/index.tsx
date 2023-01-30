import React, {
  ReactNode,
} from 'react';

import styles from './index.module.scss';

interface NodeInProps {
  children?: ReactNode;
}

function NodeIn({
  children,
}: NodeInProps) {
  return (
    <div className={ styles.in }>
      <div className={ styles.dot } />
      <div className={ styles.content }>{
        children
      }</div>
    </div>
  );
}

export default NodeIn;
