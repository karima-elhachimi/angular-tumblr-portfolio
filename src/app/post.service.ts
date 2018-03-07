import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PortfolioItem } from './portfolio-item';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';




@Injectable()
export class PostService {

  private tumblrApiUrl = `https://api.tumblr.com/v2/blog/yvalgesto.tumblr.com/`;
  private apiKey = `MvpjntcaeX2Y00hgO3FD66OLyVgQru9DDbn5bIcfseKf1CWwSW`;
  private photoPosts = `posts/photo?filer=text&api_key=${this.apiKey}`;
  private getPhotoPostsUrl = this.tumblrApiUrl + this.photoPosts;

  constructor (private http: HttpClient ) { }

  getPhotos() {
    return this.http.get(this.getPhotoPostsUrl)
      .map(response => {
        return (<PortfolioItem[]>response)['response']['posts'];
      });
  }

}
