/* eslint-disable */

// 1. input nodes

// 1.1 text
const textInputNode = {
  // node type
  type: 'input:text',
  // default display name
  name: 'Text',
  // node data
  data: {
    // default value
    _value: {
      type: 'text',
      default: '',
    },
  },
  // display content
  display: 'input:text',
  // outputs
  outs: {
    // default value
    _value: '_value',
  },
};

// 2. output nodes

// 2.1 text

const textOutputNode = {
  type: 'output:text',
  name: 'Text',
  data: {
    // default value
    _value: {
      type: 'text',
      default: '',
    },
  },
  // display content
  display: 'display:text',
};

// 3. function nodes

// 3.1 math.sum

const mathSumNode = {
  type: 'math:sum',
  name: 'SUM',
  data: {
    _value: {
      type: 'number',
      default: null,
      func: 'ins.a + ins.b',
    },
  },
  ins: {
    a: {
      type: 'number',
      default: 0,
    },
    b: {
      type: 'number',
      default: 0,
    },
  },
  display: {
    type: 'display:text',
    value: '$a + $b = $_value',
  },
  outs: {
    _value: '_value',
  },
};
