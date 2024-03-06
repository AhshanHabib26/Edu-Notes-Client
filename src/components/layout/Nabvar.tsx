import { Link } from "react-router-dom";
import logoImg from "../../assets/images/Logo.png";
import { AlignJustify } from "lucide-react";
import { Drawer } from "@mantine/core";
import { useState } from "react";

export default function Nabvar() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="bg-green-100">
      <div className="flex items-center justify-between mx-5 p-3">
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] object-cover"
            src={logoImg}
            alt="Website Logo"
          />
          <h1 className="text-xl font-semibold ml-1">EduNotes</h1>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Link className="text-lg mr-3 cursor-pointer" to="/">
              Home
            </Link>
            <Link className="text-lg mr-3 cursor-pointer" to="/">
              Courses
            </Link>
            <Link className="text-lg mr-3 cursor-pointer" to="/">
              About Us
            </Link>
            <Link className="text-lg mr-3 cursor-pointer" to="/">
              Contact Us
            </Link>
            <Link className="text-lg mr-3 cursor-pointer" to="/">
              Register
            </Link>
          </div>
          <div className="">
            <Drawer.Root
              opened={opened}
              onClose={() => setOpened(false)}
              position="right"
              size="xs"
            >
              <Drawer.Overlay backgroundOpacity={0.2} blur={2} />
              <Drawer.Content>
                <Drawer.Header>
                  <div className=" border-b-2 w-full flex items-center pb-2 border-green-50">
                    <Drawer.Title>
                      <div className="flex items-center">
                        <img
                          className="w-[30px] h-[30px] object-cover"
                          src={logoImg}
                          alt="Website Logo"
                        />
                        <h1 className="text-lg font-semibold ml-1">EduNotes</h1>
                      </div>
                    </Drawer.Title>
                    <Drawer.CloseButton />
                  </div>
                </Drawer.Header>
                <Drawer.Body>Drawer content</Drawer.Body>
              </Drawer.Content>
            </Drawer.Root>

            <button onClick={() => setOpened(true)}>
              <AlignJustify />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
