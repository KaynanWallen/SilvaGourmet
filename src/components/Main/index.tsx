
import './style.css';
import bolo from '/images/bolo.png'
import torta from '/images/torta.png'

import icon_gps from '/images/icone_gps.png';

export function Main() {
    return (
        <>
            <main>
                <section className='section_1'>
                    <div className='div_slogan1'>
                        <p>
                            Silva’s Gourmet:
                        </p>

                        <p>
                            Delícias que Inspiram,
                        </p>

                        <p>
                            Sabores que Encantam!
                        </p>
                    </div>

                    <div className='div_imagens'>
                    </div>
                </section>

                <section className='section_2'>
                    <div className='div_slogan2'>
                        <h3>
                            Delícias com Tradição e Paixão
                        </h3>

                        <p>
                            "Em Silva's Arte Culinária, cultivamos o legado de sabor deixado pelo nosso querido Chef Silva. Cada prato é uma homenagem à sua paixão pela cozinha, oferecendo uma experiência gastronômica que transcende o tempo. Bem-vindo ao nosso universo de sabores, onde a tradição e a inovação se encontram para encantar o seu paladar."
                        </p>
                    </div>

                    <div className='div_equipe'>
                        <h3>
                            EQUIPE
                        </h3>

                        <div className='funcionarios_equipe'>
                            <div className='funcionario'>
                                <div className='funcionario_foto'>
                                </div>
                                
                                <h3>
                                GUSTAVO PEREIRA
                                </h3>
                                
                                <p>
                                Graduou-se em Administração, mas encontrou sua verdadeira paixão na confeitaria. Fez cursos na França para aprimorar suas habilidades como pâtissier. Atualmente, é o mestre dos doces em nossa cozinha.
                                </p>
                            </div>

                            <div className='funcionario'>
                                <div className='funcionario_foto'>
                                </div>
                                
                                <h3>
                                    Luciana Costa
                                </h3>
                                
                                <p>
                                    Estudou Design de Interiores e se especializou em decoração de ambientes gastronômicos. Com um olhar artístico, contribui para a estética encantadora de nossos espaços, transformando cada refeição em uma experiência visual única.
                                </p>
                            </div>

                            <div className='funcionario'>
                                <div className='funcionario_foto'>
                                </div>
                                
                                <h3>
                                    Natália Lima
                                </h3>
                                
                                <p>
                                    Graduada em Arquitetura e Urbanismo, Natália encontrou na culinária uma forma de expressar sua criatividade. Especializada em design de interiores para restaurantes, ela contribui para criar um ambiente acolhedor e aconchegante em nosso espaço, transformando refeições em momentos memoráveis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='section_3'>
                    <h3>
                        CARDÁPIO
                    </h3>
                    
                    <div className='subclasses_cardapio'>
                        <div className='classes'>

                        </div>

                        <div className='classes'>

                        </div>

                        <div className='classes'>

                        </div>
                    </div>
                    
                    <div className='div_slogan3'>
                        <p>“Sabores que Contam Histórias, Escolha a Sua Aventura Culinarária!”</p>
                    </div>
                </section>

                <section className='section_4'>
                    <img src={icon_gps} alt = 'logo instagram' />
                    <h3>RESTAURANTES PRÓXIMOS A VOCÊ</h3>
                    <div className='input_txt'>

                    </div>

                    <div className='button_delivery'>

                    </div>

                    <h3 id='slogan_final'>
                        FAÇA SEU PEDIDO ONLINE OU VENHA NOS VISITAR HOJE
                    </h3>
                    
                    <div className='button_final'>

                    </div>
                </section>

                <section className='footer'>
                    <div className='footer_slogan'>

                    </div>
                </section>
            </main>
        </>
    )
}