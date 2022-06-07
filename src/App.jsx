import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: "fd1295af-a1c5-4326-b497-30ab6997fe2e",
    author: {
      avatarUrl: "https://github.com/CaioVinicius7.png",
      name: "Caio Vinícius",
      role: "Web Developer"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2022-06-06 17:00:00")
  },
  {
    id: "48d41055-9610-482b-b6f1-14989f070528",
    author: {
      avatarUrl: "https://github.com/pedroserodio1.png",
      name: "Pedro Henrique",
      role: "Web Developer"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2022-06-04 16:00:00")
  }
]

function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App
