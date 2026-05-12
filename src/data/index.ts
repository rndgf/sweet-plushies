import plushiesData from './plushies.json';
import teamData from './team.json';
import type { Plushie, Member } from './types';

export const plushies = plushiesData as Plushie[];
export const team = teamData as Member[];

export type { Plushie, Member, PlushVariant, AvatarStyle } from './types';
