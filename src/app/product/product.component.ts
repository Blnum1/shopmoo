import { Component, OnInit } from '@angular/core';
import { Pork } from '../shared/models/Pork';
import { PorkService } from '../services/pork.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  // ใช้ styleUrls แทน styleUrl
})
export class ProductComponent implements OnInit {  // implements OnInit

  porks:Pork[] = [];

  constructor(private porkService: PorkService, activatedRoute:ActivatedRoute) { 
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.porks = this.porkService.getAllfoodBySearchTerm(params.searchTerm);
      else 
        this.porks = porkService.getAll();
    })
  }

  ngOnInit(): void {
    this.porks = this.porkService.getAll();  // ย้ายการกำหนดค่ามาไว้ใน ngOnInit
  }

}
