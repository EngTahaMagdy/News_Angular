import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {



  
  
  article:object={};


  id:number;
  //title:any;
  //urlToImage:string='';
 // description:string='';
 // content:any;
  constructor( private _ActivatedRoute:ActivatedRoute,private _NewsService:NewsService) {

    this.id= parseInt( _ActivatedRoute.snapshot.paramMap.get('id'));
   this._NewsService.getNews('eg','general').subscribe(data => this.article= data.articles[this.id]);
   }

  ngOnInit() {
  }




}
