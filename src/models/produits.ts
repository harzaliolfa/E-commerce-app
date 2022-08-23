export class produits {
    description: string[];
    isInStock : boolean;
    startTime: string;
    endTime: string;
    image : string;
    
    constructor(public name: string) {
    this.isInStock = false;
    this.startTime= '',
     this.endTime = '',
     this.image= ''

    }}