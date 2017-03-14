import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './product';
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

    products: Product[];

    constructor(public _route: ActivatedRoute, public _router: Router, private _productService: ProductService) {
    }

    hello(): void {
        console.log('clicked');
        this._router.navigate(['product/add']);
    }

    remove(id: number): void {
        console.log('inside remove and id = ' + id);
        // get index of object with id:37
        let removeIndex = this.products.map(function (item) { return item.id; }).indexOf(id);
        // remove object
        this.products.splice(removeIndex, 1);
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => this.products = products
            , error => this.errorMessage = <any>error);
    }


}