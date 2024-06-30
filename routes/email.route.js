// Importa el controlador de correos electrónicos desde el archivo email.controller.js
import { emailController } from '../controllers/email.controller.js';
// Importa el Router de express para crear rutas
import { Router } from 'express';

// Crea una nueva instancia del Router
const router = Router();

// Define una ruta GET para "/email/send" que utiliza el método enviarMail del controlador de correos electrónicos
router.get("/email/send", emailController.enviarMail);

// Exporta el router como el valor por defecto del módulo
export default router;