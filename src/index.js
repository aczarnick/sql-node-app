const DataAccessor = require("./accessor/DataAccessor");
const Engine = require("./accessor/Engine");

function Main() {
    const dao = new DataAccessor("./db/test.db");
    const engine = new Engine(dao);

    engine.CreateTable()
        .then(() => engine.AddEngine(8, 5.3))
        .then((result) => {
            console.log(result);
            return engine.GetAllEngines();
        })
        .then((results) => {
            console.log(results);
        })
        .catch((err) => {
            console.error(`Error: ${err.message}`);
        })
}

Main();