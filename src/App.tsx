import './App.css'
import imgBrand from "./assets/brand.jpg";
import imgPerfil from "./assets/perfil.jpg";
import BlogComponent from "./components/blog-component.tsx";

function App() {
    return (
        <div className={"bg-black"}>
            <div className="py-5 items-center mx-5 flex">
                <img src={imgBrand} className={"w-12 h-12 md:w-16 md:h-16"} alt={"Marca"}/>

                <p className="text-white ml-5 font-bold font-montserrat text-lg md:text-2xl">
                    Gabriel Riguiti | Paraciclista
                </p>
            </div>

            <div className="bg-[url('./assets/home.jpg')] bg-cover bg-center h-[500px] w-full">
                <div className={"flex flex-col md:flex-row h-full w-full items-center justify-center"}>
                    <img src={imgPerfil} className={"h-[200px] w-[350px] md:h-[500px] md:w-1/3"} alt={"Perfil"}/>

                    <div className={"h-auto w-[350px] md:h-[500px] md:w-1/2 bg-black/50 p-3"}>
                        <p className={"text-white text-2xl md:text-3xl font-montserrat font-bold"}>Gabriel Riguiti</p>

                        <div className={"w-full mt-6 flex justify-between"}>
                            <div>
                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Nascimento
                                    </p>

                                    <p className={"text-white text-xs md:text-md font-montserrat font-light"}>
                                        05/09/2001 - 24 anos
                                    </p>
                                </div>

                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Naturalidade
                                    </p>

                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        Muriaé - MG
                                    </p>
                                </div>

                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Altura
                                    </p>
                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        1,75m
                                    </p>
                                </div>

                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Peso
                                    </p>
                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        77kg
                                    </p>
                                </div>
                            </div>

                            <div className={"ml-2 md:ml-32"}>
                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Potência Máx. Pico
                                    </p>

                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        1378 Watts (2025)
                                    </p>
                                </div>

                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Total Km/Ano
                                    </p>

                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        11.768,5 (2024)
                                    </p>
                                </div>

                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Velocidade Máx. Descida
                                    </p>

                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        96 km/h (2024)
                                    </p>
                                </div>

                                <div className={"mt-2"}>
                                    <p className={"text-white text-sm md:text-xl font-montserrat font-semibold"}>
                                        Nutrição em Competição
                                    </p>
                                    <p className={"text-white text-xs md:text-md font-light"}>
                                        80-100g carb/h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 px-8 md:px-36">
                <p className={"font-montserrat text-2xl font-bold text-white"}>Sobre Mim</p>

                <p className={"font-montserrat text-justify text-white my-10"}>
                    Iniciei minha trajetória no ciclismo em 2015, participando de competições até 2019. Após
                    enfrentar complicações relacionadas à minha deficiência, precisei me afastar temporariamente
                    da modalidade. Ainda assim, o amor pelas duas rodas permaneceu: migrei para o mountain bike,
                    competindo nas modalidades maratona e cross-country olímpico junto a atletas convencionais
                    (sem deficiência).
                    <br/>
                    <br/>
                    Em 2025, retornei ao cenário competitivo através do paraciclismo — modalidade na qual estou
                    atualmente totalmente dedicado. Compito na categoria MC3, destinada a atletas com limitações
                    locomotoras moderadas, mas que mantêm boa funcionalidade para o ciclismo de estrada e pista.
                    Minha deficiência é o pé torto congênito bilateral, condição que impacta mobilidade, força e
                    alinhamento dos membros inferiores, tornando a adaptação biomecânica essencial para o desempenho
                    esportivo.
                </p>
            </div>

            <div className="bg-[url('./assets/seasson.jpg')] bg-cover bg-center h-[500px] w-full flex items-center">
                <div className="h-10/12 flex overflow-x-auto">
                    <div className={"bg-black/50 w-3/4 md:w-5/12 rounded-md m-4 md:m-10 p-3 md:p-10 flex-shrink-0"}>
                        <div className={"text-white text-lg md:text-2xl font-montserrat font-bold mb-5"}>
                            Objetivos para 2026
                        </div>

                        <div>
                            <p className={"text-white text-md md:text-2xl font-montserrat font-semibold"}>
                                Campeonatos Principais
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Campeonato PanAmericano - Fevereiro/Rio de Janeiro
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Jogos ParaSul-Americanos - Julho/Valledupar - Colômbia
                            </p>
                        </div>

                        <div className={"mt-8"}>
                            <p className={"text-white text-md md:text-2xl font-montserrat font-semibold"}>
                                Demais Campeonatos
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Campeonato Brasileiro de Paraciclismo de Estrada - Resistência
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Campeonato Brasileiro de Paraciclismo de Estrada - Contrarelógio
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Copa Brasil de Paraciclismo de Estrada - Contrarelógio
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Copa Brasil de Paraciclismo de Estrada - Resistência
                            </p>

                            <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                                ✅ Campeonato Matogrossense de Ciclismo de Estrada - Resistência
                                (Sub 30/Atletas Sem Deficiência)
                            </p>
                        </div>
                    </div>

                    <div className={"bg-black/50 w-3/4 md:w-5/12 rounded-md m-4 md:m-10 p-3 md:p-10 flex-shrink-0"}>
                        <p className={"text-white text-md md:text-2xl font-montserrat font-semibold"}>
                            Temporada 2025 até aqui
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥇 Campeonato Brasileiro de Paraciclismo de Estrada - Resistência
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥇 Campeonato Brasileiro de Paraciclismo de Estrada - Contrarelógio
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥇🥇 Etapa de Copa Brasil de Paraciclismo de Estrada - Contrarelógio
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥇🥇 Etapa de Copa Brasil de Paraciclismo de Estrada - Resistência
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥇🥇 GP Ciclismo de Estrada - Resistência (Sub 30/Atletas Sem Deficiência)
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥈 Vice Campeão Matogrossense de Ciclismo de Estrada - Resistência (Sub 30/Atletas
                            Sem Deficiência)
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥇 MTB XCM Regional (Sub 30/Atletas Sem Deficiência)
                        </p>

                        <p className={"text-white text-xs md:text-lg font-montserrat font-medium mt-2"}>
                            🥉 MTB XCO Regional (Sub 30/Atletas Sem Deficiência)
                        </p>
                    </div>
                </div>
            </div>

            <BlogComponent/>
        </div>
    )
}

export default App;
