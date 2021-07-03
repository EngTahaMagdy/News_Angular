import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service'


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  allNews=[]
  constructor(_NewsService:NewsService) { 


    _NewsService.getNews('eg','science').subscribe( data => this.allNews=data.articles)

  }


  ngOnInit() {
  }

}
