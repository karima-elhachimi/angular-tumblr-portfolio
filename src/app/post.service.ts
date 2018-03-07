import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PortfolioItem } from './portfolio-item';
import { TumblrConnections } from './tumblr-connections';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';




@Injectable()
export class PostService {

  private conn: TumblrConnections = new TumblrConnections();

  constructor (private http: HttpClient ) { }

  getPhotos() {
    return this.http.get(this.conn.url)
      .map(response => {
        return (<PortfolioItem[]>response)['response']['posts'];
      });
  }

}
