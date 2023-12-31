import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Banner from "./components/Banner";
import MenuPage from "./components/MenuPage";
//import Navigation from './components/Navigation';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useJsonQuery } from "./utilities/fetch";
import Dispatcher from './components/Dispatcher';
import { DBData } from './utilities/firebase';


const Main = () => {
  // const [data, isLoading, error] = useJsonQuery(
  //   "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
  // );

  const [data, error] = DBData('/');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  // if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  // console.log(data.courses);

  return (
    <div>
      <Banner title={data.title}></Banner>
      {/* <MenuPage data = {data} /> */}
      <Dispatcher data={ data } />
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    
    <div className="container">
      
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </div>
  );
};
export default App;
