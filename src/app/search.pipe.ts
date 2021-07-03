import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(news:any, item:string): any {

    if(item==''||item==undefined)
    {
      return news;
    }
    else{

      return news.filter(function(news)
      {
        return news.title.toLowerCase().includes(item.toLowerCase());
    
      })
    

    }



    



  }

}
