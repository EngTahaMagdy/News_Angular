import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  allNews=[]
  constructor(_NewsService:NewsService) { 


    _NewsService.getNews('eg','technology').subscribe( data => this.allNews=data.articles)

  }
  ngOnInit() {
  }

}
