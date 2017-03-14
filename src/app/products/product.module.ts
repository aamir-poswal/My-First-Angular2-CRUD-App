
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { AddProductComponent } from './add-product.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/add', component: AddProductComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
        ])
    ],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe, AddProductComponent],
    providers: [ProductService, ProductDetailGuard]
})
export class ProductModule { }