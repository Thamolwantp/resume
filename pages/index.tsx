import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>MY RESUME</h1>
        <nav className={styles.nav}>
          <a href="#about">ABOUT ME</a>
          <a href="#skills">MY SKILLS</a>
          <a href="#projects">PROJECTS</a>
        </nav>
      </header>

      <section className={styles.section} id="about">
        <div className={styles.card}>
          <div className={styles.picture}>
            <Image
              src="/image/My.jpg"   // Path ที่ถูกต้อง
              alt="Description of Image"     // คำอธิบายของรูปภาพ
              width={400}                    // ความกว้าง
              height={400}                  // ความสูง
            />
          </div>
          <div>
            <h2>HELLO, I’M THAMONWAN </h2>
            <p className={styles.text}>
            I’m truly excited and honored that you have taken an interest in my resume. It means a lot to me, and I am hopeful that in the future, there will be an opportunity for us to collaborate and work together. I believe that with our combined skills and expertise, we could accomplish great things and contribute to each other’s success.
            </p>
            <h3>information</h3>
            <ul className={styles.text}>
              <li>Name Thamonwan Tonphong</li>
              <li>Age 20</li>
              <li>Bachelor degree</li>
              <li>Software engineering</li>
              <li>Phayao of University</li>
            </ul>
            <h3 className={styles.text}>Contact</h3>
            <div className={styles.contact}>
              <button>Tel 064-360-6328</button>
              <button>Email Thamolwan.yong@gmail.com</button>
              <button>Line</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="skills">
        <h2>MY SKILLS</h2>
        <div className={styles.skills}>
          <div>
            <h3>PROGRAMMING</h3>
            <ul>
              <li>UX/UI DESIGN</li>
              <li>DATABASE</li>
              <li>HTML/CSS</li>
            </ul>
            <h3>TOOLS</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>XAMPP</li>
              <li>Figma</li>
            </ul>
            <h3>LANGUAGE</h3>
            <p>ENGLISH (medium)</p><br/>
          </div>
          <div className={styles.circlePicture}>
          <Image
              src="/image/chart.png"   // Path ที่ถูกต้อง
              alt="Description of Image"     // คำอธิบายของรูปภาพ
              width={400}                    // ความกว้าง
              height={400}                  // ความสูง
            />
          </div>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <h2>PROJECT</h2>
        <div className={styles.project}>
          <div className={styles.projectImage}>
          <Image
              src="/image/fig1.png"   // Path ที่ถูกต้อง
              alt="Description of Image"     // คำอธิบายของรูปภาพ
              width={950}                    // ความกว้าง
              height={450}                  // ความสูง
            />
          </div>
          <div className={styles.textproj}>
            <h3>VESTRA CINEPLAX</h3>
            <p>text text An elegantly designed and intuitive movie ticket booking website that provides a seamless user experience</p>
            <button>veiw</button>
          </div><br/><br/><br/>
          <div className={styles.projectImage} >
          <Image
              src="/image/fig2.png"   // Path ที่ถูกต้อง
              alt="Description of Image"     // คำอธิบายของรูปภาพ
              width={950}                    // ความกว้าง
              height={450}                  // ความสูง
            />
          </div>
          <div className={styles.textproj}>
            <h3>FOOD HOUSE</h3>
            <p>A charming and visually appealing recipe website designed with a cute style and vibrant colors that are sure to stimulate your appetite and make you crave delicious food</p>
            <button>veiw</button>
          </div>
        </div>
      </section>
    </div>
  );
}
