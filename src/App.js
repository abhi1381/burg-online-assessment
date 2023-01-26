import { Provider } from "react-redux";
import store from "./store";
import UsersList from "./components/UsersList";
import "./App.css";
import RevenueAnalyticsChart from "./components/RevenueAnalyticsChart";

function App() {
  return (
    <Provider store={store}>
      <UsersList />
      <div className="card">
        <div className="topContent">
          <h2>Sales This Months</h2>
          <h4>Users from all channels</h4>
          <div>
            <h1>
              <span>$</span>14,094
            </h1>
            <h4>Another $48,346 to Goal</h4>
          </div>
        </div>
        <div style={{ width: "80vw", height: "70vh" }}>
          <RevenueAnalyticsChart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
