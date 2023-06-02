export default function Contador(props) {
    const [contar, setContar] = React.useState(0);
    return (
        <div>
        <h1>{contar}</h1>
        <button onClick={() => setContar(contar + 1)}>Click</button>
        </div>
    )
}