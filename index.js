const http = require("http");

const chalk = require("chalk");

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
    console.log("se esta logrando");
    const user = {
        name: "Valentina Pedroza",
        message: "se pudo",
    };
    res.write(JSON.stringify(user));
    res.end();
})

    // Imprime el mensaje de inicio en la consola con formato en verde
server.listen(port, () => {
    const url = `http://${host}:${port}`;
    const coloredMessage = chalk.green(`Servidor corriendo en ${url}`);
    console.log(coloredMessage);
  });
  