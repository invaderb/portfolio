import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {
  private ref = 'XnglYRIAACgAJVbh';
  private token = 'MC5YbmdjZlJJQUFGRjhKUzky.HO-_ve-_vScm77-977-9MO-_vTdhWQHvv73vv73vv73vv71y77-9Je-_ve-_ve-_vTxube-_ve-_vSkaAGg';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    const options = {params: {ref: this.ref, access_token: this.token}};
    const url = `https://braydonharriscom.cdn.prismic.io/api/v2/documents/search`;
    const response = this.http.get(url, options);
    return response;
  }

}
