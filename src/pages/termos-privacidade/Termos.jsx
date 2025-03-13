import Header from "../components/Header";
import "./Termos.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Termos() {
  return (
    <>
      <div className="container">
        <div className="background">
          <Header />
          <Link to="/">
            <div className="return">
              <BiArrowBack className="icon-back" />
            </div>
          </Link>
          <div className="section-termos">
            <div className="section-termos-content">
              <h1>Termos de Serviço</h1>
              <h2>Termos de Serviço da 52.878.843 MATHEUS RODRIGUES (52.878.843 MATHEUS RODRIGUES)
              </h2> <p><strong>Última Atualização:</strong> [05/03/2024]</p>
              <br />
              <p>
                Bem-vindo(a) à 52.878.843 MATHEUS RODRIGUES Estes Termos de Serviço (“Termos”) regem seu acesso e uso dos nossos aplicativos e serviços disponibilizados através do Facebook Developer (“Serviços”). Ao acessar ou usar os Serviços, você concorda em estar vinculado(a) por estes Termos.
              </p>
              <br />
              <h3>1. Uso dos Serviços</h3>
              <p>
                Você pode usar os Serviços apenas de acordo com estes Termos e todas as leis, regras e regulamentos aplicáveis. Ao usar os Serviços, você concorda que:
              </p>
              <ul>
                <li>Não irá utilizar os Serviços para qualquer propósito ilegal ou não autorizado;</li>
                <li>Não irá acessar ou tentar acessar os Serviços por quaisquer meios que não sejam através das interfaces fornecidas pela 52.878.843 MATHEUS RODRIGUES;</li>
                <li>Não irá usar os Serviços de maneira que possa interromper, danificar ou afetar negativamente o acesso de outros usuários aos Serviços.</li>
              </ul>
              <br />
              <h3>2. Conteúdo do Usuário</h3>
              <p>
                Você pode postar, linkar, armazenar ou compartilhar conteúdo nos Serviços. Você é responsável pelo conteúdo que disponibiliza, incluindo sua legalidade, confiabilidade e adequação. Ao postar conteúdo nos Serviços, você concede à 52.878.843 MATHEUS RODRIGUES uma licença mundial, não exclusiva, livre de royalties, com o direito de sublicenciar, usar, copiar, modificar, criar obras derivadas, distribuir, publicar e processar esse conteúdo sem qualquer compensação adicional para você.
              </p>
              <br />
              <h3>3. Contas de Usuário</h3>
              <p>
                Você pode precisar de uma conta para usar alguns dos nossos Serviços. Você é responsável por manter a confidencialidade da sua conta e senha e por restringir o acesso ao seu computador ou dispositivo. Você concorda em aceitar responsabilidade por todas as atividades que ocorram sob sua conta ou senha.
              </p>
              <br />
              <h3>4. Direitos de Propriedade Intelectual</h3>
              <p>
                Os Serviços e todo o material neles contido (exceto o conteúdo fornecido por usuários) são propriedade da 52.878.843 MATHEUS RODRIGUES ou de seus licenciadores e são protegidos por direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
              <br />
              <h3>5. Modificações e Interrupção dos Serviços</h3>
              <p>
                Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, os Serviços (ou qualquer parte deles) com ou sem aviso prévio. Não seremos responsáveis perante você ou qualquer terceiro por qualquer modificação, suspensão ou descontinuação dos Serviços.
              </p>
              <br />
              <h3>6. Isenções de Responsabilidade e Limitações de Responsabilidade</h3>
              <p>
                Os Serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que os Serviços serão ininterruptos ou livres de erros. Em nenhum caso a 52.878.843 MATHEUS RODRIGUES será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de usar os Serviços.
              </p>
              <br />
              <h3>7. Indenização</h3>
              <p>
                Você concorda em indenizar e isentar a 52.878.843 MATHEUS RODRIGUES, seus diretores, funcionários e agentes, de e contra quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos ou dívidas e despesas decorrentes de:
              </p>
              <ul>
                <li>Seu uso e acesso aos Serviços;</li>
                <li>Sua violação de qualquer termo destes Termos.</li>
              </ul>
              <br />
              <h3>8. Alterações aos Termos</h3>
              <p>
                Podemos modificar estes Termos de tempos em tempos. Se fizermos alterações materiais, forneceremos a você um aviso através dos Serviços ou por outros meios, para oferecer a oportunidade de revisar as alterações antes que elas entrem em vigor. Seu uso contínuo dos Serviços após a publicação ou envio de um aviso sobre nossas alterações aos Termos significa que você concorda com os Termos atualizados.
              </p>
              <br />
              <h3>9. Contato</h3>
              <p>
                Se você tiver qualquer dúvida sobre estes Termos, por favor, entre em contato conosco pelo e-mail: <a href="mailto:matheusdsng@gmail.com">matheusdsng@gmail.com</a>. Ao acessar ou usar nossos Serviços, você concorda em estar vinculado(a) por estes Termos.
              </p>
            </div>
          </div>
          <Link to="/">
            <div className="return">
              <BiArrowBack className="icon-back" />
            </div>
          </Link>
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
