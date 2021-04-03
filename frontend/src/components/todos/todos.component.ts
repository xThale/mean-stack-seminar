import {HttpClient} from '@angular/common/http';
import {v4 as uuidv4} from 'uuid';
import config from '../../config/config';
import {Component} from '@angular/core';
import Todo from '../../model/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  displayedColumns: string[] = ['position', 'description', 'actions'];
  data: Todo[] = [];
  newTodoDescription = '';

  constructor(private http: HttpClient) {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.http.get<Todo[]>(`${config.backendUrl}/todo`).subscribe(todos => {
      this.data = todos;
    });
  }

  delete(element: Todo): void {
    this.removeItem(element);
    this.http.delete(`${config.backendUrl}/todo/${element._id}`).toPromise()
      .catch(_ => this.addItem(element));
  }

  done(element: Todo): void {
    element.done = true;
    this.http.post<Todo>(`${config.backendUrl}/todo/${element._id}`, element).toPromise()
      .then(data => {
        element = data;
      }).catch(_ => element.done = false);
  }

  create(): void {
    if (this.newTodoDescription && this.newTodoDescription.length > 0) {
      const todo: Todo = {
        _id: uuidv4(),
        description: this.newTodoDescription,
        done: false
      };
      this.addItem(todo);
      this.http.post<Todo>(`${config.backendUrl}/todo`, todo).toPromise()
        .then(data => {
          this.data = this.data.map(item => item._id !== todo._id && item || data);
        }).catch(_ => this.removeItem(todo));
    }
  }

  private removeItem(todo: Todo): void {
    this.data = this.data.filter(item => item._id !== todo._id);
  }
  private addItem(todo: Todo): void {
    this.data = [...this.data, todo];
  }

}
