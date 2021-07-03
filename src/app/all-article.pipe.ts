import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allArticle'
})
export class AllArticlePipe implements PipeTransform {

  transform(data:any, len:number): any {
   

    if(data != '')
    {
      
    return data.substring(0,len);
    }
  }

}
