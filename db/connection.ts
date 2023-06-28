import { Sequelize } from "sequelize";

const db = new Sequelize("crudb", "root", "coder", {
    host: "localhost",
    dialect: "mysql",
});

export default db;
