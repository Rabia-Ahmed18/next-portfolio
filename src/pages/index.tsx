import Image from "next/image";
import Link from "next/link";
import girl from "../../public/images/girl.png";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-gray-500">
        <div className="container mx-auto flex">
          <div className="sidebar bg-yellow-500 text-black p-6 rounded-md">
            <nav>
              <ul className="space-y-4">
                <li>
                  <h1 className="text-3xl font-bold">Rabia Ahmed</h1>
                </li>
                <li className="flex items-center">
                  &emsp;
                  <Link href={"#"} className="ml-1 mt-4">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  &emsp;
                  <Link href="/projects" className="ml-1">
                    {" "}
                    My Projects
                  </Link>
                </li>

                {/* <li className="flex items-center">
                  &emsp;
                  <Link href="/contact" className="ml-1">
                    Contact Me
                  </Link>
                </li> */}
                <li className="flex items-center">
                  &emsp;
                  <Link href="/about" className="ml-1">
                    {" "}
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="main ml-10 mt-10">
            <div className="infoContainer bg-black p-8 rounded-lg shadow-lg flex ">
              <div className="devInfo">
                <div className="hello text-4xl text-gray-300 ">Hi, I am</div>
                <div className="name text-6xl font-bold text-yellow-500">
                  Rabia Ahmed
                </div>
                <div className="about text-2xl mt-4">
                  Motivated and Enthusiastic Developer
                </div>
                <div className="moreAbout text-lg mt-4">
                  {" "}
                  I am Rabia, an aspiring web developer with a passion for
                  creating
                  <br />
                  interactive and user-friendly websites. I recently completed a
                  course
                  <br />
                  in TypeScript and have been honing my skills in HTML, CSS, and
                  JavaScript.
                </div>
                <div className="buttons mt-6">
                  <Link href="/contact-me" className="cursor-pointer">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black hover:text-yellow-500">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </div>
              <div className="devPic mt-6">
                {" "}
                <Image src={girl} alt="image" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
