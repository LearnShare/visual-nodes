import React, {
  ReactNode,
} from 'react';

import styles from './index.module.scss';

interface NodeOutProps {
  children?: ReactNode;
}

function NodeOut({
  children,
}: NodeOutProps) {
  return (
    <div className={ styles.out }>
      <div className={ styles.dot } />
      <div className={ styles.content }>{
        children
      }</div>
    </div>
  );
}

export default NodeOut;
