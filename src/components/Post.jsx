import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar} 
            src="https://github.com/CaioVinicius7.png"
          />
          <div className={styles.authorInfo}>
            <strong> Caio Vinícius </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="6 de junho ás 08:13h" dateTime="2022-06-02 08:13:30"> 
          Publicado há 1h
        </time>

        <div className={styles.content}>
          <p> Fala galera 👋 </p>

          <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

          <p> 👉 <a href="#"> jane.design/doctorcare  </a> </p>

          <p> <a href=""> #novoprojeto #nlw  #rocketseat </a> </p>
        </div>
      </header>  
    </article>
  );
}