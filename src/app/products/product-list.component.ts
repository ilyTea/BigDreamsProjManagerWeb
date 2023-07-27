import { Component } from "@angular/core";
import { IProduct } from "./IProduct";
import { RanduckService } from "../randuck.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent {
    pageTitle: string = "Product List";
    imageWidth: number = 200;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string = "";
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value)
        //console.log("In setter:", value)
    }

    filteredProducts: IProduct[ ] = [ ]

    products: IProduct[ ] = [
        {
            "productId": 1,
            "productName": "Golden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2023",
            "description": "15 gallon capacity cart",
            "price": 32.99,
            "rating": 4.2,
            "imageUrl": "assets/images/goldcart.png"
        },
        {
            "productId": 2,
            "productName": "Elevator",
            "productCode": "EVE-0007",
            "releaseDate": "February 23, 2023",
            "description": "Cool elevator",
            "price": 959.99,
            "rating": 3.1,
            "imageUrl": ""
        },
        {
            "productId": 3,
            "productName": "Wooden Spork",
            "productCode": "WDS-0012",
            "releaseDate": "July 24, 2023",
            "description": "insanely useful 15ml wooden table spork",
            "price": 6.99,
            "rating": 1.9,
            "imageUrl": ""
        },
        {
            "productId": 4,
            "productName": "Elevator",
            "productCode": "EVE-0007",
            "releaseDate": "February 23, 2023",
            "description": "Cool elevator",
            "price": 959.99,
            "rating": 3.1,
            "imageUrl": ""
        },
        {
            "productId": 5,
            "productName": "Wooden Spork",
            "productCode": "WDS-0012",
            "releaseDate": "July 24, 2023",
            "description": "insanely useful 15ml wooden table spork",
            "price": 6.99,
            "rating": 1.9,
            "imageUrl": ""
        },
        {
            "productId": 6,
            "productName": "Elevator",
            "productCode": "EVE-0007",
            "releaseDate": "February 23, 2023",
            "description": "Cool elevator",
            "price": 959.99,
            "rating": 3.1,
            "imageUrl": ""
        },
        {
            "productId": 7,
            "productName": "Wooden Spork",
            "productCode": "WDS-0012",
            "releaseDate": "July 24, 2023",
            "description": "insanely useful 15ml wooden table spork",
            "price": 6.99,
            "rating": 1.9,
            "imageUrl": ""
        },
        {
            "productId": 8,
            "productName": "Elevator",
            "productCode": "EVE-0007",
            "releaseDate": "February 23, 2023",
            "description": "Cool elevator",
            "price": 959.99,
            "rating": 3.1,
            "imageUrl": ""
        },
        {
            "productId": 9,
            "productName": "Wooden Spork",
            "productCode": "WDS-0012",
            "releaseDate": "July 24, 2023",
            "description": "insanely useful 15ml wooden table spork",
            "price": 6.99,
            "rating": 1.9,
            "imageUrl": ""
        }
    ];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    constructor(private randomDuck: RanduckService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("In OnInit")
        this.listFilter = ""
        this.readCreateData()
    }

    readCreateData() {
        
        for(let i=0; i<this.products.length; i++){
            if ( this.products[i].imageUrl.length < 1)
            this.randomDuck.get().subscribe(  
                data => {
                    if (data.url.includes())
                this.products[i].imageUrl = "https://cataas.com" + data.url
                console.log(this.products[i].imageUrl); //use i instead of 0
            }
            )
        }
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}