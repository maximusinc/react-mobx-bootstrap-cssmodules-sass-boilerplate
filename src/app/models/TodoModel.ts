import { observable } from 'mobx';

export class TodoModel {
  readonly id: number;
  @observable public text: string;
  @observable public completed: boolean;

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default TodoModel;
