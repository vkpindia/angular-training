import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _API_URL = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-11-18
   * @returns {Observable<any>}
   * @memberof UserService
   */
  public getUser(): Observable<any> {
    return this.http.get(this._API_URL).pipe(map(data => data));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-11-18
   * @returns {Observable<any>}
   * @memberof UserService
   */
  public addUser(formData): Observable<any> {
    return this.http.post(this._API_URL, formData).pipe(
      map(data => data),
      catchError(err => err)
    );
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-11-18
   * @returns {Observable<any>}
   * @memberof UserService
   */
  public updateUser(formData): Observable<any> {
    return this.http.put(this._API_URL, formData).pipe(map(data => data));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-11-18
   * @returns {Observable<any>}
   * @memberof UserService
   */
  public deleteUser(userid): Observable<any> {
    return this.http.delete(this._API_URL, userid).pipe(map(data => data));
  }
}
