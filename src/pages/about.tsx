
export default function About() {
  return (
    <>
      <div className="main ml-10 mt-10">
        <div className="aboutContainer bg-black p-8 rounded-lg shadow-lg flex ">
          <div className="about">
            <div className="name text-6xl font-bold text-yellow-500">
              Web-Developer
            </div>
            <div className="about text-2xl mt-4">
              Motivated and Enthusiastic Developer
            </div>
            <div className="moreAbout text-lg mt-4">
              {" "}
              I am Rabia, an aspiring web developer with a passion for creating
              <br />
              interactive and user-friendly websites. I recently completed a
              course
              <br />
              in TypeScript and have been honing my skills in HTML, CSS, and
              JavaScript.
            </div>
          </div>
        </div>
        <div className="devPic mt-6"></div>
      </div>
    </>
  );
}
