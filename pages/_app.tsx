import "../styles/globals.css";
import Navbar from "./components/navbar";
import FloatingWhatsApp from "react-floating-whatsapp";

import { isReadable } from "stream";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+54 9 11 4474-2207"
        accountName="Diego"
        avatar="/profilewpp.jpg"
        statusMessage="If I am not riding I will reply on next 10 minutes."
        chatMessage={`Hello there! 🤝 \nHow can I help? `}
        className="z-20"
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
