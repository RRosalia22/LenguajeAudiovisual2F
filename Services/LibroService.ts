import { Libro } from "../Entities/Libro";
import { LibroRepository } from "../Repositories/LibroRepository";
import { AutorService } from "./AutorService";
import { ErrorUtils } from "../Utils/Error";


export class LibroService {
    constructor(private libroRepository: LibroRepository, private autorService: AutorService, private error: ErrorUtils) {}

    agregarLibro(titulo: string, autorId: number): Libro {
        const autor = this.autorService.obtenerAutor(autorId);
        if (!autor) throw new Error("Autor no encontrado.");

        const libro = new Libro(Date.now(), titulo, autor);
        this.libroRepository.agregar(libro);
        return libro;
    }

    obtenerLibro(id: number): Libro | undefined {
        const obtenido = this.libroRepository.obtenerPorId(id);
        if(obtenido){
            return obtenido
        }else{
            return this.error;
        }
    }
}
