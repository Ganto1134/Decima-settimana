import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { iPhoto } from './iphoto';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePhoto(photoId: number): Observable<iPhoto[]> {
    const url = `${this.baseUrl}/${photoId}`;
    return this.http.delete<iPhoto[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }

}
