import { History } from 'history';
import { TodoModel } from 'app/models';
import { RouterStore } from './RouterStore';
import { PredictionsStore } from "./PredictionsStore";
import {  STORE_ROUTER, STORE_PREDICTIONS } from 'app/constants';

export function createStores(history: History, defaultTodos?: TodoModel[]) {
  // const todoStore = new TodoStore(defaultTodos);
  const routerStore = new RouterStore(history);
  const predictionsStore = new PredictionsStore();
  return {
    [STORE_ROUTER]: routerStore,
    [STORE_PREDICTIONS]: predictionsStore,
  };
}
