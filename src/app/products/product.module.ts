
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
        ])
    ],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    providers: [ProductService, ProductDetailGuard]
})
export class ProductModule { }