import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  constructor() { }
  contentLoaded:boolean=false;
  ngOnInit() {
    setInterval(() => {
      this.contentLoaded = true;
    },3000)
  }

  dogimg:string="./assets/img/dog.jpg"

}
