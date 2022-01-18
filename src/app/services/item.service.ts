import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firestore: Firestore) { }

  public async addItem(item: Item) {
    await addDoc(collection(this.firestore, 'items'), item);
  }

  public getItems(): Observable<Item[]> {
    return collectionData(
        collection(this.firestore, 'items'), {idField: 'itemId'}
      ) as Observable<Item[]>;
  }
}
