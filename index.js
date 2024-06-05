const jsonserver = require("json-server");
const empServer = jsonserver.create();
const middleWare = jsonserver.defaults();
const router = jsonserver.router('db.json')
const PORT = 3000 || process.env.PORT

empServer.use(middleWare)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee portal running at:${PORT}`);
})
