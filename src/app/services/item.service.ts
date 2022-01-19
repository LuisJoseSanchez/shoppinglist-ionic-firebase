import { Injectable } from '@angular/core';
import {
  Firestore, collectionData, deleteDoc, doc, addDoc, collection, updateDoc
} from '@angular/fire/firestore';
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

  async deleteItem(id: string) {
    await deleteDoc(doc(this.firestore, `items/${id}`));
  }

  async updateItem(item: Item) {
    const docRef = doc(this.firestore, `notes/${item.itemId}`);
    await updateDoc(
      docRef, {name: item.name, quantity: item.quantity, imageUrl: item.imageUrl}
    );
  }
  
}
