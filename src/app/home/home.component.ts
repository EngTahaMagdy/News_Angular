import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  countriesHome=[];
  allNews=[];
  title:string='';
  itemSearch:string='';
  
  constructor(private _NewsService:NewsService ,private _router:Router) { 

    this.countriesHome=_NewsService.countriesCode;
   _NewsService.getNews( 'eg','general').subscribe( data => this.allNews=data.articles)

 
     
   }





   artNum(i)
   {
    this._router.navigate(['article',i])
   }









   
  getCountry(c)
  {
    this._NewsService.getNews( c,'general').subscribe( data => this.allNews=data.articles)
  };
  
  





  ngOnInit() {
  }

}
