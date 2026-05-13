import './App.css'

function App() {
  return (
    <main className="app">
      <header className="resume-header">
        <div>
          <h1>ABHIJEET PADWAL</h1>
          <p>818 Cedar Ave, Sunnyvale, CA 94086</p>
        </div>
        <div className="contact">
          <a href="tel:+14082078784">+1 (408) 207-8784</a>
          <a href="mailto:padwalab@gmail.com">padwalab@gmail.com</a>
          <a href="/AbhijeetPadwal-Resume.pdf" target="_blank" rel="noreferrer">
            PDF Version
          </a>
        </div>
      </header>

      <section>
        <h2>Employment</h2>

        <article>
          <h3>LinkedIn | Sr. Software Engineer | Jan 2022 - Present</h3>
          <h4>Member Observability Data Platform - LinkedIn</h4>
          <ul>
            <li>
              <strong>Unified Data Platform:</strong> Built foundational components (Kafka event processing, dimension
              extraction,
              event throttling, event validation, metric extraction) for standardized and high-performance real-time
              observability processing.
            </li>
            <li>
              <strong>Real-Time Processing Migration:</strong> Led crash reporting and site speed migration to the new
              platform, reducing crash
              latency from 15 minutes to 1 minute and site speed processing from 1 day to 1 minute.
            </li>
            <li>
              <strong>Real-Time Monitoring:</strong> Built Grafana dashboards on MDM metric store data, reducing
              reporting delays and
              enabling near real-time production debugging.
            </li>
          </ul>

          <h4>Crash Reporting - LinkedIn</h4>
          <ul>
            <li>
              <strong>Real-Time Crash Pipelines:</strong> Built stream processing for about 500M web/mobile error
              events daily, including stacktrace
              unminification/symbolication and consistent error grouping for production bug detection.
            </li>
            <li>
              Maintained high-throughput exception pipelines with automated ticketing and dark canary validation for
              pre-production error detection.
            </li>
            <li>
              <strong>Crash Metric Operationalization:</strong> Operationalized crash metrics with custom alerting,
              reducing time-to-detection to around 30 minutes.
            </li>
            <li>
              <strong>Experimentation Platform Integration:</strong> Integrated crash metrics with experimentation (A/B
              testing) to power daily reports and near real-time
              prevention of further ramps for buggy experiments/builds.
            </li>
          </ul>

          <h4>Performance and Site Speed Monitoring - LinkedIn</h4>
          <ul>
            <li>
              <strong>Scalable Performance Analytics:</strong> Built Spark pipelines processing about 10 TB/day of
              telemetry across 10+ workflows for global site speed
              monitoring used by 400-500 engineers.
            </li>
            <li>
              <strong>Regression Detection and Alerting:</strong> Designed automated site speed regression detection and
              alerting, replacing manual discovery with
              guaranteed detection across backend, network, and page-load slowdowns.
            </li>
            <li>
              <strong>Experiment Impact Reporting:</strong> Integrated performance metrics into A/B testing so
              regressions block ramps; prevented about 200
              regressions in 6 months.
            </li>
            <li>
              <strong>Automation and Toil Reduction:</strong> Automated Spark monitoring, backfill handling, and
              regression ticket resolution, reducing interventions
              by 90% and eliminating manual regression ticket handling.
            </li>
            <li>
              <strong>Cross-Team Collaboration:</strong> Partnered with Abuse teams to detect/filter bot and scraper
              traffic, cutting false positives and
              improving signal quality.
            </li>
          </ul>
        </article>

        <article>
          <h3>TIBCO | Software Engineer | July 2018 - Jan 2021</h3>
          <ul>
            <li>Developed data connectors for iPaaS platform Flogo (no-code integration).</li>
            <li>Built microservices for SQL autocomplete, query composition, and validation.</li>
            <li>Developed containerized Flogo connectors automation framework.</li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong> Python, Java, Golang, JavaScript, Scala
          </li>
          <li>
            <strong>Data Processing and Streaming:</strong> Apache Flink, Apache Beam, Apache Spark, Kafka, Samza,
            stream processing,
            offline data processing, big data analytics
          </li>
          <li>
            <strong>Databases and Storage:</strong> PostgreSQL, MySQL, MongoDB, Redis, Apache Pinot (OLAP), HDFS,
            Kusto, MDM
          </li>
          <li>
            <strong>Tools and Technologies:</strong> AWS, Docker, CI/CD, Grafana, OpenTelemetry, Crash Analytics,
            A/B testing
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <article>
          <h3>San Jose State University | MS Computer Software Engineering | Aug 2020 - May 2022</h3>
          <p>
            <strong>Coursework:</strong> Software Security, Big Data Engineering, Systems Engineering, Software
            Overview, Distributed Systems, Enterprise Application Development, Data Mining, Advanced Parallel Systems
          </p>
        </article>
      </section>

      <section>
        <h2>Academic Projects</h2>
        <ul>
          <li>
            <strong>BitCorner</strong> <em>[Apr 2021 - May 2021]</em>: Bitcoin exchange platform with market/limit
            orders. Built fair order
            execution and bill payments with currency exchanges. Java Spring Boot backend, React Redux frontend,
            PostgreSQL, JPA ORM, AWS microservices deployment.
          </li>
          <li>
            <strong>eDiligence</strong> <em>[Aug 2020 - Dec 2020]</em>: Designed and built containerized backend
            infrastructure optimized for
            deployment costs. Implemented microservices architecture with Golang services and Nginx API gateway,
            integrated CI pipelines and validation tests.
          </li>
          <li>
            Built <strong>Reddit</strong> and <strong>SplitWise</strong> web application clones.
          </li>
        </ul>
      </section>

      <section>
        <h2>Additional Awards</h2>
        <ul>
          <li>LinkedIn - Top bounty for "Time Saver"</li>
          <li>Scholarship for 4 year Engineering Program</li>
        </ul>
      </section>
    </main>
  )
}

export default App
