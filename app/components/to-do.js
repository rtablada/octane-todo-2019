import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ToDo extends Component {
  @tracked todo = ''
  @tracked list = [{ id: 1, text: "clean the house" }, { id: 2, text: "buy milk" }]

  @action
  onDeleteItem(todo) {
    this.list = this.list.filter(item => item !== todo);
  }

  @action
  createNewTodoItem() {
    //validate todo
    if (!this.todo) {
      alert("Please enter a todo!");
      return;
    }
    const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
    this.list = [...this.list, { id: newId, text: this.todo }];
    this.todo = "";
  }
}
