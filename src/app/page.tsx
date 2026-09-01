export default function Home() {
  return (
    <main>

      <div className="imagem">
        <img src={"./imagem.png"} />
      </div>

      <form>
        <input type="number" placeholder="Valor da Gasolina" />
        <input type="number" placeholder="Valor do Etanol " />
        <button>Conferir</button>
      </form>

    </main>
  )
}
