import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AllArticlePipe } from './all-article.pipe';



const appRoutes:Routes=[
  {path:'',component:HomeComponent},

  {path:'home',component:HomeComponent},
  {path:'sports',component:SportsComponent},
  {path:'business',component:BusinessComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'article/:id' ,component:ArticleDetailsComponent}


]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    BusinessComponent,
    TechnologyComponent,
    ScienceComponent,
    HealthComponent,
    NavbarComponent,
    FooterComponent,
    SearchPipe,
    ArticleDetailsComponent,
    AllArticlePipe,
    AllArticlePipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
