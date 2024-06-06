// import antiguo
//const { envs } = require("./config/env.js");
//const { startServer } = require("./server/server");

// import module
import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

//funcion agnostica autoconvocada
// agnostica porque no tiene nombre
// autoconvocada porque se auto ejecuta al final con los ()
const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

(async () => {
  main();
})();
