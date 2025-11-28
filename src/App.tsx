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
                <div className="container header-content space-x-4">
                    <img src={imgBrand} className="brand-logo" alt="Marca" />
                    <p className="brand-name">Gabriel Riguiti | Paraciclista</p>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background bg-[url('./assets/home.jpg')]"></div>
                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    {/* Hero Main Info */}
                    <div className="hero-main">
                        {/* Profile Image with Badge */}
                        <div className="hero-profile">
                            <div className="profile-image-container">
                                <img src={imgPerfil} className="hero-image" alt="Gabriel Riguiti" />
                                <div className="profile-badge">
                                    <span className="badge-icon">🚴</span>
                                    <span className="badge-text">MC3</span>
                                </div>
                            </div>

                            {/* Quick Stats Badges */}
                            <div className="quick-badges">
                                <div className="quick-badge gold">
                                    <span className="badge-number">8</span>
                                    <span className="badge-label">🥇 Ouros 2025</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Text Content */}
                        <div className="hero-text">
                            <div className="hero-subtitle-top">Paraciclista Brasileiro</div>
                            <h1 className="hero-name">Gabriel Riguiti</h1>
                            <p className="hero-tagline">
                                Campeão Brasileiro de Paraciclismo 2025
                                <br />
                                <span className="hero-category">Categoria MC3 • Estrada & Contrarelógio</span>
                            </p>

                            {/* CTA Buttons */}
                            <div className="hero-cta">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5565996193139&text=Ol%C3%A1%20Gabriel!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-button primary"
                                >
                                    <img src={imgWhats} alt="" className="cta-icon" />
                                    Entre em contato
                                </a>
                                <a
                                    href="https://www.instagram.com/gabrielriguiti/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-button secondary"
                                >
                                    <img src={imgInstagram} alt="" className="cta-icon" />
                                    @gabrielriguiti
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="hero-stats px-4 xl:px-0">
                        <div className="stats-card">
                            <div className="stats-card-header">
                                <span className="stats-card-icon">📊</span>
                                <span className="stats-card-title">Dados Físicos</span>
                            </div>
                            <div className="stats-card-grid">
                                <div className="stat-item-new">
                                    <span className="stat-value-new">24</span>
                                    <span className="stat-label-new">anos</span>
                                </div>
                                <div className="stat-item-new">
                                    <span className="stat-value-new">1,75m</span>
                                    <span className="stat-label-new">altura</span>
                                </div>
                                <div className="stat-item-new">
                                    <span className="stat-value-new">77kg</span>
                                    <span className="stat-label-new">peso</span>
                                </div>
                                <div className="stat-item-new">
                                    <span className="stat-value-new">MG</span>
                                    <span className="stat-label-new">Muriaé</span>
                                </div>
                            </div>
                        </div>

                        <div className="stats-card featured">
                            <div className="stats-card-header">
                                <span className="stats-card-icon">⚡</span>
                                <span className="stats-card-title">Performance 2024/25</span>
                            </div>
                            <div className="stats-card-grid">
                                <div className="stat-item-new highlight">
                                    <span className="stat-value-new">1378W</span>
                                    <span className="stat-label-new">potência pico</span>
                                </div>
                                <div className="stat-item-new highlight">
                                    <span className="stat-value-new">96km/h</span>
                                    <span className="stat-label-new">vel. máxima</span>
                                </div>
                                <div className="stat-item-new">
                                    <span className="stat-value-new">11.768km</span>
                                    <span className="stat-label-new">total 2024</span>
                                </div>
                                <div className="stat-item-new">
                                    <span className="stat-value-new">80-100g</span>
                                    <span className="stat-label-new">carb/h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator">
                        <span>Conheça minha história</span>
                        <div className="scroll-arrow"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section">
                <div className="container">
                    <h2 className="section-title text-white">Sobre Mim</h2>

                    <p className="about-text mt-8">
                        Iniciei minha trajetória no ciclismo na modalidade Downhill em 2015, participando de competições até 2019. Após
                        enfrentar complicações relacionadas à minha deficiência, precisei me afastar temporariamente
                        da modalidade. Ainda assim, o amor pelas duas rodas permaneceu: migrei para o mountain bike,
                        competindo nas modalidades maratona e cross-country olímpico junto a atletas convencionais
                        (sem deficiência).
                    </p>
                    <p className="about-text mt-6">
                        Em 2025, retornei ao cenário competitivo através do paraciclismo — modalidade na qual estou
                        atualmente totalmente dedicado. Disputo na categoria MC3, destinada a atletas com limitações
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
                <div className="season-content container">
                    {/* Section Header */}
                    <div className="season-header">
                        <h2 className="section-title text-white">Conquistas & Objetivos</h2>
                        <p className="season-description">Minha jornada no paraciclismo, uma conquista de cada vez</p>
                    </div>

                    {/* Stats Summary */}
                    <div className="stats-summary">
                        <div className="summary-item">
                            <span className="summary-number">8</span>
                            <span className="summary-label">🥇 Ouros</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-number">1</span>
                            <span className="summary-label">🥈 Prata</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-number">1</span>
                            <span className="summary-label">🥉 Bronze</span>
                        </div>
                    </div>

                    {/* 2025 Achievements Grid */}
                    <div className="achievements-block">
                        <div className="achievements-year-header ">
                            <span className="year-badge rounded-lg">2025</span>
                            <h3 className="year-title">Temporada Atual</h3>
                        </div>

                        <div className="achievements-grid">
                            {/* Campeonato Brasileiro */}
                            <div className="achievement-card gold">
                                <div className="card-medal">🥇</div>
                                <div className="card-content">
                                    <span className="card-category">Campeonato Brasileiro</span>
                                    <h4 className="card-title">Paraciclismo de Estrada</h4>
                                    <span className="card-detail">Resistência</span>
                                </div>
                            </div>

                            <div className="achievement-card gold">
                                <div className="card-medal">🥇</div>
                                <div className="card-content">
                                    <span className="card-category">Campeonato Brasileiro</span>
                                    <h4 className="card-title">Paraciclismo de Estrada</h4>
                                    <span className="card-detail">Contrarelógio</span>
                                </div>
                            </div>

                            {/* Copa Brasil */}
                            <div className="achievement-card gold double">
                                <div className="card-medal">🥇🥇</div>
                                <div className="card-content">
                                    <span className="card-category">Copa Brasil</span>
                                    <h4 className="card-title">Paraciclismo de Estrada</h4>
                                    <span className="card-detail">Contrarelógio · 2 Etapas</span>
                                </div>
                            </div>

                            <div className="achievement-card gold double">
                                <div className="card-medal">🥇🥇</div>
                                <div className="card-content">
                                    <span className="card-category">Copa Brasil</span>
                                    <h4 className="card-title">Paraciclismo de Estrada</h4>
                                    <span className="card-detail">Resistência · 2 Etapas</span>
                                </div>
                            </div>

                            {/* GP e Estadual */}
                            <div className="achievement-card gold double">
                                <div className="card-medal">🥇🥇</div>
                                <div className="card-content">
                                    <span className="card-category">GP Ciclismo</span>
                                    <h4 className="card-title">Estrada - Resistência</h4>
                                    <span className="card-tag">Sub 30 · Convencional</span>
                                </div>
                            </div>

                            <div className="achievement-card silver">
                                <div className="card-medal">🥈</div>
                                <div className="card-content">
                                    <span className="card-category">Campeonato Matogrossense</span>
                                    <h4 className="card-title">Ciclismo de Estrada</h4>
                                    <span className="card-tag">Sub 30 · Convencional</span>
                                </div>
                            </div>

                            {/* MTB */}
                            <div className="achievement-card gold">
                                <div className="card-medal">🥇</div>
                                <div className="card-content">
                                    <span className="card-category">MTB XCM</span>
                                    <h4 className="card-title">Regional</h4>
                                    <span className="card-tag">Sub 30 · Convencional</span>
                                </div>
                            </div>

                            <div className="achievement-card bronze">
                                <div className="card-medal">🥉</div>
                                <div className="card-content">
                                    <span className="card-category">MTB XCO</span>
                                    <h4 className="card-title">Regional</h4>
                                    <span className="card-tag">Sub 30 · Convencional</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2026 Goals */}
                    <div className="goals-block">
                        <div className="achievements-year-header">
                            <span className="year-badge future rounded-lg">2026</span>
                            <h3 className="year-title">Próximos Objetivos</h3>
                        </div>

                        <div className="goals-grid">
                            {/* Principais */}
                            <div className="goal-card featured">
                                <div className="goal-icon">🌎</div>
                                <div className="goal-content">
                                    <span className="goal-date">Fevereiro</span>
                                    <h4 className="goal-title">Campeonato PanAmericano</h4>
                                    <span className="goal-location">📍 Rio de Janeiro, Brasil</span>
                                </div>
                                <div className="goal-status">Principal</div>
                            </div>

                            <div className="goal-card featured">
                                <div className="goal-icon">🌎</div>
                                <div className="goal-content">
                                    <span className="goal-date">Julho</span>
                                    <h4 className="goal-title">Jogos ParaSul-Americanos</h4>
                                    <span className="goal-location">📍 Valledupar, Colômbia</span>
                                </div>
                                <div className="goal-status">Principal</div>
                            </div>

                            {/* Nacionais */}
                            <div className="goal-card">
                                <div className="goal-icon">🇧🇷</div>
                                <div className="goal-content">
                                    <h4 className="goal-title">Brasileiro de Paraciclismo</h4>
                                    <span className="goal-detail">Resistência + Contrarelógio</span>
                                </div>
                            </div>

                            <div className="goal-card">
                                <div className="goal-icon">🏆</div>
                                <div className="goal-content">
                                    <h4 className="goal-title">Copa Brasil de Paraciclismo</h4>
                                    <span className="goal-detail">Resistência + Contrarelógio</span>
                                </div>
                            </div>

                            <div className="goal-card">
                                <div className="goal-icon">🚴</div>
                                <div className="goal-content">
                                    <h4 className="goal-title">Campeonato Matogrossense</h4>
                                    <span className="goal-detail">Estrada - Resistência (Sub 30)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <BlogComponent />

            {/* Sponsors Section */}
            <SponsorsComponent />

            {/* Footer */}
            <footer className="footer section">
                <div className="container footer-content">
                    <img src={imgBrand} className="brand-logo" alt="Marca" />

                    <div className="footer-brand">
                        <p className="brand-name">Gabriel Riguiti | Paraciclista</p>

                        <div className="footer-social">
                            <a
                                href="https://api.whatsapp.com/send?phone=5565996193139&text=Ol%C3%A1%20Gabriel!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={imgWhats} alt="WhatsApp" />
                            </a>

                            <a
                                href="https://www.instagram.com/gabrielriguiti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={imgInstagram} alt="Instagram" />
                            </a>

                            <a
                                href="https://www.strava.com/athletes/45782246"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <img src={imgStrava} alt="Strava" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App;
