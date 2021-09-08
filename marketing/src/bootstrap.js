import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development mode and in isolation,
// call mount immediately
if (process.env.NODE_ENV !== 'production') {
     const devRoot = document.getElementById("_marketing_dev_root");

     if (devRoot) {
         mount(devRoot, { defaultHistory: createBrowserHistory() });
     }
}



// If we are runing through CONTAINER
// We should export the mount function
export { mount };