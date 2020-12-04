module.exports = {
  mainSidebar: {
    'Microsoft': [
      {
        type: 'doc',
        id: 'microsoft/responsible-ai', 
      },
      {
        type: 'doc',
        id: 'microsoft/guidelines', 
      },
      {
        type: 'doc',
        id: 'microsoft/tools', 
      },
      {
        type: 'doc',
        id: 'microsoft/interpretability', 
      },
      {
        type: 'category',
        label: 'InterpretML',
        collapsed: true,
        items: ['microsoft/interpretML', 'microsoft/ebm','microsoft/shap','microsoft/other'],
      },
    ],
  },
  secondarySidebar: {
    'Research': [
      {
        type: 'category',
        label: 'Collections',
        collapsed: true,
        items: ['research/research','research/privacy&security'],
      },
      {
        type: 'doc',
        id: 'research/reference'
      },
    ]
  }
};
