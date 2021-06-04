import { Provider as AuthProvider } from "next-auth/client";
import { Provider } from "react-redux"
import "../styles/globals.css";
import store from "../app/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
