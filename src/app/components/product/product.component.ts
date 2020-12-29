import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Input() mode: boolean;

  public daysAgo(date): number {
    const dateCreated = new Date(date.replace('at', ''));
    const today = new Date();
    const days = Math.ceil((today.getTime() - dateCreated.getTime()) / (1000 * 3600 * 24));
    return days;
  }

}
