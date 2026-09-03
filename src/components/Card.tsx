import "./card.css"

interface CardProps {
  resultado: "Etanol" | "Gasolina",
  fechar: ()=>void
}

export default function Card({ resultado, fechar }: CardProps) {
  return (
    <div className="background">
      <div className="card">
        <h2><i className="fa-solid fa-gas-pump"></i> { resultado }</h2>
        <p>Após relacionar os valores, concluímos que no momento torna-se mais vantajoso usar {resultado}.</p>
        <button onClick={fechar}>Fechar</button>
      </div>
    </div>
  )
}