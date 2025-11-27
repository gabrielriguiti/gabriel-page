import './App.css'
import imgBrand from "./assets/brand.jpg";
import imgPerfil from "./assets/perfil.jpg";
import imgWhats from "./assets/whatsapp.png";
import imgInstagram from "./assets/instagram.png";
import imgStrava from "./assets/strava.png";
import BlogComponent from "./components/blog-component.tsx";
import SponsorsComponent from "./components/sponsors.component.tsx";

function App() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="header px-4">
                <div className="container header-content">
                    <img src={imgBrand} className="brand-logo" alt="Marca"/>
                    <p className="brand-name">Gabriel Riguiti | Paraciclista</p>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background bg-[url('./assets/home.jpg')]"></div>
                <div className="container hero-content">
                    <img src={imgPerfil} className="hero-image m-auto" alt="Perfil"/>

                    <div className="hero-info-card m-auto">
                        <h1 className="hero-name">Gabriel Riguiti</h1>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <p className="stat-label">Nascimento</p>
                                <p className="stat-value">05/09/2001 - 24 anos</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Potência Máx. Pico</p>
                                <p className="stat-value">1378 Watts (2025)</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Naturalidade</p>
                                <p className="stat-value">Muriaé - MG</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Total Km/Ano</p>
                                <p className="stat-value">11.768,5 (2024)</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Altura</p>
                                <p className="stat-value">1,75m</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Velocidade Máx.</p>
                                <p className="stat-value">96 km/h (2024)</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Peso</p>
                                <p className="stat-value">77kg</p>
                            </div>

                            <div className="stat-item">
                                <p className="stat-label">Nutrição Competição</p>
                                <p className="stat-value">80-100g carb/h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section">
                <div className="container">
                    <h2 className="section-title text-white">Sobre Mim</h2>

                    <p className="about-text mt-8">
                        Iniciei minha trajetória no ciclismo na modalide Downhill em 2015, participando de competições até 2019. Após
                        enfrentar complicações relacionadas à minha deficiência, precisei me afastar temporariamente
                        da modalidade. Ainda assim, o amor pelas duas rodas permaneceu: migrei para o mountain bike,
                        competindo nas modalidades maratona e cross-country olímpico junto a atletas convencionais
                        (sem deficiência).
                    </p>
                    <p className="about-text mt-6">
                        Em 2025, retornei ao cenário competitivo através do paraciclismo — modalidade na qual estou
                        atualmente totalmente dedicado. Compito na categoria MC3, destinada a atletas com limitações
                        locomotoras moderadas, mas que mantêm boa funcionalidade para o ciclismo de estrada e pista.
                        Minha deficiência é o pé torto congênito bilateral, condição que impacta mobilidade, força e
                        alinhamento dos membros inferiores, tornando a adaptação biomecânica essencial para o desempenho
                        esportivo.
                    </p>
                </div>
            </section>

            {/* Season Section */}
            <section className="season-section">
                <div className="season-background bg-[url('./assets/seasson.jpg')]"></div>
                <div className="season-content container ">
                    <div className="season-cards my-20">
                        <div className="season-card m-auto">
                            <h3 className="season-card-title">🎯 Objetivos para 2026</h3>

                            <p className="season-subtitle">Campeonatos Principais</p>

                            <div className="achievement-item">
                                ✅ Campeonato PanAmericano - Fevereiro/Rio de Janeiro
                            </div>
                            <div className="achievement-item">
                                ✅ Jogos ParaSul-Americanos - Julho/Valledupar - Colômbia
                            </div>

                            <p className="season-subtitle">Demais Campeonatos</p>

                            <div className="achievement-item">
                                ✅ Campeonato Brasileiro de Paraciclismo de Estrada - Resistência
                            </div>
                            <div className="achievement-item">
                                ✅ Campeonato Brasileiro de Paraciclismo de Estrada - Contrarelógio
                            </div>
                            <div className="achievement-item">
                                ✅ Copa Brasil de Paraciclismo de Estrada - Contrarelógio
                            </div>
                            <div className="achievement-item">
                                ✅ Copa Brasil de Paraciclismo de Estrada - Resistência
                            </div>
                            <div className="achievement-item">
                                ✅ Campeonato Matogrossense de Ciclismo de Estrada - Resistência (Sub 30/Atletas Sem Deficiência)
                            </div>
                        </div>

                        <div className="season-card m-auto">
                            <h3 className="season-card-title">🏆 Temporada 2025</h3>

                            <div className="achievement-item">
                                🥇 Campeonato Brasileiro de Paraciclismo de Estrada - Resistência
                            </div>
                            <div className="achievement-item">
                                🥇 Campeonato Brasileiro de Paraciclismo de Estrada - Contrarelógio
                            </div>
                            <div className="achievement-item">
                                🥇🥇 Etapa de Copa Brasil de Paraciclismo de Estrada - Contrarelógio
                            </div>
                            <div className="achievement-item">
                                🥇🥇 Etapa de Copa Brasil de Paraciclismo de Estrada - Resistência
                            </div>
                            <div className="achievement-item">
                                🥇🥇 GP Ciclismo de Estrada - Resistência (Sub 30/Atletas Sem Deficiência)
                            </div>
                            <div className="achievement-item">
                                🥈 Vice Campeão Matogrossense de Ciclismo de Estrada - Resistência (Sub 30/Atletas Sem Deficiência)
                            </div>
                            <div className="achievement-item">
                                🥇 MTB XCM Regional (Sub 30/Atletas Sem Deficiência)
                            </div>
                            <div className="achievement-item">
                                🥉 MTB XCO Regional (Sub 30/Atletas Sem Deficiência)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogComponent/>

            {/* Sponsors Section */}
            <SponsorsComponent/>

            {/* Footer */}
            <footer className="footer section">
                <div className="container footer-content">
                    <img src={imgBrand} className="brand-logo" alt="Marca"/>

                    <div className="footer-brand">
                        <p className="brand-name">Gabriel Riguiti | Paraciclista</p>

                        <div className="footer-social">
                            <a
                                href="https://api.whatsapp.com/send?phone=5565996193139&text=Ol%C3%A1%20Gabriel!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={imgWhats} alt="WhatsApp"/>
                            </a>

                            <a
                                href="https://www.instagram.com/gabrielriguiti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={imgInstagram} alt="Instagram"/>
                            </a>

                            <a
                                href="https://www.strava.com/athletes/45782246"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={imgStrava} alt="Strava"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App;
