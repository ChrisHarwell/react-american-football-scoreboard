import React from 'react';
import ReactDOM from 'react-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/home/chris/Docume... Remove this comment to see the full error message
import App from './App';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // @ts-expect-error ts-migrate(2769) FIXME: Argument of type 'boolean' is not assignable to pa... Remove this comment to see the full error message
  ReactDOM.unmountComponentAtNode(div);
});
