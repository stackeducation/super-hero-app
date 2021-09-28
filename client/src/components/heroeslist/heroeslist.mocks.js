import { BrowserRouter } from 'react-router-dom';
import HeroesList from './heroeslist';

const mockHeroes = [
  {
      "id": 1,
      "name": "Captain America",
      "realname": "Steve Rogers",
      "firstappearance": "Captain America Comics #1",
      "slug": "captain-america",
      "snapped": false,
      "createdAt": "2021-09-18T20:40:13.000Z",
      "updatedAt": "2021-09-18T20:40:13.000Z",
      "deletedAt": null
  },
  {
      "id": 2,
      "name": "Spider-Man",
      "realname": "Peter Parker",
      "firstappearance": "Amazing Fantasy #15",
      "slug": "spider-man",
      "snapped": true,
      "createdAt": "2021-09-18T20:40:13.000Z",
      "updatedAt": "2021-09-18T20:40:14.000Z",
      "deletedAt": null
  }
]

const mockHeroesList = () => {
  return (
    <BrowserRouter>
      <HeroesList heroes={mockHeroes}/>
    </BrowserRouter>
  )
}

export default mockHeroesList