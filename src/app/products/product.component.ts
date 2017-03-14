import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './Product';

@Component({
    templateUrl: 'app/products/product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy {

    product: Product;
    submitted: boolean = false;
    sub: any;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) { }

    ngOnInit(): void {
        this.product = new Product(10, '', '', '', '', 10);
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                if (id) {
                    this.getProduct(id);
                }
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    save(productForm: any) {
        this.submitted = true;
        if (!productForm.valid) {
            console.log('form is invalid' + productForm);
            return;
        }
        console.log('form is valid' + productForm);
    }
    onBack(): void {
        this._router.navigate(['./products']);
    }

}