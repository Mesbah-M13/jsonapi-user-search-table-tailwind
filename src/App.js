import "./App.css";
import Users from "./components/User/Users";

function App() {
  return (
    <div>
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="mt-4">
        <Users />
      </div>
    </main>
  </div>
  );
}

export default App;
