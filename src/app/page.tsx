'use client'

import { useState } from "react"
import Card from "@/components/Card"

export default function Home() {
  const [card, setCard] = useState<boolean>(true)

  function fecharCard() {
    setCard(false)
  }

  return (
    <main>
      { card === true && (
        <Card fechar={fecharCard} />
      ) }

      <div className="imagem">
        <img src={"./imagem.png"} />
      </div>

      <form>
        <input 
          type="number" 
          placeholder="Valor da Gasolina"
          required 
        />

        <input 
          type="number" 
          placeholder="Valor do Etanol"
          required 
        />

        <button>Conferir</button>
      </form>

    </main>
  )
}
