import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
    ReactDom.render(
        <App />,
        el
    );
}

// If we are in development mode and in isolation,
// call mount immediately
if (process.env.NODE_ENV !== 'production') {
     const devRoot = document.getElementById("_marketing_dev_root");

     if (devRoot) {
         mount(devRoot);
     }
}



// If we are runing through CONTAINER
// We should export the mount function
export { mount };