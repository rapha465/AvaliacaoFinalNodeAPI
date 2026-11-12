import express from "express";
import ControllerClientes from "../controllers/clientes.js";

const router = express.Router();

// Buscar todos os clientes
router.get("/", ControllerClientes.Buscar);

// Buscar um cliente pelo ID
router.get("/:id", ControllerClientes.BuscarUm);

// Criar um cliente
router.post("/", ControllerClientes.Criar);

// Alterar um cliente
router.put("/:id", ControllerClientes.Alterar);

// Deletar um cliente
router.delete("/:id", ControllerClientes.Deletar);

export default router;
