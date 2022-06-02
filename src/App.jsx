import "./styles.css";
import { Header } from "./components/header";
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header></Header>

      <Post
        author="Caio Vinícius"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <Post
        author="Ellen Bessa"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
    </div>
  );
}

export default App
