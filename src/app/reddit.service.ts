import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Parent } from './reddit-interface';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get<Parent>('https://www.reddit.com/r/aww/.json');
  }


}
