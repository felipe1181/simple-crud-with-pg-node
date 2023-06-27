const databaseConnection = require('../../config/database')

async function findByUsername(username){
    const database = await databaseConnection() 
    const {rows} = await database.query('SELECT * FROM public.usuario WHERE username=$1 LIMIT 1',[username]) 
    await database.end()
    return rows[0]
}

async function findAll(){
    const database = await databaseConnection() 
    const {rows} = await database.query('SELECT * FROM public.usuario') 
    await database.end()
    return rows
}

async function create({username,password}){
    const database = await databaseConnection() 
    const {rows} = await database.query(
        `INSERT INTO public.usuario (username,password) VALUES ($1,$2) RETURNING id`,
        [username,password]
    )
    await database.end()
    return {
        id:rows[0].id,
        username,
        password,
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
    remove,
    findByUsername
}