import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/Product';

export const BeginProductListAction = createAction('[ProductList] - Begin Get ProductList');

export const GetProductList = createAction(
    '[Product List] Get ProductList',
    props<{ payload: Product[]}>()
);

export const ErrorProductListAction = createAction('[ProductList] - Error', props<Error>());
