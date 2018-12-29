import { Injectable } from '@angular/core';
import * as csv from 'csvtojson';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }

  private baseURL: string = '../../datasources/'

  public async readCSV(fileName): Promise<any> {
    return await csv().fromFile(this.baseURL.concat(fileName));
  }
}
