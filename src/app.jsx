import { Header } from "./components/header";
import { TransformForm } from "./components/transform-form";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <TransformForm />
      </main>
    </div>
  );
}

export default App;
