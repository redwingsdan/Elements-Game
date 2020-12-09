import { faFire, faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { AppElement } from './element';

export const air: AppElement = {id: 1, name: 'Air', icon: faWind, type: 'base', combinations: [], position: {x: 0, y: 0}};
export const water: AppElement =  {id: 2, name: 'Water', icon: faWater, type: 'base', combinations: [], position: {x: 0, y: 0}};
export const earth: AppElement = {id: 3, name: 'Earth', icon: faWind, type: 'base', combinations: [], position: {x: 0, y: 0}};
export const fire: AppElement = {id: 4, name: 'Fire', icon: faFire, type: 'base', combinations: [], position: {x: 0, y: 0}};
export const steam: AppElement = {id: 5, name: 'Steam', icon: faWind, type: 'compound', combinations: [{baseElement: water, secondaryElement: fire}, {baseElement: fire, secondaryElement: water}], position: {x: 0, y: 0}};
export const dust: AppElement = {id: 6, name: 'Dust', icon: faWind, type: 'compound', combinations: [{baseElement: air, secondaryElement: earth}, {baseElement: earth, secondaryElement: air}], position: {x: 0, y: 0}};
export const mist: AppElement = {id: 7, name: 'Mist', icon: faWind, type: 'compound', combinations: [{baseElement: air, secondaryElement: water}, {baseElement: water, secondaryElement: air}], position: {x: 0, y: 0}};
export const lava: AppElement = {id: 8, name: 'Lava', icon: faWind, type: 'compound', combinations: [{baseElement: earth, secondaryElement: fire}, {baseElement: fire, secondaryElement: earth}], position: {x: 0, y: 0}};
export const smoke: AppElement =  {id: 9, name: 'Smoke', icon: faWind, type: 'compound', combinations: [{baseElement: air, secondaryElement: fire}, {baseElement: fire, secondaryElement: air}], position: {x: 0, y: 0}};
export const mud: AppElement = {id: 10, name: 'Mud', icon: faWind, type: 'compound', combinations: [{baseElement: water, secondaryElement: earth}, {baseElement: earth, secondaryElement: water}], position: {x: 0, y: 0}};

export const allElements: AppElement[] = [
  air, water, earth, fire, steam, dust, mist, lava, smoke, mud
]
