export type PlushVariant =
  | 'bunny'
  | 'bear'
  | 'cat'
  | 'fox'
  | 'panda'
  | 'unicorn'
  | 'frog'
  | 'sheep';

export type AvatarStyle =
  | 'bob-blonde'
  | 'long-brown'
  | 'pigtails-black'
  | 'bun-red'
  | 'curly-pink'
  | 'short-brown'
  | 'long-blonde'
  | 'pigtails-brown'
  | 'bob-black'
  | 'curly-brown'
  | 'bun-blonde'
  | 'long-black';

export interface Plushie {
  name: string;
  price: string;
  maker: string;
  variant: PlushVariant;
  color: string;
  accent: string;
  bg: string;
}

export interface Member {
  name: string;
  trait: string;
  bio: string;
  fav: string;
  classe: string;
  style: AvatarStyle;
  skin: string;
  bg: string;
}
