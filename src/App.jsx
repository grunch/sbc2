import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  GraduationCap,
  LayoutGrid,
  LineChart,
  Menu,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'
import './App.css'

const services = [
  {
    icon: Users,
    title: 'Atracción y selección de talento',
    description:
      'Diseñamos procesos de reclutamiento más claros, ágiles y alineados con el perfil que tu empresa realmente necesita.',
  },
  {
    icon: Building2,
    title: 'Desarrollo organizacional',
    description:
      'Ordenamos estructuras, roles y dinámicas internas para que el crecimiento no se convierta en caos.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación y formación',
    description:
      'Creamos programas de aprendizaje útiles, con objetivos concretos y aplicables al día a día del equipo.',
  },
  {
    icon: LineChart,
    title: 'Evaluación y desempeño',
    description:
      'Convertimos la evaluación en una herramienta de mejora, no en un trámite burocrático sin impacto.',
  },
]

const differentiators = [
  {
    icon: Target,
    title: 'Enfoque estratégico',
    description:
      'Alineamos la gestión humana con los objetivos reales del negocio, no con discursos vacíos de consultoría.',
  },
  {
    icon: Sparkles,
    title: 'Soluciones a medida',
    description:
      'Cada organización tiene una historia distinta. Diseñamos respuestas útiles, no recetas genéricas.',
  },
  {
    icon: ShieldCheck,
    title: 'Acompañamiento serio',
    description:
      'Trabajamos con criterio, claridad y seguimiento. La idea es resolver, no solo entregar un informe bonito.',
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos el contexto, detectamos los nudos reales y definimos prioridades con claridad.',
  },
  {
    step: '02',
    title: 'Diseño de solución',
    description:
      'Construimos una propuesta específica para tu empresa, con foco en impacto y viabilidad.',
  },
  {
    step: '03',
    title: 'Implementación',
    description:
      'Acompañamos la ejecución para que la estrategia no se quede atrapada en PowerPoint.',
  },
  {
    step: '04',
    title: 'Evaluación y mejora',
    description:
      'Medimos resultados, ajustamos lo necesario y dejamos procesos más sólidos que antes.',
  },
]

const cases = [
  {
    title: 'Optimización de selección',
    description:
      'Rediseñamos el proceso de reclutamiento para reducir tiempos de contratación y mejorar el ajuste de perfiles.',
  },
  {
    title: 'Fortalecimiento organizacional',
    description:
      'Alineamos estructura, roles y comunicación interna para dar soporte a una etapa de crecimiento acelerado.',
  },
  {
    title: 'Programas de formación',
    description:
      'Diseñamos rutas de aprendizaje orientadas a desempeño, liderazgo y desarrollo de equipos.',
  },
]

