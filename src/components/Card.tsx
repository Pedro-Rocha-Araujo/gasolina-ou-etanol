import "./card.css"

interface CardProps {
  fechar: ()=>void
}

export default function Card({ fechar }: CardProps) {
  return (
    <div className="background">
      <div className="card">
        <h1>Gasolina</h1>
        <p>Com relação ao valores passados, no momento a gasolina torna-se mais vantajosa.</p>
        <button onClick={fechar}>Fechar</button>
      </div>
    </div>
  )
}