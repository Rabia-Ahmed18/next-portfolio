import Link from "next/link";
import Image from "next/image";
import currency from "../../public/images/currency.jpg";
import adv from "../../public//images/adv.jpg";
import atm from "../../public//images/atm.jpg";
import student from "../../public//images/student.jpg";
import todo from "../../public//images/todo.jpg";
import bmi from "../../public//images/bmi.jpg";

export default function Projects() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="projectInfo text-center my-12 bg-black ">
          <span className="ml-12 text-3xl font-bold text-yellow-500">
            Have a look at my Amazing Projects!
          </span>
          <div className="projectDetails mt-8 text-xl text-yellow-500">
            I have shared some of my CLI Typescript Projects.
            <section className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-4">
              <div className="projectbox bg-white rounded-lg shadow-lg p-6">
                <div className="project-image">
                  <Image src={currency} alt="currency" />
                </div>
                <div className="project-content mt-4">
                  <p className="project-title text-xl font-bold">
                    Currency-Converter
                  </p>
                  <Link
                    href="https://github.com/Rabia-Ahmed18/currency--converter.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-button mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black text-white transition duration-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>

              <div className="projectbox bg-white rounded-lg shadow-lg p-6">
                <div className="project-image">
                  <Image src={todo} alt="todo- list" />
                </div>
                <div className="project-content mt-4">
                  <p className="project-title text-xl font-bold">To-Do-List</p>
                  <Link
                    href="https://github.com/Rabia-Ahmed18/to-do-list.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-button mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black text-white transition duration-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>

              <div className="projectbox bg-white rounded-lg shadow-lg p-6">
                <div className="project-image">
                  <Image src={atm} alt="atm" />
                </div>
                <div className="project-content mt-4">
                  <p className="project-title text-xl font-bold">ATM-Project</p>
                  <Link
                    href="https://github.com/Rabia-Ahmed18/cli-based-ATM.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-button mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black text-white transition duration-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>

              <div className="projectbox bg-white rounded-lg shadow-lg p-6">
                <div className="project-image">
                  <Image src={student} alt="student" />
                </div>
                <div className="project-content mt-4">
                  <p className="project-title text-xl font-bold">
                    Student-Management-System
                  </p>
                  <Link
                    href="https://github.com/Rabia-Ahmed18/student-management-system.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-button mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black text-white transition duration-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>

              <div className="projectbox bg-white rounded-lg shadow-lg p-6">
                <div className="project-image">
                  <Image src={adv} alt="adventure" />
                </div>
                <div className="project-content mt-4">
                  <p className="project-title text-xl font-bold">
                    Adventure-Game
                  </p>
                  <Link
                    href="https://github.com/Rabia-Ahmed18/Adventure-Game.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-button mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black text-white transition duration-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>

              <div className="projectbox bg-white rounded-lg shadow-lg p-6">
                <div className="project-image">
                  <Image src={bmi} alt="bmi-calculator" />
                </div>
                <div className="project-content mt-4">
                  <p className="project-title text-xl font-bold">
                    BMI-Calculator
                  </p>
                  <Link
                    href="https://github.com/Rabia-Ahmed18/BMI--calculator.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-button mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-black text-white transition duration-200">
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
