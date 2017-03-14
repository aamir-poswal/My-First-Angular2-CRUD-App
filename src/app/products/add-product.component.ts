import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './Product';

@Component({
    templateUrl: 'app/products/add-product.component.html'
})
export class AddProductComponent implements OnInit, OnDestroy {

    product: Product;
    submitted: boolean = false;
    sub: any;

    constructor(_route: ActivatedRoute, _router: Router) { }

    ngOnInit(): void {
        this.product = new Product(10, '', '', '', '', 10);
    }

    ngOnDestroy(): void {
       // this.sub.unsubscribe();
    }

    save(productForm: any) {
        this.submitted = true;
        if (!productForm.valid) {
            console.log('form is invalid' + productForm);
            alert('invalid form');
            return;
        }
        console.log('form is valid' + productForm);
        alert('form is valid and submitted');
    }

}