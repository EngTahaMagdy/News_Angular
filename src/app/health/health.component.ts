import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import { HomeComponent } from '../home/home.component';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';
import * as $ from 'jquery';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  allNews=[]
  /*
  CodeC()
  {
   console.log( HomeComponent.prototype.getCountry);
  }
*/
  constructor(_NewsService:NewsService) { 

    //console.log( HomeComponent.prototype.getCountry.length);

    _NewsService.getNews('eg','health').subscribe( data => this.allNews=data.articles)

  }
  ngOnInit() {



  
  }

}
