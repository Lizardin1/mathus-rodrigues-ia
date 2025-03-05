import "./App.css";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const api = axios.create({
    baseURL: "https://webhookstinyerp.azurewebsites.net/sendMessage",
  });

  const url =
    "https://discord.com/api/webhooks/1344373354517368842/Lv2_nXBAWt_bThBDdKnMwSm79U7Z1WdowDfp8S6pDUxjLCr_Y8q3WLwRkFD-k1UD0AcJ";
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  async function sendMessage() {
    const listField = [
      {
        name: "Nome:",
        value: nome,
        inline: false,
      },
      {
        name: "Email:",
        value: email,
        inline: false,
      },
      {
        name: "Telefone:",
        value: telefone,
        inline: false,
      },
    ];

    const message = JSON.stringify({
      embeds: [
        {
          title:
            "UM NOVO CLIENTE DESEJA UTILIZAR IA PARA IMPULSIONAR SEU NEGÓCIO!",
          color: 2552550,
          fields: listField,
        },
      ],
    });
    console.log("enviando msg");
    const body = JSON.stringify({
      url: url,
      message: message,
    });
    console.log(body);
    await api
      .post("/", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
              <a
                href="https://wa.me/553298696380?text=Ol%C3%A1%20Matheus,%20tenho%20interesse%20em%20escalar%20meu%20neg%C3%B3cio%20com%20intelig%C3%AAncia%20artificial"
                target="_blank"
              >
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
                <br />
                <span> disponíveis 24 horas por dia</span>. Isso não apenas
                melhora a experiência do cliente, mas também aumenta
                significativamente as taxas de conversão, transformando o
                atendimento em uma vantagem competitiva para o seu negócio.
              </p>

              <form className="form" action={sendMessage}>
                <div className="form-inputs">
                  <label htmlFor="">Insira seu nome</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: Quero usar IA Rodrigues"
                    name="Nome"
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="form-inputs">
                  <label htmlFor="">Insira seu email</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Ex: querousarIA@gmail.com"
                    name="e-Mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-inputs">
                  <label htmlFor="">Insira seu telefone</label>
                  <input
                    className="input"
                    type="tel"
                    placeholder="Ex: (11) 92267-2234"
                    name="Telefone"
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <button type="submit" className="button-form">
                  <span>Solicitar orçamento</span>
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
              <p className="p-1">
                As chaves para sair da estagnação e transformar seu negócio em
                líder de mercado!
              </p>
              <br />
              <p className="p-2">
                Não basta conseguir vendas, é preciso saber crescer, descbubra o
                poder que uma visão ambiciosa pode ter no seu negócio
              </p>
            </div>
          </section>
          <section className="section3">
            <div className="text-section3">
              <p>
                Além dos produtos e serviços disponíveis, também é possível
                contratar o desenvolvimento de soluções personalizadas em IAs
                para resolver e atender necessidades específicas do seu negócio.{" "}
                <br />
                <br />
                Essas soluções passam a ser exclusivas da sua empresa e se
                tornam diferenciais do seu negócio em relação ao mercado. <br />
                <br />
                As soluções podem englobar a automatização de tarefas
                repetitivas, integrações da sua empresa com APIs externas,
                desenvolvimento de apps e softwares, SaaS ou qualquer aplicação
                que tiver em mente.
                <br />
                <br />
                <br />
                Para saber mais e obter um orçamento personalizado, envie um
                e-mail para
                <br />
                <a href="mailto:matheusr2015@gmail.com">
                  matheusr2015@gmail.com
                </a>
                <br />
                ou
                <br />
                <a
                  href="https://wa.me/553298696380?text=Ol%C3%A1%20Matheus,%20tenho%20interesse%20em%20escalar%20meu%20neg%C3%B3cio%20com%20intelig%C3%AAncia%20artificial"
                  target="_blank"
                >
                  {" "}
                  Me chame no whatsapp{" "}
                </a>
                <FaWhatsapp
                  style={{ marginLeft: "10px", width: "25px", height: "25px" }}
                />
                .
              </p>
            </div>
          </section>
          <section className="section4">
            <div className="img-section4" />
            <div className="text-section4">
              <div className="text-chat-bot">
                <p class="default_cursor_cs">
                  Essas IAs podem ser utilizadas em todas as etapas do
                  relacionamento do cliente com sua empresa. Desde o primeiro
                  contato para solicitar informações e marcar uma reunião, call
                  ou consulta e realizar vendas, até atuar ativamente no
                  suporte, tirando dúvidas e ajudando em tudo o que o usuário
                  precisar.
                  <br />
                  <br />
                  Essas IAs são treinadas com seus dados e de sua empresa,
                  transformando-as em perfeitos representantes do seu negócio e
                  atendendo seus clientes 24 horas por dia e 7 dias por semana
                  diretamente pelo WhatsApp. Essa solução é perfeita para
                  empresas de todo tipo, porém são especialmente procuradas por
                  nutricionistas, médicos, advogados, clínicas, ecommercers,
                  dropshippers, infoprodutores e centenas de outras operações
                  que lidam diretamente com os clientes.
                </p>
                <br />
                <p>
                  Para orçar uma IA de atendimento ou suporte, envie um email
                  para:
                  <br />
                  <strong>
                    <br />
                    <a href="mailto:matheusr2015@gmail.com">
                      matheusr2015@gmail.com
                    </a>
                    <br />
                    ou
                    <br />
                    <a
                      href="https://wa.me/553298696380?text=Ol%C3%A1%20Matheus,%20tenho%20interesse%20em%20escalar%20meu%20neg%C3%B3cio%20com%20intelig%C3%AAncia%20artificial"
                      target="_blank"
                    >
                      Me chame no whatsapp
                    </a>
                    <FaWhatsapp
                      style={{
                        marginLeft: "10px",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    .
                  </strong>
                </p>
              </div>
            </div>
          </section>
          <div className="footer">
            <div className="title-footer">
              <div>
                <h2>
                  <a href="/termos-privacidade">Termos de uso</a>
                </h2>
              </div>
              <div>
                <h2>
                  <a href="/termos-privacidade">Políticas de privacidade</a>
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
