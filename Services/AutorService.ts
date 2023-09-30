import { Autor } from "../Entities/Autor";
import { IAutorRepository } from "../Repositories/InterfaceAutorRepo";
// Importa otras interfaces según sea necesario.

export class AutorService {
    constructor(private autorRepository: IAutorRepository) {}

    agregarAutor(nombre: string, fechaNacimiento: Date): Autor {
        const autor = new Autor(Date.now(), nombre, fechaNacimiento);
        this.autorRepository.agregar(autor);
        return autor;
    }

    obtenerAutor(id: number): Autor | undefined {
        return this.autorRepository.obtenerPorId(id);
    }
}
