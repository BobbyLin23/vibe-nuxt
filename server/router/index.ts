import { createPlanet, findPlanet, listPlanets, updatePlanet } from './planet'

export const router = {
  planet: {
    list: listPlanets,
    create: createPlanet,
    find: findPlanet,
    update: updatePlanet,
  },
}
