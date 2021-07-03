import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  allNews=[]
  constructor(_NewsService:NewsService) { 


    _NewsService.getNews('eg','sports').subscribe( data => this.allNews=data.articles)

  }

  ngOnInit() {
  }

}
