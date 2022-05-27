import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import localeESMessages from "./locale/es";
import localeENMessages from "./locale/en";
import Galeria from './componets/galeria';

const navLanguage = navigator.language.split("-")[0];
const localeMsg = navLanguage === "es" ? localeESMessages : localeENMessages;

ReactDOM.render(
<IntlProvider locale={navLanguage} messages={localeMsg}>
  <Galeria />
</IntlProvider>,document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
