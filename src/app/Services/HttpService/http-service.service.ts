import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  post(url: string, data: any, isHeaderRequired: any = false, headers = null) {
    return this.http.post(url, data, isHeaderRequired && headers);
  }
  get(url: string, isHeaderRequired: any = false, headers = null) {
    return this.http.get(url, isHeaderRequired && headers);
  }
  put(url: string, data: any, isHeaderRequired: any = false, headers = null) {
    return this.http.put(url, data, isHeaderRequired && headers);
  }
  patch(url: string, isHeaderRequired: any = false, headers = null) {
    return this.http.patch(url, isHeaderRequired && headers);
  }
  delete(url: string, headers: any) {
    return this.http.delete(url, headers);
  }
}
