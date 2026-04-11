import "./App.css";

function App() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const metrics = [
    { value: "2+", label: "Tahun pengalaman kerja" },
    { value: "<5 Menit", label: "Rata-rata waktu resolusi" },
    { value: "13+", label: "TPH konsisten saat live chat" },
    { value: "<4%", label: "DSAT saat menangani pelanggan" },
  ];

  const coreServices = [
    {
      title: "Customer Support Excellence",
      description:
        "Penanganan inquiry multi-channel dengan empati, kecepatan, dan akurasi tinggi.",
    },
    {
      title: "Administrative Precision",
      description:
        "Pengelolaan dokumen, jadwal, serta data operasional yang rapi dan terstruktur.",
    },
    {
      title: "Audit and Reporting",
      description:
        "Verifikasi transaksi, kontrol data, dan pelaporan keuangan yang detail dan valid.",
    },
  ];

  const experiences = [
    {
      role: "Customer Service Representative",
      company: "PT Harapan Digital Utama (Paycools), Jakarta",
      period: "Desember 2025 - Sekarang",
      highlights: [
        "Menangani pertanyaan pelanggan melalui chat, email, dan telepon dengan pendekatan profesional.",
        "Mengelola hingga 5 live chat secara bersamaan sambil menjaga akurasi dan kualitas layanan.",
        "Memberikan solusi dengan rata-rata waktu resolusi kurang dari 5 menit.",
        "Mendokumentasikan interaksi pelanggan untuk tindak lanjut sesuai SOP perusahaan.",
      ],
    },
    {
      role: "English Customer Service - Live Chat",
      company: "Concentrix, Yogyakarta",
      period: "Februari 2025 - November 2025",
      highlights: [
        "Memberikan dukungan real-time kepada pelanggan internasional untuk isu produk, akun, pembayaran, dan teknis.",
        "Konsisten mencapai KPI: TPH > 13 dan DSAT < 4%.",
        "Mengurangi follow-up ticket dengan penyelesaian masalah yang cepat dan tepat.",
        "Berkolaborasi dengan tim lintas fungsi untuk penanganan kasus kompleks.",
      ],
    },
    {
      role: "Income Auditor - Account Receivable Internship",
      company: "Grand Orchid Hotel, Yogyakarta",
      period: "Juni 2024 - September 2024",
      highlights: [
        "Menganalisis dan memverifikasi 60-150 transaksi harian menggunakan VHP software.",
        "Menyusun laporan keuangan harian dan bulanan dengan peningkatan akurasi hingga 85%.",
        "Merancang alur audit transaksi yang menurunkan waktu proses hingga 20%.",
        "Memantau piutang pelanggan dan memastikan kepatuhan pada regulasi keuangan hotel.",
      ],
    },
    {
      role: "Personal Assistant",
      company: "Individual Client, Bandung",
      period: "Maret 2024 - Mei 2024",
      highlights: [
        "Mengatur jadwal harian, mingguan, dan bulanan dengan akurasi penuh tanpa bentrok.",
        "Menyiapkan laporan serta arsip digital yang meningkatkan efisiensi pencarian dokumen hingga 50%.",
        "Menangani korespondensi email, telepon, dan memo untuk komunikasi profesional.",
      ],
    },
  ];

  const technicalSkills = [
    "Microsoft Office (Word, Excel, PowerPoint)",
    "Google Workspace (Docs, Sheets, Slides, Forms, Drive)",
    "CRM Tools",
    "Canva untuk presentasi profesional",
  ];

  const softSkills = [
    "Komunikasi dan negosiasi",
    "Problem-solving dan analytical thinking",
    "Ketelitian dan attention to detail",
    "Adaptabilitas dan kolaborasi lintas tim",
    "Mampu bekerja mandiri maupun dalam tim",
  ];

  const skillLevels = [
    { name: "Customer Communication", level: 94 },
    { name: "Ticketing and CRM Handling", level: 90 },
    { name: "Administrative Documentation", level: 88 },
    { name: "Financial Data Verification", level: 84 },
    { name: "Cross-team Collaboration", level: 86 },
  ];

  const highlights = [
    "Service-oriented mindset dengan standar empati dan profesionalisme tinggi.",
    "Terbiasa multitasking pada workload tinggi tanpa mengorbankan kualitas.",
    "Kuat pada dokumentasi, ketelitian data, dan follow-up terstruktur.",
  ];

  return (
    <div className="page">
      <header className="topbar">
        <a href="#home" className="brand">
          <span>VG</span>
          <strong>Vidy Gita</strong>
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="badge">
              Customer Service • Administrative • Auditing
            </p>
            <h1>VIDY GITA SALSABILA SURA WECANA</h1>
            <p className="hero-subtitle">
              Professional yang fokus pada service quality, operational
              discipline, dan problem-solving di lingkungan kerja cepat.
              Berpengalaman menangani pelanggan internasional, pengelolaan
              administrasi, dan kontrol data berbasis ketelitian.
            </p>
            <div className="hero-actions">
              <a href="mailto:gitavidy@gmail.com" className="btn btn-primary">
                Hire Me
              </a>
              <a href="tel:+6285867569060" className="btn btn-secondary">
                Contact Now
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-kicker">Current Role</p>
            <h2>Customer Service Representative</h2>
            <p>PT Harapan Digital Utama (Paycools)</p>
            <ul>
              <li>Lokasi: Purwokerto, Central Java</li>
              <li>Bahasa kerja: Indonesia & English</li>
              <li>Status: Open to opportunities</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="metric-strip">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <h3>{metric.value}</h3>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>

      <section className="highlight-band">
        <div className="section-head compact">
          <p>Why Hire Me</p>
          <h2>Reliable, Fast, and Detail-Driven</h2>
        </div>
        <div className="highlight-list">
          {highlights.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <main className="content">
        <section className="card" id="about">
          <div className="section-head">
            <p>About Me</p>
            <h2>Human-Centered Service with Structured Execution</h2>
          </div>
          <p>
            Berpengalaman sebagai English Live Chat Customer Service
            Representative dengan performa KPI konsisten. Memiliki rekam jejak
            dalam penanganan pelanggan, administrasi dokumentasi, dan verifikasi
            data keuangan. Mengutamakan komunikasi yang jelas, keputusan cepat,
            dan kualitas layanan end-to-end.
          </p>

          <div className="services-grid">
            {coreServices.map((service) => (
              <article key={service.title} className="service-item">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card" id="experience">
          <div className="section-head">
            <p>Experience</p>
            <h2>Career Journey</h2>
          </div>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article
                className="experience-card"
                key={`${item.company}-${item.period}`}
              >
                <p className="meta">{item.period}</p>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid-two" id="skills">
          <article className="card">
            <div className="section-head">
              <p>Skill Matrix</p>
              <h2>Core Competencies</h2>
            </div>
            <div className="progress-list">
              {skillLevels.map((skill) => (
                <div className="progress-item" key={skill.name}>
                  <div className="progress-label">
                    <span>{skill.name}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="progress-track">
                    <span style={{ width: `${skill.level}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="section-head">
              <p>Education</p>
              <h2>Academic Foundation</h2>
            </div>
            <article>
              <h3>Universitas Islam Negeri Sunan Gunung Djati Bandung</h3>
              <p className="meta">
                2020 - 2024 • Bachelor of Humanities in Islamic History and
                Civilization • GPA 3.72
              </p>
              <ul>
                <li>
                  Mengembangkan kemampuan report writing dan pengorganisasian
                  data.
                </li>
                <li>
                  Melatih ketelitian melalui proses verifikasi sumber dan
                  analisis data.
                </li>
                <li>
                  Mengelola dokumen akademik secara digital dengan klasifikasi
                  berbasis spreadsheet.
                </li>
              </ul>
            </article>
          </article>
        </section>

        <section className="grid-two">
          <article className="card">
            <h2>Technical Skills</h2>
            <ul className="chip-list">
              {technicalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h2>Soft Skills</h2>
            <ul className="chip-list">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="grid-two">
          <article className="card">
            <h2>Language Skills</h2>
            <ul>
              <li>Bahasa Indonesia: Advanced (Native)</li>
              <li>English: Intermediate (Professional Working Proficiency)</li>
            </ul>
          </article>

          <article className="card">
            <h2>Career Interests</h2>
            <ul>
              <li>Customer Service</li>
              <li>Management Administrative</li>
              <li>Auditing</li>
            </ul>
          </article>
        </section>

        <section className="card contact-card" id="contact">
          <div className="section-head">
            <p>Contact</p>
            <h2>Let&apos;s Work Together</h2>
          </div>
          <p>
            Saya terbuka untuk peluang kerja yang membutuhkan kombinasi service
            mindset, administrasi presisi, dan kemampuan audit operasional.
          </p>
          <div className="contact-row dark">
            <a href="mailto:gitavidy@gmail.com">gitavidy@gmail.com</a>
            <a href="tel:+6285867569060">085867569060</a>
            <a href="https://wa.me/6285867569060" target="_blank" rel="noreferrer">
              WhatsApp Chat
            </a>
            <span>Purwokerto, Banyumas, Central Java</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built for modern professional branding - 2026 Portfolio Edition.</p>
      </footer>
    </div>
  );
}

export default App;
