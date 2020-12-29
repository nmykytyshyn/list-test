import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ProductListActions from '../../store/product-list/product-list.actions';
import { Product } from '../../models/Product';
import { ProductListState } from '../../store/product-list/product-list.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
    public productList$: Observable<ProductListState>;
    public ProductListSubscription: Subscription;
    public products: Product[];
    public listMode = true;

  constructor(private store: Store<{ productList: ProductListState }>) {
    this.productList$ = store.pipe(select('productList'));
  }

  public ngOnInit(): void {
    this.ProductListSubscription = this.productList$
    .pipe(
      map(data => {
        this.products = data.ProductList;
      })
    )
    .subscribe();

    this.store.dispatch(ProductListActions.BeginProductListAction());
  }

  public ngOnDestroy(): void {
    if (this.ProductListSubscription) {
      this.ProductListSubscription.unsubscribe();
    }
  }

  public switchMode(): void {
    this.listMode = !this.listMode;
  }

}
