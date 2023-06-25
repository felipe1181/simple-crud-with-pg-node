const databaseConnection = require('../../config/database')

async function findAll(){
    const database = await databaseConnection() 
    const {rows} = await database.query('SELECT * FROM public.usuario')
    await database.end()
    return rows
}

async function create({username,age}){
    const database = await databaseConnection() 
    const {rows} = await database.query(
        `INSERT INTO public.usuario (username,age) VALUES ($1,$2) RETURNING id`,
        [username,age]
    )
    await database.end()
    return {
        id:rows[0].id,
        username,
        age,
    }
}

async function update({id,username, age}){

}

async function remove(id){
    
}

module.exports ={
    findAll,
    create,
    update,
    remove
}