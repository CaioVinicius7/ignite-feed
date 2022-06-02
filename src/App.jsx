import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import { Post } from "./Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Caio Vinícius"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <Post
            author="Ellen Bessa"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
        </main>
      </div>
    </div>
  );
}

export default App
