import React, {
  useState,
} from 'react';

import {
  UiNode,
  NodeIn,
  NodeOut,
} from '@/components';

function NodeSum() {
  const [a] = useState(0);
  const [b] = useState(0);

  const sum = a + b;

  return (
    <UiNode
        title="SUM"
        ins={ (
          <>
            <NodeIn>{ a }</NodeIn>
            <NodeIn>{ b }</NodeIn>
          </>
        ) }
        outs={ (
          <NodeOut>{ sum }</NodeOut>
        ) }
        display={ (
          <span>{ a } + { b } = { sum }</span>
        ) } />
  );
}

export default NodeSum;
