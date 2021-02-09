const dataMapper = require('../dataMapper.js');

mainController = {
    homePage: (req, res) => {
        dataMapper.getAllPokemon((err, data) => {
            if (err) {
                console.error(err);
                response.status(500).send(err);
            } else {
                const pokemons = data.rows;
                res.render('pokedex',{
                    pokemons
                });
            }
        });
        
    },

    pokemonPage:(req, res)=>{
        const targetNum = req.params.numero;
        dataMapper.getPokemonByNum(targetNum,(err, data)=>{
            if (err) {
                console.error(err);
                response.status(500).send(err);
            } else {
                const pokemon = data.rows[0];
                const type1 =data.rows[0].name; 
                //TODO
                //Gérer les cas des pokémons à un seul type               
                const type2 =data.rows[1].name;
                
                const colorType1 = data.rows[0].color;
                const colorType2 = data.rows[1].color;

                res.render('details',{
                    pokemon,
                    type1,
                    type2,
                    colorType1,
                    colorType2
                });
            }
        });
    }

};

module.exports = mainController;