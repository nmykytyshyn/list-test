import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ProductListActions from './product-list.actions';
import { ListTestService } from '../../services/list-test.service';
import { Product } from '../../models/Product';

@Injectable()
export class ProductListEffects {
    constructor(private listTestService: ListTestService, private action$: Actions) {}

    GetProductLists$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ProductListActions.BeginProductListAction),
      mergeMap(() =>
        this.listTestService.getList().pipe(
          map((data: any) => {
            return ProductListActions.GetProductList({ payload: data.products });
          }),
          catchError((error: Error) => {
            return of(ProductListActions.ErrorProductListAction(error));
          })
        )
      )
    )
  );
}
