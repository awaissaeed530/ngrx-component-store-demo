import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './common/common.types';

export class InMemService implements InMemoryDbService {
  createDb() {
    let products: Product[] = [
      { id: '1', name: 'Folio', price: 400, quantity: 13 },
      { id: '2', name: 'Elitebook', price: 300, quantity: 17 },
      { id: '3', name: 'MacBook 17"', price: 770, quantity: 26 },
      { id: '4', name: 'Dell XPS 13', price: 500, quantity: 54 }
    ];
    return { products };
  }
}
