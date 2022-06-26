  export interface Hero {
      id: number;
      name: string;
      descripcion: string; 
      poder: string;
      universo: string; 
  }

  export interface RootObject {
      Heroes: Hero[];
  }