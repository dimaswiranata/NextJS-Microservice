import Router from "next/router";
import { ToastContainer } from "react-toastify";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import "../../tailwindcss/style.css";

NProgress.configure({ showSpinner: false }); //showSpinner: false
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </> 
  );
}

export default MyApp
