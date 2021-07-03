import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {


  allNews=[]
  constructor(_NewsService:NewsService) { 


    _NewsService.getNews('eg','business').subscribe( data => this.allNews=data.articles)

  }
  ngOnInit() {
  }

}
