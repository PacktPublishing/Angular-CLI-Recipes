import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}
