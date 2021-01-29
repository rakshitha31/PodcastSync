import { authEndpoint, clientId, redirectUri, scopes } from "./config";
function App() {

  const login = (e) => {
    e.preventDefault();

    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="w-full h-screen flex flex-wrap place-items-center justify-center">
      <button onClick={login} class="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
        Login
      </button>
    </div>
  );
}

export default App;
