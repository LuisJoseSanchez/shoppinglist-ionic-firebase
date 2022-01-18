import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: Observable<Item[]>;
  
  constructor(
    private itemService: ItemService,
    private router: Router
  ) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() { }

  addItem() {
    this.router.navigateByUrl('/create-item');
  }
}
