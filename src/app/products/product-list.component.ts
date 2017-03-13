import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    listFilter: string;
    errorMessage: string;
    clicked: boolean = false;



    products: IProduct[];

    constructor(private _productService: ProductService) {

    }

    hello(): void {
        console.log('clicked');
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => this.products = products
            , error => this.errorMessage = <any>error);
    }
}