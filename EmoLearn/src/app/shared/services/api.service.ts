import { BroadcastService } from './broadcast.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // post<T>(arg0: string, request: QuestionnaireRequest): Observable<import("../models").BaseResponse> {
  //   throw new Error('Method not implemented.');
  // }

  constructor(
    private httpClient: HttpClient,
    private broadCastService: BroadcastService
  ) { }

  get<T>(path: string, params: HttpParams = new HttpParams(), showErrors: boolean = true): Observable<T> {
    // Remove duplicate slash
    path = path.replace(/([^:]\/)\/+/g, '$1');

    return this.httpClient.get<T>(path, { headers: this.setHeaders(), params, withCredentials: true }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);

        // return a default fallback value so app can continue
        return this.formatErrors(err);
      })
    );
  }

  post<T>(path: string, body: object = {}, showErrors: boolean = true): Observable<T> {
    // Remove duplicate slash
    path = path.replace(/([^:]\/)\/+/g, '$1');

    return this.httpClient.post<T>(path, body, { headers: this.setHeaders(), withCredentials: true }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);

        // return a default fallback value so app can continue
        return this.formatErrors(err);
      })
    );
  }

  getFile(path: string, params: HttpParams = new HttpParams(), showErrors: boolean = true): any {
    // Remove duplicate slash
    path = path.replace(/([^:]\/)\/+/g, '$1');

    return this.httpClient.get(path, { headers: this.setHeaders(), observe: 'response', responseType: 'blob', params }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);

        // return a default fallback value so app can continue
        return this.formatErrors(err);
      })
    );
  }

  put<T>(path: string, body: object = {}, showErrors: boolean = true): Observable<T> {
    // Remove duplicate slash
    path = path.replace(/([^:]\/)\/+/g, '$1');

    return this.httpClient.put<T>(path, body, { headers: this.setHeaders(), withCredentials: true }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);

        // return a default fallback value so app can continue
        return this.formatErrors(err);
      })
    );
  }

  delete<T>(path: string, body: object = {}, showErrors: boolean = true): Observable<T> {
    // Remove duplicate slash
    path = path.replace(/([^:]\/)\/+/g, '$1');

    return this.httpClient.delete<T>(path, { headers: this.setHeaders(), body:body, withCredentials: true }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);

        // return a default fallback value so app can continue
        return this.formatErrors(err);
      })
    );
  }

  postAttachment<T>(path: string, body: FormData, showErrors: boolean = true): Observable<T> {
    // Remove duplicate slash
    path = path.replace(/([^:]\/)\/+/g, '$1');

    return this.httpClient.post<T>(path, body, { headers: this.setHeadersForAttachment(), withCredentials: true }).pipe(
      catchError((err: HttpErrorResponse) => {
        this.handleError(err, showErrors);

        // return a default fallback value so app can continue
        return this.formatErrors(err);
      })
    );
  }

  private setHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  private setHeadersForAttachment(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return headers;
  }

  private formatErrors(err: HttpErrorResponse) {
    return of<any>(
      {
        isSuccess: false,
        status: err.status,
        message: err.error && err.error.messageDetails ? err.error.messageDetails : 'Something went wrong...',
        data: err.error
      });
  }

  private handleError(err: HttpErrorResponse, showErrors: boolean = true) {
    if (err.error instanceof Error) {
      if (showErrors) {
        this.broadCastService.broadcast('CLIENT_SIDE_NETWORK_ERROR', err);
      }
    } else {
      // Handling unknown errors
      if (err.status === 403 || err.status === 401 || showErrors) {
        // Due to WKB Higherapproval issue
        if (err.status !== 0) {
          this.broadCastService.broadcast('SERVER_ERROR', err);
        }
      }
    }
    return of<any>({ isSuccess: false, error: err });
  }
}
