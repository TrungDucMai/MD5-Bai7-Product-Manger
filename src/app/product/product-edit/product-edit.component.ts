import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm : any;
  id?: number;

  constructor(private productService : ProductService,
             private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product:any = this.getProduct(this. id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });

  }
  ngOnInit(): void {
  }
    getProduct(id:number){
    return this.productService.findById(id)
    }
  updateProduct(id: any) {
      const product= this.productForm?.value;
      this.productService.updateProduct(id, product);
      alert("Cap nhap thanh cong")
  }
}
