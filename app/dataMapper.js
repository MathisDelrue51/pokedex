const client = require('./database');

const dataMapper = {
    getAllPokemon:(callback)=>{
        const sql =`SELECT * FROM "pokemon"`;

        client.query(sql,callback);
    },

    getPokemonByNum:(pokemonNum, callback)=>{
        const sql={
            text: 
            //Renvoie un tableau un une ligne par type que possède le pokémon
            `SELECT * FROM "pokemon" 
            JOIN "pokemon_type" ON "pokemon"."numero" = "pokemon_type"."pokemon_numero"
            JOIN "type" ON "type"."id" = "pokemon_type"."type_id" 
            WHERE "pokemon"."numero"= $1`,
            
            values:[pokemonNum]
        };
        client.query(sql,callback);
    }
    
};


module.exports = dataMapper;