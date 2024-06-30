// Importa el módulo Jimp para manipulación de imágenes
import Jimp from 'jimp';
// Importa el módulo nanoid para generar IDs únicos
import { nanoid } from 'nanoid';
// Importa el módulo path para manejar rutas de archivos
import path from 'path';

// Obtén el directorio actual usando import.meta.dirname
const __dirname = import.meta.dirname;
// Genera una ruta de archivo única para guardar las imágenes
const pathFile = path.join(__dirname, `../public/images/${nanoid()}.jpeg`);

// Función para servir el archivo index.html al acceder a la ruta "/inicio"
const inicio = (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
};

// Función para mostrar una imagen procesada
const mostrarImagen = async (req, res) => {
    try {
        // Lee una imagen de una URL
        const image = await Jimp.read("https://picsum.photos/1000/1000");

        // Procesa la imagen: redimensiona, ajusta la calidad y convierte a escala de grises
        const buffer = await image
            .resize(500, 500)
            .quality(60)
            .greyscale()
            .getBufferAsync("image/jpeg");

        // Guarda la imagen procesada en el sistema de archivos
        await image.writeAsync(pathFile);
        
        // Configura el encabezado de respuesta y envía la imagen procesada
        res.header("Content-Type", "image/jpeg");
        res.send(buffer);

    } catch (error) {
        // Manejo de errores
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

// Función para guardar una imagen desde una URL proporcionada en la solicitud
const guardarImagen = async (req, res) => {
    try {
        // Obtén la URL de la imagen desde el cuerpo de la solicitud
        const url = req.body.url;
        // Lee la imagen desde la URL
        const image = await Jimp.read(url);
        // Procesa la imagen: redimensiona, ajusta la calidad y convierte a escala de grises
        const buffer = await image
            .resize(500, 500)
            .quality(60)
            .greyscale()
            .getBufferAsync("image/jpeg");

        // Guarda la imagen procesada en el sistema de archivos
        await image.writeAsync(pathFile);

        // Sirve el archivo volver.html como respuesta
        return res.sendFile(path.join(__dirname, '../public/volver.html'));

    } catch (error) {
        // Manejo de errores
        console.log(error);
        return res.status(500).json({ ok: false });
    }
};

// Exporta el controlador de imágenes con las funciones definidas
export const imageController = {
    inicio,
    mostrarImagen,
    guardarImagen
};
