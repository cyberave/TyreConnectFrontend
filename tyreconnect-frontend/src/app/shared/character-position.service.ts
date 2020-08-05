import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CharacterPosition } from './character-position';
import { InformationText } from './information-text';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CharacterPositionService {

  // Base url
  baseurl = 'https://localhost:44378/api';
  // baseurl = "https://app-tyreconnect-lexicon-webapi-prod-012.azurewebsites.net/api"

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateCharacterPosition(data): Observable<CharacterPosition> {
    console.log('CreateCharacterPosition');
    console.log(`DATA: ${data}`);
    console.log(`JSON.stringify(data): ${JSON.stringify(data)}`);    
    
    var ret = this.http.post<CharacterPosition>(this.baseurl + '/characterpositions/', JSON.stringify(data) , this.httpOptions)    
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )

    return ret;
  }  

  // GET
  GetInformation(): Observable<InformationText> {
    console.log('GetInformation');
    return this.http.get<InformationText>(this.baseurl + '/characterpositions/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}