import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private usersApi = 'https://jsonplaceholder.typicode.com/users';
  private postsApi = 'https://jsonplaceholder.typicode.com/posts';
  private todosApi = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersApi);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsApi);
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.todosApi);
  }

  getUsersById(id: number): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users: User[]) => users.find((user) => user.id === id))
    );
  }
}
