// var arr1: Array<Cars> = [];
class Cars{
    group:string;
    name: string;
    color: string;
    consumption : number;
    image : string;
    

    constructor(group:string ,name: string, color:string , consumption : number,image : string) { 
        this.group = group;
        this.name = name;
        this.color = color;
        this.consumption= consumption;
        this.image= image;
        // arr1.push(this) // toto sluzi nato aby si pushol tie persony do 1.array
    }
   Infos(){
    return`
    <div class="col-lg-4 col-md-6 col-sm-12 g-3 " id="idcard" >
    <div class="card" style="width: 18rem;">
    <div class="upper">
        <div class="right">
            <button type="button" class="btn btn-success p-1Task">${this.group}</button>
        </div>
        <div class="left">
            <i class="fas fa-align-justify"></i>
            <i class="fas fa-bookmark"></i>
        </div>
    </div>
    <img src="${this.image}" class="card-img-top" width=230px height=200px alt="...">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">Average consumption:${this.consumption} l/km.</p>
        <hr>
        <p class="card-text">Color : ${this.color}</p>
        
        <hr>
        <div class="down">
            <a href="#" class="btn btn-success" id="downl">Buy</a>
            
        </div>
    
    </div>
    </div>
    </div>`;
   }
}
let BMW  = new Cars ("Car","BMW","white", 9.8 ,"bmw.jpeg");
let MERCEDES = new Cars ("Car","Mercedes","black",8.7,"mercedes.jpeg");
let AUDI = new Cars ("Car","Audi","white," , 7.9 , "audi.jpeg");


(document.getElementById("row") as HTMLElement).innerHTML  += BMW.Infos();
(document.getElementById("row") as HTMLElement).innerHTML  += MERCEDES.Infos();
(document.getElementById("row") as HTMLElement).innerHTML  += AUDI.Infos();

let cycles:Array<Cars> = [];
class Motorcycles extends Cars {
     type : string;
     constructor (group:string, name: string, color: string,consumption: number,image:string , type: string){
        super(group,name,color,consumption,image);
        this.type = type ;
        cycles.push(this)
        
}
Infos(){
    return`
    <div class="col-lg-4 col-md-6 col-sm-12 g-3 " id="idcard" >
    <div class="card" style="width: 18rem;">
    <div class="upper">
        <div class="right">
            <button type="button" class="btn btn-success p-1Task">${this.group}</button>
        </div>
        <div class="left">
            <i class="fas fa-align-justify"></i>
            <i class="fas fa-bookmark"></i>
        </div>
    </div>
    <img src="${this.image}" class="card-img-top" width=230px height=200px alt="...">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">Average consumption:${this.consumption} l/km.</p>
        <hr>
        <p class="card-text">This motorcycle is: ${this.type}</p>
         <hr>
        <p class="card-text">Color : ${this.color}</p>
        
        <hr>
        <div class="down">
            <a href="#" class="btn btn-success" id="downl">Buy</a>
            
        </div>
    
    </div>
    </div>
    </div>`;
   }
}
new Motorcycles("Moto","Harley", "black", 4.3, 'd.jpeg',  "Sporty");
new Motorcycles("Moto","Bmw", "black", 4.3, 'b.jpeg',  "Luxus");
new Motorcycles("Moto","Honda", "black", 4.3, 'h.jpeg',  "Lifestyle");


for (let i in cycles){
(document.getElementById("cycles")as HTMLElement).innerHTML  += cycles[i].Infos();
}