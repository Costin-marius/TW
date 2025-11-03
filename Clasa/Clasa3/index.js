let express =require('express');

let bodyParser =require('body-parser');

let cors =require('cors');

let app=express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

const array = [
    { id: 1, name: "Ionut", age: 25},
    { id: 2, name: "Alex", age: 18},  
    { id: 3, name: "Mihai", age: 13},
    { id: 4, name: "Marcel", age: 12},
    { id: 5, name: "Marius", age: 22}

];

router.route("/getList").get((req,res) =>{
    res.json(array);
});

router.route("/postList").post((req,res) =>{
    let el = req.body;
    array.push(el);
    res.json(el);
});

//asta este ce mi s a cerut sa implementez un nou endpoint in server care sa primeasca id ul unei resurse si sa
//raspunda cu resursa respectiva 

router.route("/getById/:id").get((req, res) => {
    let id = parseInt(req.params.id);
    let el = array.find(x => x.id === id);
    if (el) {
        res.json(el);
    } else {
        res.json({ message: "Nu exista element cu acest id" });
    }
});

let port = 8000;
app.listen(port);
console.log("Api is running");