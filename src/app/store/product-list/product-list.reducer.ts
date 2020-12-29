import { Action, createReducer, on } from '@ngrx/store';
import * as ProductListActions from './product-list.actions';
import { Product } from '../../models/Product';

export class ProductListState {
    ProductList: Array<Product>;
    ProductListError: Error;
  }

const initializeState = (): ProductListState => {
    return { ProductList: Array<Product>(), ProductListError: null };
  };

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(ProductListActions.BeginProductListAction, state => state),

  on(ProductListActions.GetProductList, (state: ProductListState, { payload }) => {
    return { ...state, ProductList: payload, ProductListError: null };
  }),
  on(ProductListActions.ErrorProductListAction, (state: ProductListState, error: Error) => {
    console.error(error);
    return { ...state, ProductListError: error };
  })
);

export function productListReducer(
  state: ProductListState | undefined,
  action: Action
): ProductListState {
  return reducer(state, action);
}
