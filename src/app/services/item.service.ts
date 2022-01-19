import { Injectable } from '@angular/core';
import {
  Firestore, collectionData, deleteDoc, doc, addDoc, collection, updateDoc, docData
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

  getItems(): Observable<Item[]> {
    const collectionRef = collection(this.firestore, 'items');
    return collectionData(collectionRef, {idField: 'itemId'}) as Observable<Item[]>;
  }

  getItem(id: string): Observable<Item> {
    const docRef = doc(this.firestore, `items/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<Item>;
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
