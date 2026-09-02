'use client'

import React, { useState } from "react"
import Card from "@/components/Card"
import { toast } from "react-toastify"

export default function Home() {
  const [card, setCard] = useState<null | "Gasolina" | "Etanol">(null)
  const [gasolina, setGasolina] = useState<number | null>()
  const [etanol, setEtanol] = useState<number | null>()

  function mostrarResultado(e: React.FormEvent) {
    e.preventDefault()
    if(!gasolina || !etanol) {
      toast.error("Preencha todos os campos.")
      return
    }
    const calculo = etanol / gasolina
    if(calculo <= 0.7) {
      setCard("Etanol")
      return
    }
    setCard("Gasolina")
  }

  function fecharCard() {
    setCard(null)
  }

  return (
    <main>
      { card && (
        <Card resultado={card} fechar={fecharCard} />
      ) }

      <div className="imagem">
        <img src={"./imagem.png"} />
      </div>

      <form onSubmit={mostrarResultado}>
        <input 
          type="number" 
          placeholder="Valor da Gasolina"
          step={0.1}
          onChange={(e)=>setGasolina(Number(e.target.value))}
          required 
        />

        <input 
          type="number" 
          placeholder="Valor do Etanol"
          step={0.1}
          onChange={(e)=>setEtanol(Number(e.target.value))}
          required 
        />

        <button>Conferir</button>
      </form>

    </main>
  )
}
