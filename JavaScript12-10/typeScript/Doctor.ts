export class Doctor{

    public id:number;
    public name:string;
    public specialization:string;

    constructor(id:number, name:string, specialization:string){

        this.id= id;
        this.name= name;
        this.specialization= specialization;
    }

    toString():string{
      
        return `${this.id},${this.name}, ${this.specialization}`;
        
    }

}