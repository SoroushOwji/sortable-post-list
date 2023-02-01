export enum Direction {
  Up,
  Down,
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TimeTravel = {
  order: number[];
  text: string;
  id: number;
};
