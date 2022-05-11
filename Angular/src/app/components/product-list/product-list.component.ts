import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  // templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-grid.component.html',

  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products! : Product[];
  currentCategoryId!: number;

  constructor(private productService: ProductService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts()

    });
  }

  listProducts(){

    const hasCategoryId : boolean = this.route.snapshot.paramMap.has('id')

    if(hasCategoryId && hasCategoryId != null){
      //get the "id" param string convert string to a number using the "+" symbol

      this.currentCategoryId = Number(this.route.snapshot.paramMap.get('id'))

    }
    else {
      //not category id available .. default to category id 1
      this.currentCategoryId = 1
    }
    //check if "id" parameter is available
      this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;

      }
    )

  }

}
