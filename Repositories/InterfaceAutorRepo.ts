import { Autor } from "../Entities/Autor";

export interface IAutorRepository {
    agregar(autor: Autor): void;
    obtenerPorId(id: number): Autor | undefined;
}