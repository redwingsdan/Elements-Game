import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface AppElement {
	id: number;
	name: string;
	icon: IconDefinition;
	type: string;
	combinations: Combination[];
	position: Position;
}

export interface Combination {
	baseElement: AppElement;
	secondaryElement: AppElement;
}

export interface Position {
	x: number;
	y: number;
}
