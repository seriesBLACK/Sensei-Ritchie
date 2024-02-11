import { About } from "./components/About";
import { FloatingNav } from "./components/FloatingNav";
import { Lamp } from "./components/Lamp";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function App() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (

    <div className="">

      <div className="h-[100vh]">
        <FloatingNav navItems={navItems} />
        <Lamp />
      </div>
      <div className="h-[100vh]">
        <About />

      </div>

    </div>

  )
}
