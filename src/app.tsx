import React from 'react';

import {
  UiStage,
} from '@/components';

import {
  TextInput,
} from '@/nodes/input';
import {
  Sum,
} from '@/nodes/math';

function App() {
  return (
    <div className="app">
      <UiStage>
        <TextInput />
        <Sum />
      </UiStage>
    </div>
  );
}

export default App;
