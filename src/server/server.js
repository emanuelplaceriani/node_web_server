const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express(); //ejecuto express

  //para poder usar middlewares de express se usa '.use'
  app.use(express.static(public_path)); //contenido estatico que ponemos disponibles

  //Escuchar Todas las Rutas '*'
  // Cuando nos pidan una solicitud get, se hace un request/resolve en el cual se pasa el valor de path.join (que es una consulta al archivo index.html)
  // y eso se lo guarda en la const indexPath
  // luego en el resolve se envia el archivo cargado en indexPath
  app.get("*", (req, res) => {
    const indexPath = path.join(
      _dirname + `../../../${public_path}/index.html`
    );
    //ante el pedido de cualquier url devolvemos el index path o sea index.html
    res.sendFile(indexPath);
  });

  app.listen(port),
    () => {
      console.log(`Escuchando en el puerto ${port}`);
    };
};

module.exports = {
  startServer,
};
