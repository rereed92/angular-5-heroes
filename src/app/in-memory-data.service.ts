import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 'mr-nice', name: 'Mr Nice', power: '', alterEgo: '' },
      { id: 'narco', name: 'Narco', power: '', alterEgo: '' },
      { id: 'bombasto', name: 'Bombasto', power: '', alterEgo: '' },
      { id: 'celeritas', name: 'Celeritas', power: '', alterEgo: '' },
      { id: 'magenta', name: 'Magneta', power: '', alterEgo: '' },
      { id: 'rubberman', name: 'RubberMan', power: '', alterEgo: '' },
      { id: 'dynama', name: 'Dynama', power: '', alterEgo: '' },
      { id: 'dr-iq', name: 'Dr IQ', power: '', alterEgo: '' },
      { id: 'magma', name: 'Magma', power: '', alterEgo: '' },
      { id: 'tornado', name: 'Tornado', power: '', alterEgo: '' }
    ];

    const powers = [
      'Really Smart', 
      'Super Flexible',
      'Super Hot', 
      'Weather Changer'
    ];

    const sortOptions = [
      { id: 'name-asc', value: 'Name - Ascending'},
      { id: 'name-desc', value: 'Name - Descending'},
      { id: 'id-asc', value: 'ID - Ascending'},
      { id: 'id-desc', value: 'ID - Descending'}
    ];

    return {heroes, powers, sortOptions};
  }
}