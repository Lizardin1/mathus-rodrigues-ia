import "./App.css";
import Header from "../components/Header";
function App() {
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector("#header");
    header.classList.toggle("header-background", this.window.scrollY > 5);
  });

  return (
    <>
      <div className="container">
        <div className="background">
          <Header />
          <section className="section">
            <div className="text-section">
              <h1 className="title-section">
                SOLUÇÕES IAs
                <br />
                <span>Focadas no seu negócio</span>
              </h1>
              <br />
              <a href="https://wa.me/553298696380?text=Ol%C3%A1%20Matheus,%20tenho%20interesse%20em%20escalar%20meu%20neg%C3%B3cio%20com%20intelig%C3%AAncia%20artificial"
              target="_blank">
                <button className="saiba-mais">
                  <span>Saiba mais!</span>
                </button>
              </a>
            </div>
          </section>
          <section className="section1">
            <div className="text-section1">
              <h1 className="title-section1">
                IA no Atendimento
                <br />
                <span> A Chave para Conversões Explosivas</span>
              </h1>
              <br />
              <p>
                A Inteligência Artificial está transformando o atendimento ao
                cliente. Com chatbots inteligentes e análises preditivas, nossa
                solução oferece respostas rápidas e personalizadas,
                <span> disponíveis 24 horas por dia</span>. Isso não apenas
                melhora a experiência do cliente, mas também aumenta
                significativamente as taxas de conversão, transformando o
                atendimento em uma vantagem competitiva para o seu negócio.
              </p>

              <form action="" className="form">
                <div className="form-inputs">
                  <label htmlFor="">Insira seu nome</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Quero usar IA Rodrigues"
                  />
                </div>
                <div className="form-inputs">
                  <label htmlFor="">Insira seu email</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: querousarIA@gmail.com"
                  />
                </div>
                <div className="form-inputs">
                  <label htmlFor="">Insira seu whatsapp</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: (11) 92267-2234"
                  />
                </div>
                <button className="button-form">
                  <span>Inscreva - se agora!</span>
                </button>
              </form>
            </div>
            <div className="img-section1" />
          </section>
          <section className="section2">
            <div className="img-section2" />
            <div className="text-section2">
              <h1 className="title-section2">
                INTELIGÊNCIA ARTIFICIAL <br />
                <span>A expansão de negócios</span>
              </h1>
              <br />
              <p className="p-1">As chaves para sair da estagnação e transformar seu negócio em líder de mercado!</p>
              <br />
              <p className="p-2">Não basta conseguir vendas, é preciso saber crescer, descbubra o poder  que uma visão ambiciosa pode ter no seu negócio</p>
            </div>
          </section>
          <div className="footer">
            <div className="title-footer">
              <div>
                <h2>
                  <a href="">Termos de uso</a>
                </h2>
              </div>
              <div>
                <h2>
                  <a href="">Políticas de privacidade</a>
                </h2>
              </div>
            </div>
            <p>
              ©2025 – Todos os direitos reservados | CNPJ: 52.878.843/0001-99 |
              Matheus Rodrigues
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
