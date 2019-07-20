import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Presentation from './presentation';

ReactDOM.render(
  <AppContainer>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;
    ReactDOM.render(
      <AppContainer>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
