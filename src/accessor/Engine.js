class Engine {
    constructor(accessor){
        this.dao = accessor;
    }

    CreateTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS engine (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cylinders INTEGER,
                liters REAL
            )`;

        return this.dao.run(sql);
    }

    AddEngine(cylinders, liters) {
        const sql = `INSERT INTO engine (cylinders, liters) VALUES (?, ?)`;
        return this.dao.run(sql, [cylinders, liters])
    }

    UpdateEngine(engine) {
        const { id, cylinders, liters } = engine;
        const sql = `
            UPDATE engine 
            SET cylinders = ? 
                liters = ?
            WHERE id = ?`;
        return this.dao.run(sql, [cylinders, id]);
    }

    DeleteEngine(id) {
        const sql = `DELETE FROM engine WHERE id = ?`;
        return this.dao.run(sql, [id])
    }

    GetEngineByID(id) {
        const sql = `SELECT * FROM engine WHERE id = ?`
        return this.dao.get(sql, [id])
    }

    GetAllEngines() {
        const sql = `SELECT * FROM engine`;
        return this.dao.all(sql)
    }
}

module.exports = Engine;