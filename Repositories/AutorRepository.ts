import { Autor } from "../Entities/Autor";
import { IAutorRepository } from "../Repositories/InterfaceAutorRepo";


export class AutorRepository implements IAutorRepository {
    private autores: Autor[] = [];

    agregar(autor: Autor): void {
        this.autores.push(autor);
    }

    obtenerPorId(id: number): Autor | undefined {
        return this.autores.find(a => a.id === id);
    }
}

///////////


