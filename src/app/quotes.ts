export class Quote {
    showDescription: boolean;
// tslint:disable-next-line: typedef-whitespace
// tslint:disable-next-line: max-line-length
    constructor(public id: number, public name: string, public author: string , public upvote: number  , public downvote: number, public completeDate: Date) {
      this.showDescription = false;
    }
  }
