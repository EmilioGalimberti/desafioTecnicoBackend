import  express  from "express";
import cors from "cors";
import router from "./router/router";
import { sincronizarDB } from "./service/sincronizacion";


const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.use('/',  router)

app.listen(port, async() =>{
    console.log("Inicio de api puerto ",port)
    sincronizarDB.start()
})