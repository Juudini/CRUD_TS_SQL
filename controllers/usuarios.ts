import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();

    res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al obtener el usuario. Contactar con el administrador",
        });
    }
};

export const postUsuario = async (req: Request, res: Response) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al crear el usuario. Contactar con el administrador",
        });
    }
};

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: "No existe un usuario con el id " + id,
            });
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al actualizar el usuario. Contactar con el administrador",
        });
    }
};

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findOne({
            where: { id },
        });

        if (!usuario) {
            return res.status(404).json({
                msg: "No existe un usuario con el id " + id,
            });
        }

        await usuario.destroy();

        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error al eliminar el usuario",
        });
    }
};
