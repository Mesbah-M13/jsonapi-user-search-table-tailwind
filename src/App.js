import logo from "./logo.svg";
import "./App.css";
import Users from "./components/User/Users";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="mt-4">
        <Users />
      </div>
    </main>
  </div>
  );
}

export default App;
