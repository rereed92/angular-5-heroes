import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 'mr-nice', name: 'Mr Nice', power: 'Super Flexible', alterEgo: 'mn' },
      { id: 'narco', name: 'Narco', power: 'Really Smart', alterEgo: 'narc' },
      { id: 'bombasto', name: 'Bombasto', power: 'Weather Changer', alterEgo: 'bomb' },
      { id: 'celeritas', name: 'Celeritas', power: 'Super Hot', alterEgo: 'c' },
      { id: 'magenta', name: 'Magneta', power: 'Really Smart', alterEgo: 'maggy' },
      { id: 'rubberman', name: 'RubberMan', power: 'Super Flexible', alterEgo: 'rubber' },
      { id: 'dynama', name: 'Dynama', power: 'Weather Changer', alterEgo: 'dy' },
      { id: 'dr-iq', name: 'Dr IQ', power: 'Really Smart', alterEgo: 'smart' },
      { id: 'magma', name: 'Magma', power: 'Super Hot', alterEgo: 'hot' },
      { id: 'tornado', name: 'Tornado', power: 'Weather Changer', alterEgo: 'torn' }
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