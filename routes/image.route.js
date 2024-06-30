// Importa el controlador de imágenes desde el archivo image.controller.js
import { imageController } from '../controllers/image.controller.js';
// Importa el Router de express para crear rutas
import { Router } from 'express';

// Crea una nueva instancia del Router
const router = Router();

// Define una ruta GET para "/inicio" que utiliza el método inicio del controlador de imágenes
router.get("/inicio", imageController.inicio);

// Define una ruta POST para "/image" que utiliza el método guardarImagen del controlador de imágenes
router.post("/image", imageController.guardarImagen);

// Define una ruta GET para "/mostrar" que utiliza el método mostrarImagen del controlador de imágenes
router.get("/mostrar", imageController.mostrarImagen);

// Exporta el router como el valor por defecto del módulo
export default router;
