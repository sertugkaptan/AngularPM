import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product, ProductListResolved, ProductResolved } from "./product";
import { Observable, catchError, map, of } from "rxjs";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root'
})
export class ProductListResolver implements Resolve<ProductListResolved> {
    constructor(private productService: ProductService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductListResolved | Observable<ProductListResolved> | Promise<ProductListResolved> {
        return this.productService.getProducts().pipe(
            map(product => ({ product: product })),
            catchError(error => {
                const message = `retrieval error ${error}`;
                console.error(message);
                return of({ product: null, error: message })
            })
        );
    }
    


}