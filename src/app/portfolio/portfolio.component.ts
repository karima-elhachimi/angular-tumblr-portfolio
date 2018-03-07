import { Component, OnInit, AfterContentInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';
import { PostService } from '../post.service';
import { NgZone } from '@angular/core';
import { Masonry } from 'ng-masonry-grid';




//[style.width.height]="item.photos[0].alt_sizes[generateRdmNumberFrom0to3()].height"

//[style.width.%]="item.photos[0].alt_sizes[generateRdmNumberFrom0to3()].width > 400 ? 40 : 30"
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', '../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class PortfolioComponent implements OnInit, AfterContentInit {

  generalHolder: any[];
  portfolioItems: PortfolioItem[];

  selectedItem: any;



  masonryOptions = {
    resize: true,
    transitionDuration: 0
  };



  _masonry: Masonry;
  constructor(private postService: PostService, public zone: NgZone ) { }

  ngOnInit() {
    this.postService.getPhotos()
      .subscribe(posts => {
        console.log(2, posts);
        this.portfolioItems = <PortfolioItem[]>posts;
      });
  }

  ngAfterContentInit() {
   this.zone.run(() => {});
  }

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  showPosts() {
    if (this.portfolioItems) {
     for (const item of this.portfolioItems) {
       console.log(item);
     }
    }
  }

  generateRdmNumberFrom0to3() {
    return Math.floor(Math.random() * 4);
  }

  setSelectedItem(item) {
    this.selectedItem = item;
  }













}
