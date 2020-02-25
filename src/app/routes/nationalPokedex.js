const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/', (req, res) => {
    res.send('hola mas pruebas adad');
  });

  app.get('/api/national-pokedex', (req, res) => {
    //const results = await connection.query('SELECT * FROM pokemons');
    //console.log(results);
    connection.query('SELECT * FROM pokemons', (err, result) => {
      res.json( {result});
    });
  });

  app.post('/api/national-pokedex/add-pokemon', (req, res) => {
    const { name } = req.body;
    const user_id = 1;
    console.log(name);
    connection.query('INSERT INTO pokemons SET ? ',
      {
        name,
        user_id
      },
      (err, result) => {
        console.log('todo bien');
        res.send('enviar aglo');
      });
  });
};
