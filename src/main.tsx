import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
// import { TodoModel } from 'app/models';
import { createStores } from 'app/stores';
import { Application } from 'app';

// enable MobX strict mode
configure({ enforceActions: 'observed' })

// default fixtures for TodoStore
const defaultTodos = [
];

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, defaultTodos);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <Application history={history} />
  </Provider>,
  document.getElementById('root')
);
