import "./App.css";
import Header from "./components/Header/Header";
import Routes from "./Routes";
import { PageContextProvider } from "./Helpers/PageContexts";
import SimpleBottomNavigation from "./components/MainNav";

function App() {
  return (
    <>
      <Header />
      <PageContextProvider>
        <Routes />
      </PageContextProvider>
    </>
  );
}

export default App;
