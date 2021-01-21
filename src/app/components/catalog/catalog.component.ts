import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalogSelected: Catalog;
  currentIndex: number;
  slideAtive = false;
  slideDuration = 3000;
  slideTimer = null;
  catalogs: Array<Catalog> = [
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg'
    },
    {
      thumb: '/assets/images/thumb/white-light-thumb.jpeg',
      image: '/assets/images/white-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/pink-light-thumb.jpeg',
      image: '/assets/images/pink-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg',
    }
  ];

  constructor() { }

  ngOnInit() {
   this.currentIndex = 0;
   this.catalogSelected = this.catalogs[this.currentIndex];
  }

  selectedCatalog(index: number) {
    this.catalogSelected = this.catalogs[index];
  }

  previousClick() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.catalogs.length - 1;
    this.selectedCatalog(this.currentIndex);
  }

  nextClick() {
    this.currentIndex = this.currentIndex < this.catalogs.length -1 ? this.currentIndex + 1 : 0;
    this.selectedCatalog(this.currentIndex);
  }

  slideChange(checked) {
    this.slideAtive = checked;
    if(this.slideAtive){
      this.slideTimer = setInterval(()=>{
        this.nextClick();
      }, this.slideDuration);
    } else {
      this.resetSlideTimer();
    }
  }

  resetSlideTimer() {
    clearInterval(this.slideTimer);
  }
}


export class Catalog {
  thumb: string;
  image: string;
}
