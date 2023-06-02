import "./App.css";
import Users from "./components/Users";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Lista from "./components/Lista";
import Contador from "./components/Nuevo";
const user = {name:"jhon",surname: "macias",age: 18}

const dogs = ["Teddy", "Larry", "Fido",]
const dogs2 = [
  {name: "Teddy", age: 18},
  {name: "Firulais", age: 14},
  {name: "juan", age: 13},
]
export default function App() {
  return (
  <>
    <Title title ="Mi segundo proyjhecto"/>
    <Subtitle title ="lorkjafjjasfaem" />
    <Users user = {user} />
    <Lista items = {dogs} />

    {/* <Contador props/> */}
    
    
  </>
  );

}
