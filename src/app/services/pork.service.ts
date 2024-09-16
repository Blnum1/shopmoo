import { Injectable } from '@angular/core';
import { Pork } from '../shared/models/Pork';
import { sample_Porks } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class PorkService {

  constructor() { }

  getAll(): Pork[] {
    return sample_Porks;
  }

  getAllfoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(pork => pork.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllPorksByTag(tag: string): Pork[] {
    return sample_Porks.filter(pork => pork.tags?.includes(tag));
  }
}
