import { Injectable }     from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchDataService {

  constructor (private http: Http) {}

  private globalRegistryUrl = 'https://stage-backend.global-registry.org';
  private globalRegistryToken = '';

  getPeople (lastName: string, firstName: string, page: number): Observable<any[]> {
    var authHeader = new Headers();
    authHeader.append('Authorization', 'Bearer ' + this.globalRegistryToken);

    var params = new URLSearchParams();
    params.set('entity_type', 'person');
    params.set('filters[owned_by]', 'all');
    if(firstName){ params.set('filters[first_name:like]', firstName); }
    params.set('filters[last_name:like]', lastName);
    params.set('page', page ? page.toString() : '1');

    return this.http.get(this.globalRegistryUrl + '/entities', {
      search: params,
      headers: authHeader
    }).map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();

    body.entities.forEach(function(e){
      Object.keys(e.person).forEach(function(k){
        if(!Array.isArray(e.person[k])){
          e.person[k] = [e.person[k]];
        }
      });
    });
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error.message || error.statusText || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
