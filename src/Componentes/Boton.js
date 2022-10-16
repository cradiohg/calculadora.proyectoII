export default function Boton ({clickHandler, name}) {

    const handleClick = () => clickHandler(name)

    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}