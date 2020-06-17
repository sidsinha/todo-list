import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ReactQueryDevtools } from 'react-query-devtools'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckb6w8kn5054n01wk0w77cc0k/master',
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
