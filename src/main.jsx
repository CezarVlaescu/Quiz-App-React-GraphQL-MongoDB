import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import client from "./apolloClient.js";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";

// Our React app needs access to client, auth context, browser router

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>,
);
