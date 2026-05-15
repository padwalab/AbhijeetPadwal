import './Resume.css';

export default function Resume() {
  return (
    <article className="resume">
      {/* Header */}
      <div className="resume-header">
        <div className="header-row">
          <div className="header-left">
            <p>333 Sunol St,<br />San Jose, CA 95126</p>
          </div>
          <div className="header-center">
            <h1>ABHIJEET PADWAL</h1>
            <p className="contact-links">
              <a href="https://github.com/padwalab">github.com/padwalab</a> • 
              <a href="https://linkedin.com/in/abhijeetpadwal">linkedin.com/in/abhijeetpadwal</a>
            </p>
          </div>
          <div className="header-right">
            <p>+1 (408) 207-8784<br />
            <a href="mailto:padwalab@gmail.com">padwalab@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <section className="resume-section">
        <h2>TECHNICAL SKILLS</h2>
        <div className="skills-content">
          <p><strong>Programming Languages:</strong> Go, Java, Python, JavaScript, Shell Scripting (Bash), SQL</p>
          <p><strong>Distributed Systems:</strong> Kafka, Flink, Beam, Spark, Stream Processing, Big Data Analytics</p>
          <p><strong>Databases & Storage:</strong> PostgreSQL, MongoDB, Redis, Pinot, Kusto, Azure MDM, HDFS, Hive, Trino</p>
          <p><strong>Tools & Technologies:</strong> Docker, Kubernetes, Grafana, Grafana plugins, OpenTelemetry, FluentBit</p>
        </div>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>EXPERIENCE</h2>

        <div className="experience-item">
          <div className="experience-header">
            <h3><strong>LinkedIn</strong></h3>
            <span className="location">Sunnyvale, CA</span>
          </div>
          <p className="position"><em>Sr. Software Engineer (Member Observability Data Platform)</em></p>
          <p className="dates">Jan 2022 – Present</p>
          <ul>
            <li><strong>Accelerated processing speeds</strong> by leading the migration of crash reporting and site speed pipelines, reducing crash metric latency from 15 minutes to 1 minute and site speed processing from 1 day to 1 minute.</li>
            <li><strong>Built foundational streaming components</strong> including Kafka event processing, dimension extraction, event throttling, validation, and metric extraction to enable reusable, real-time processing of observability data.</li>
            <li><strong>Engineered real-time crash pipelines</strong> streaming ~500M web/mobile error events daily, conducting stacktrace unminification and symbolication with automated exception ticketing and dark canary validation.</li>
            <li><strong>Designed and operationalized an automated site speed regression detection system</strong> for 10+ workflows processing ~10 TB/day of telemetry, cutting manual pipeline interventions by 90% via automated backfill handling and ticket resolution.</li>
            <li><strong>Integrated performance metrics</strong> directly into the A/B testing experimentation platform, making regressions an automated blocker for build ramps and successfully preventing ~200 regressions over 6 months.</li>
            <li><strong>Operationalized metrics</strong> by building Grafana dashboards on top of the MDM metric data store, driving down reporting delays and reducing custom alerting time-to-detection to 30 minutes.</li>
            <li><strong>Collaborated with the Abuse security team</strong> to implement bot and scraper traffic filters, significantly reducing false-positive regressions and maximizing signal-to-noise across performance alerts.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3><strong>TIBCO Software Inc.</strong></h3>
            <span className="location">Pune, MH, India</span>
          </div>
          <p className="position"><em>AMTS, QA</em></p>
          <p className="dates">July 2018 – Jan 2021</p>
          <ul>
            <li><strong>Optimized legacy automation runtime</strong> and resolved critical Java heap space and garbage collection bottlenecks by modifying internal test framework configuration build files and jars.</li>
            <li><strong>Validated robust REST-JSON plugin features</strong> for the BW5 platform and orchestrated validation workflows for MongoDB plugins deployed on BW6.</li>
            <li><strong>Configured and evaluated distributed Apache Hadoop clusters</strong> and containerized applications using Docker to validate big data plugin extensions.</li>
          </ul>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="resume-section">
        <h2>ACADEMIC PROJECTS</h2>

        <div className="project-item">
          <div className="project-header">
            <h3><strong>BitCorner (Bitcoin Exchange Platform)</strong></h3>
            <span className="tech"><em>Java, Spring Boot, React, Redux, PostgreSQL</em></span>
          </div>
          <p className="dates">Apr 2021 – May 2021</p>
          <ul>
            <li><strong>Engineered a fair order execution matching algorithm</strong> to process real-time market and limit price transaction requests for cryptocurrency exchange.</li>
            <li><strong>Designed and deployed a microservices-based system architecture</strong> to AWS, integrating localized billing and multi-currency exchange handling via JPA ORM.</li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h3><strong>eDiligence (Containerized Infrastructure Platform)</strong></h3>
            <span className="tech"><em>Go, Nginx, Docker, GitHub Actions</em></span>
          </div>
          <p className="dates">Aug 2020 – Dec 2020</p>
          <ul>
            <li><strong>Architected a scalable, microservices-oriented backend structure</strong> from scratch using Go, optimizing resource allocation to minimize infrastructure deployment costs on DigitalOcean.</li>
            <li><strong>Implemented an Nginx API Gateway</strong> alongside continuous integration pipelines (GitHub Actions) integrated with a validation test framework to accelerate artifact build-and-release cycles.</li>
          </ul>
        </div>

        <div className="project-item">
          <div className="project-header">
            <h3><strong>Full-Stack Application Clones</strong></h3>
            <span className="tech"><em>Reddit, Splitwise</em></span>
          </div>
          <ul>
            <li>Developed full-stack web application clones of Reddit and Splitwise to master advanced state management, relational schema modeling, and complex business logic implementation.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>EDUCATION</h2>

        <div className="education-item">
          <div className="education-header">
            <h3><strong>San Jose State University</strong></h3>
            <span className="location">San Jose, CA</span>
          </div>
          <p className="degree"><em>Master of Science in Computer Software Engineering</em></p>
          <p className="dates">Aug 2020 – May 2022</p>
          <p className="coursework"><strong>Coursework:</strong> Software Security, Big Data Engineering, Systems Engineering, Distributed Systems, Enterprise Application Development, Data Mining, Advanced Parallel Systems.</p>
        </div>
      </section>
    </article>
  );
}
