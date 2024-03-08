import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductListResolver } from './product-list-resolver';
import { ProductEditGuard } from './product-edit/product-edit.guard';

const ROUTES: any[] = [
  {
    path: '', component: ProductListComponent, resolve: { resolvedData: ProductListResolver }
  },
  { path: ':id', component: ProductDetailComponent, resolve: { resolvedData: ProductResolver } },
  {
    path: ':id/edit',
    component: ProductEditComponent,
    canDeactivate: [ProductEditGuard],
    resolve: { resolvedData: ProductResolver },
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: ProductEditInfoComponent },
      { path: 'tags', component: ProductEditTagsComponent }
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
