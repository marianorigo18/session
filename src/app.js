import express from "express";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
}))

app.get("/session", (req, res)=>{
    const name = req.query.name;

    if(!req.session.user){
        req.session.user = name 
        req.session.contador = 1
        return res.send("bienvenido " + req.session.user)
    }else{
        req.session.contador++
        return res.send("hola usted a visitado este sitio "+ req.session.contador + " veces")
    }
})

app.listen(8083, ()=>{
    console.log("server listen 8083")
})