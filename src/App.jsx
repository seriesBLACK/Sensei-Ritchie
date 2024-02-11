import { useRef, useState } from "react";
import { About } from "./components/About";
import { FloatingNav } from "./components/FloatingNav";
import { Hero } from "./components/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function App() {
  const [message, setMessage] = useState('');
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const navItems = [
    {
      name: "Home",
      link: "0",
      icon: <IconHome onClick={() => home.current.scrollIntoView({ behavior: 'smooth' })} className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "750",
      icon: <IconUser onClick={() => about.current.scrollIntoView({ behavior: 'smooth' })} className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "1500",
      icon: (
        <IconMessage onClick={() => contact.current.scrollIntoView({ behavior: 'smooth' })} className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (

    <div className="">

      <div className="h-[100vh]" ref={home}>
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
      <div className="h-[100vh]" ref={about}>
        <About />

      </div>
      <div ref={contact} className="h-[50rem] w-full bg-gradient-to-b from-slate-950 to-blue-950 flex flex-col items-center justify-center gap-4">

        <p className="text-4xl sm:text-7xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Tell Me Something ?
        </p>
        <textarea className="sm:w-[30px] text-center" style={{ width: '58%', height: '60px', borderRadius: "3%", padding: "5px" }} name="Message" id="Message" rows="2" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Type your message here and your preferred way of communication "></textarea>
        <a href={`mailto:the.ritchie.sensei@gmail.com?Subject=communication_request?body=${message}`}>
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-blue-500 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-5">
            Send It
          </button>
        </a>

      </div>

    </div>

  )
}
