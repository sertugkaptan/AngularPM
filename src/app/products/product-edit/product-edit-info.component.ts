import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;

  errorMessage = '';
  product:Product;
  constructor(private route: ActivatedRoute, private service: ProductService) { 
    this.product = service.initializeProduct()
  }

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data=>{
      this.product = data['resolvedData'].product;
    });
    
  }
}
