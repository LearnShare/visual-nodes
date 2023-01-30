import React, {
  useState,
} from 'react';

import {
  UiNode,
  NodeOut,
} from '@/components';

import styles from './index.module.scss';

function NodeTextInput() {
  const [
    value,
    setValue,
  ] = useState('');

  return (
    <UiNode
        title="Input"
        outs={ (
          <NodeOut />
        ) }
        display={ (
          <input
              className={ styles.input }
              value={ value }
              onChange={ (event) => setValue(event.target.value) } />
        ) } />
  );
}

export default NodeTextInput;
