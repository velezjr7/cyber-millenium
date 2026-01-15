export interface Product {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
  imagenes: string[];
  specs: string[];
  compatible?: string[];
}

export enum Tab {
  INICIO = "INICIO",
  PRODUCTOS = "PRODUCTOS",
  CONTACTO = "CONTACTO",
}
