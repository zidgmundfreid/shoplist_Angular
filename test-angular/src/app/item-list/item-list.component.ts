import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  visibility: boolean = false;
  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.itemsService.onToggle(id)
    
  }

  applyAll() {

    this.itemsService.items.forEach(function(e){
      e.checked = true
    })
  
 
  }

  resetAll() {
    this.itemsService.items.forEach(function(e){
      e.checked = false
    })
 
  }

}
