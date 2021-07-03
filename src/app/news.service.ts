import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor( private _HttpClient:HttpClient) { }


countriesCode=['eg' ,'us', 'ca' ,'fr','ar'];








  getNews( country,category):Observable<any>
  {
return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&apiKey=8eef5201d03941e6ab84e6c84ccc00ab');
  }
}
