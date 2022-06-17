import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  generateGroups<T extends { index?: number }>(list: T[], chunkSize: number) {
    let groups: T[][] = [];
    let chunk: T[] = [];

    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      item.index = i + 1;
      chunk.push(item);

      if (chunk.length == 2 || i == list.length - 1) {
        groups.push(chunk);
        chunk = [];
      }
    }

    return groups;
  }
}
