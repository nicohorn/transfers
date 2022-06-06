import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "./components/slider";
import FloatingWhatsApp from "react-floating-whatsapp";

export default function Home() {
  return (
    <>
      <Slider />
      <FloatingWhatsApp
        phoneNumber="+54 9 11 4474-2207"
        accountName="Diego"
        avatar="/profilewpp.jpg"
        statusMessage="Typically replies within 20 minutes"
        chatMessage={`Hello there! 🤝 \nHow can I help? `}
      />
    </>
  );
}
