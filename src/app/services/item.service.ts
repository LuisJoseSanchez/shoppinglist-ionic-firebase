import { Injectable } from '@angular/core';
import {
  Firestore, collectionData, deleteDoc, doc, addDoc, collection, docData, setDoc
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
    return docData(docRef, { idField: 'itemId' }) as Observable<Item>;
  }

  async deleteItem(id: string) {
    await deleteDoc(doc(this.firestore, `items/${id}`));
  }

  async updateItem(item: Item) {
    await setDoc(doc(this.firestore, `items/${item.itemId}`), item);
  }
  
}
