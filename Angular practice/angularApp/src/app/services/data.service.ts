import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/validator/app-error';
import { NotFoundError } from '../common/validator/not-found-error';
import { BadInput } from '../common/validator/bad-input';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url, private http: Http) { }

  getAll() {
    return  this.http.get(this.url)
    .pipe(
        map(response => response.json()),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return throwError(new AppError);

    // return this.http.post(this.url, JSON.stringify(resource))
    //     .pipe(
    //       map(reponse => reponse.json()),
    //       catchError(this.handleError)
    //     );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id,
     JSON.stringify({isRead: true }))
     .pipe(
         map(response => response.json()),
       catchError(this.handleError)
     );
  }

  delete(id) {
    // return throwError(new AppError);

    return this.http.delete(this.url + '/' + id)
    .pipe(
      map(Response => Response.json()),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      return throwError(new NotFoundError());
    }
    return  throwError(new AppError(error));
  }
}
