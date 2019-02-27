import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';
import { map } from 'rxjs/operators';
import { $ } from 'protractor';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class TodoService {
    private getAllUrl = API_URL + '/todo';
    private addUrl =    API_URL + '/new';
    private editUrl = API_URL + '/edit';
    private deleteUrl = API_URL + '/delete';

    constructor(private http: Http) {

    }
    getAllTodos(): Observable<any> {
        return this.http.get(this.getAllUrl)
            .map(res => res.json());
    }

    addTodo(todo: Todo): Observable<any> {
        return this.http.post(this.addUrl, todo)
            .map(res => res.text());
    }

    editTodo(todo: Todo): Observable<any> {
        return this.http.put(this.editUrl, todo)
            .map(res => res.text());
    }

    deleteTodo(id: number): Observable<any> {
        return this.http.delete(this.deleteUrl + '/' + id)
            .map(res => res.text());
    }
}
