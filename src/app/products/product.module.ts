
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail-guard.service';
import { ProductEditGuard } from './product-edit-guard.service';
import { ProductComponent } from './product.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/add', component: ProductComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
            { path: 'product/edit/:id', canActivate: [ProductEditGuard], component: ProductComponent }
        ])
    ],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe, ProductComponent],
    providers: [ProductService, ProductDetailGuard, ProductEditGuard]
})
export class ProductModule { }