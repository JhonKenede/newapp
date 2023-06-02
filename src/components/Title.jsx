export default function Title({title}){ // ahora para desestroturar todo el objeto ponemos llaves y dentro el nombre de la propiedad y nos quedaria algo asi return <h1>{title}</h1
   // const {title} = props; // aqui se hace una desestructuracion del objeto prop
    return <h1>{title}</h1> // entonces aqui no hace falta poner props.title  sino que solo con poner el title ya podemos accedes a eso

}