function LogoMark() {
  return (
    <div className="logo-lockup" aria-label="SBC Consultores">
      <div className="logo-mark" aria-hidden="true">
        <span className="logo-s">S</span>
      </div>
      <div className="logo-text">
        <span className="logo-main">SBC</span>
        <span className="logo-sub">CONSULTORES</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-row">
          <LogoMark />

          <nav className="desktop-nav" aria-label="Principal">
            <a href="#servicios">Servicios</a>
            <a href="#metodologia">Metodología</a>
            <a href="#valor">Valor</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="nav-cta" href="#contacto">
            Solicitar diagnóstico
          </a>

          <button className="mobile-nav-button" aria-label="Abrir menú" type="button">
            <Menu size={20} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <BadgeCheck size={16} />
                Consultoría organizacional y gestión humana
              </div>
              <h1>Transformamos la gestión humana en una ventaja estratégica</h1>
              <p className="hero-text">
                Ayudamos a empresas a atraer, desarrollar y organizar su talento con
                soluciones claras, modernas y alineadas con sus objetivos de negocio.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacto">
                  Solicitar diagnóstico
                  <ArrowRight size={18} />
                </a>
                <a className="button button-secondary" href="#servicios">
                  Conocer servicios
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-card hero-card-main">
                <div className="hero-card-header">
                  <span>Gestión humana con criterio</span>
                  <span className="status-dot"></span>
                </div>
                <div className="hero-metrics">
                  <div>
                    <strong>Selección</strong>
                    <span>Perfiles mejor alineados al negocio</span>
                  </div>
                  <div>
                    <strong>Cultura</strong>
                    <span>Equipos más claros, conectados y sostenibles</span>
                  </div>
                  <div>
                    <strong>Desarrollo</strong>
                    <span>Procesos accionables, no burocracia</span>
                  </div>
                </div>
              </div>

              <div className="hero-card hero-card-floating top-card">
                <Briefcase size={20} />
                <div>
                  <strong>Soluciones a medida</strong>
                  <span>Diseñadas para cada organización</span>
                </div>
              </div>

              <div className="hero-card hero-card-floating bottom-card">
                <LayoutGrid size={20} />
                <div>
                  <strong>Procesos más claros</strong>
                  <span>Estructura, desempeño y acompañamiento</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-grid">
            <div>
              <strong>+15 años</strong>
              <span>acompañando procesos de gestión humana</span>
            </div>
            <div>
              <strong>Consultoría</strong>
              <span>orientada a resultados y contexto real</span>
            </div>
            <div>
              <strong>Equipos</strong>
              <span>más claros, mejor organizados y mejor preparados</span>
            </div>
            <div>
              <strong>Empresas</strong>
              <span>de distintos sectores y etapas de crecimiento</span>
            </div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Qué hacemos</span>
              <h2>Soluciones en gestión humana para organizaciones que quieren crecer mejor</h2>
              <p>
                Diseñamos servicios pensados para resolver retos concretos de estructura,
                talento, desempeño y desarrollo organizacional.
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ icon: Icon, title, description }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="valor">
          <div className="container value-grid">
            <div className="value-copy">
              <span className="section-kicker">Propuesta de valor</span>
              <h2>Más que servicios de RRHH, diseñamos procesos que fortalecen a tu organización</h2>
              <p>
                Nuestro trabajo conecta estrategia, personas y operación para que la
                gestión humana deje de ser un área reactiva y se convierta en un motor real de crecimiento.
              </p>
            </div>

            <div className="value-cards">
              {differentiators.map(({ icon: Icon, title, description }) => (
                <article className="value-card" key={title}>
                  <Icon size={20} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="metodologia">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Cómo trabajamos</span>
              <h2>Una metodología clara para convertir necesidades en resultados</h2>
              <p>
                Sin vueltas raras. Entendemos el problema, diseñamos una solución útil,
                acompañamos la ejecución y medimos el impacto.
              </p>
            </div>

            <div className="process-grid">
              {process.map(({ step, title, description }) => (
                <article className="process-card" key={step}>
                  <span className="process-step">{step}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container dark-grid">
            <div>
              <span className="section-kicker light-kicker">Resultados</span>
              <h2>Intervenciones pensadas para generar impacto real</h2>
              <p>
                Desde selección hasta desarrollo organizacional, el foco está en resolver
                mejor, ordenar mejor y dejar capacidades instaladas.
              </p>
            </div>

            <div className="case-list">
              {cases.map(({ title, description }) => (
                <article className="case-card" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="container testimonial-box">
            <MessageSquareQuote size={28} />
            <blockquote>
              “La gestión humana no debería limitarse a cubrir vacantes o resolver urgencias.
              Bien trabajada, se convierte en una ventaja estratégica para toda la organización.”
            </blockquote>
            <p>SBC Consultores</p>
          </div>
        </section>

        <section className="section cta-section" id="contacto">
          <div className="container cta-box">
            <div>
              <span className="section-kicker">Hablemos</span>
              <h2>Tu empresa puede verse mejor por dentro y por fuera</h2>
              <p>
                Si necesitas fortalecer tu gestión humana con una mirada moderna,
                estratégica y aterrizada, aquí estamos.
              </p>
            </div>

            <a className="button button-primary" href="mailto:contacto@sbc.com.ve">
              Solicitar una consulta
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
