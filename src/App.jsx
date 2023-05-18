import imgBG from "../public/images/mujer-app.jpg";
import Main from "./components/Main";
import Header from "./components/Header";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 ">
      <div className="h-screen relative lg:col-span-4">
        <img
          src={imgBG}
          alt="mujer posando sonriente"
          className="h-screen w-full object-cover grayscale"
        />
        <span className="absolute w-28 h-28 bg-pink-500/80 rounded-full -top-14 -left-14"></span>
      </div>
      <div className="lg:col-span-8">
        <Header />
        <hr className="border-1" />
        <span
          className="absolute w-40 h-40 bg-pink-500/50 rounded-full -top-16 -right-20 shadow-2xl"
        ></span>
        <Main />
      </div>
    </div>
  );
}

export default App;
