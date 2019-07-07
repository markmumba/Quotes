export class Quote {
    showDescription: boolean;
// tslint:disable-next-line: typedef-whitespace
    constructor(public id: number, public name: string, public author : string , public completeDate: Date){
      this.showDescription = false;
    }
  }
