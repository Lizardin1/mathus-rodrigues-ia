import './politicas.css'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Header from '../components/Header'
export default function Politicas() {

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
                            <h1>Política de Privacidade</h1>
                            <h2>Política de Privacidade da 52.878.843 MATHEUS RODRIGUES(52.878.843 MATHEUS RODRIGUES)
                            </h2> <p><strong>Última Atualização:</strong> [05/03/2024]</p>
                            <br />
                            <p>
                                A Matheus (52.878.843 MATHEUS RODRIGUES), doravante referida como “52.878.843 MATHEUS RODRIGUES”, “nós” ou “nosso(a)”, está comprometida em proteger a privacidade e a segurança das informações pessoais dos usuários de nossos aplicativos disponibilizados através do Facebook Developer. Esta Política de Privacidade (“Política”) explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais ao usar nossos serviços (“Serviços”).
                            </p>
                            <br />
                            <h3>1. Informações que Coletamos</h3>
                            <p>
                                Coletamos informações que você nos fornece diretamente, informações geradas automaticamente ao usar nossos Serviços, e informações de terceiros, incluindo o Facebook. Isso pode incluir:
                            </p>
                            <ul>
                                <li><strong>Informações fornecidas pelo usuário:</strong> Inclui dados pessoais fornecidos ao criar uma conta, como nome, e-mail, número de telefone etc.</li>
                                <li><strong>Informações geradas automaticamente:</strong> Inclui informações sobre como você usa nossos Serviços, como registros de acesso, dados de localização, e interações com os Serviços.</li>
                                <li><strong>Informações de terceiros:</strong> Recebemos informações sobre você de outras fontes, incluindo o Facebook, como quando você acessa nossos Serviços através de uma conta do Facebook.</li>
                            </ul>
                            <br />
                            <h3>2. Uso das Informações</h3>
                            <p>
                                Usamos as informações coletadas para fornecer, manter, melhorar e promover nossos Serviços, incluindo para:
                            </p>
                            <ul>
                                <li>Criar e gerenciar contas de usuário;</li>
                                <li>Oferecer suporte ao cliente e responder a solicitações e perguntas;</li>
                                <li>Melhorar a segurança e a proteção dos nossos Serviços;</li>
                                <li>Realizar análises e pesquisas internas para melhorar e desenvolver novos produtos e serviços;</li>
                                <li>Enviar comunicações de marketing, sujeito às suas preferências e à legislação aplicável.</li>
                            </ul>
                            <p>
                                <strong>Uso dos Dados da Plataforma:</strong>
                            </p>
                            <ul>
                                <li>Explicar o Uso dos Dados: Detalhamos como usamos os dados de maneira ética e em conformidade com as políticas de privacidade.</li>
                                <li>Focar em Dados Públicos e Estatísticos: Acessamos apenas dados públicos para fins estatísticos e analíticos, sem a intenção de coletar dados pessoais privados.</li>
                                <li>Garantir Segurança e Conformidade: Implementamos medidas de segurança adequadas para proteger os dados e operamos em conformidade com as leis de proteção de dados aplicáveis.</li>
                            </ul>
                            <br />
                            <h3>3. Compartilhamento de Informações</h3>
                            <p>
                                Podemos compartilhar suas informações pessoais nas seguintes circunstâncias:
                            </p>
                            <ul>
                                <li>Com fornecedores, consultores e outros prestadores de serviços que precisam acessar tais informações para realizar trabalhos em nosso nome;</li>
                                <li>Em resposta a um pedido legal ou para proteger nossos direitos, propriedade ou segurança, ou os direitos, propriedade ou segurança de terceiros;</li>
                                <li>Em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de todo ou parte de nosso negócio por outra empresa;</li>
                                <li>Entre nossas empresas afiliadas, em conformidade com esta Política.</li>
                            </ul>
                            <br />
                            <h3>4. Segurança das Informações</h3>
                            <p>
                                Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Contudo, nenhum sistema de segurança é infalível, e não podemos garantir a segurança das suas informações.
                            </p>
                            <br />
                            <h3>5. Seus Direitos</h3>
                            <p>
                                Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, os Serviços (ou qualquer parte deles) com ou sem aviso prévio. Não seremos responsáveis perante você ou qualquer terceiro por qualquer modificação, suspensão ou descontinuação dos Serviços.
                            </p>
                            <br />
                            <h3>6. Alterações na Política de Privacidade</h3>
                            <p>
                                Podemos atualizar esta Política de tempos em tempos. Quando fizermos alterações, atualizaremos a data de "última atualização" no início da Política e postaremos a nova Política.
                            </p>
                            <br />
                            <h3>7. Contato</h3>
                            <p>
                                Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: <a href="mailto:matheusdsng@gmail.com">contato@bracaiolitech.com</a>. Ao utilizar nossos Serviços, você confirma que leu e compreendeu esta Política de Privacidade.
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
            </div >
        </>
    )
}