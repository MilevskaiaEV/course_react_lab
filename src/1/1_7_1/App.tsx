// 1_7_1 Splitting a list in two 
/*
  В этом примере показан список всех людей.

  Измените его, чтобы последовательно вывести два отдельных списка: Химики и Все остальные. Как и ранее, вы можете определить, является ли человек химиком, проверив, что person.profession === 'chemist'.
*/

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export default function List() {
const chemList = people.filter(p => p.profession === 'chemist');
const ostList = people.filter(p => p.profession !== 'chemist');

    return (
         <article>
      <h1>Scientists</h1>

      <h2>Chemists</h2>
      <ul>
        {chemList.map(person => (
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>{' '}
              {person.profession}{' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {ostList.map(person => (
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>{' '}
              {person.profession}{' '}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
    );
}
