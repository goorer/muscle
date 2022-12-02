export type Menu = {
  lift: string;
  resistance: number;
  count: number;
  sets: number;
};

export type Report = {
  id: number;
  date: string;
  menus: Menu[];
};
