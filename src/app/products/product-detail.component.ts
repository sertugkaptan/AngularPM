import { Component, OnInit } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage?= '';

  constructor(private route: ActivatedRoute,private service:ProductService) { 
    this.product = service.initializeProduct();
  }

  ngOnInit(): void {
    const resolvedData:ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    if(resolvedData.product!=null){
      this.onProductRetrieved(resolvedData.product);
    }else{
      this.pageTitle = this.errorMessage!;
    }
  }


  onProductRetrieved(product: Product|undefined): void {
    if(product != null){
      this.product = product;
    }else{
      this.pageTitle= 'noProductFound'
    }

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
