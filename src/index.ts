import  express  from "express";
import cors from "cors";
//mport router from "./routes/router.js";
import { sincronizarDB } from "./service/sincronizacion";


const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

//app.use('/',  router)

app.listen(port, async() =>{
    console.log("Inicio de api puerto ",port)
    sincronizarDB.start()
})