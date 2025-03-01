import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hasCopiedPhone, setHasCopiedPhone] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+385 123 456 789');
    setHasCopiedPhone(true);

    setTimeout(() => {
      setHasCopiedPhone(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-full object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Natoli Tesgera</p>
              <p className="grid-subtext">
              I'm an 18-year-old aspiring web and software developer with three years of experience in programming and web development. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I specialize in both frontend and backend development, creating seamless and efficient digital experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 44, lng: -93, text: 'Eagan, MN', color: 'white', size: 50 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Eagan, MN and open to remote work worldwide.</p>
              <Button 
                href="mailto:fs.natoli@gmail.com"
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I specialize in a range of programming languages, frameworks, and tools that enable me to build robust applications. From designing intuitive websites to developing complex software solutions, I am always eager to learn and explore new technologies to enhance my skill set. I specialize in both frontend and backend development, creating dynamic and scalable applications.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">fs.natoli@gmail.com</p>
                </div>
                <div className="flex flex-row gap-2 copy-container" onClick={handleCopyPhone}>
                  <img src={hasCopiedPhone ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white"> + 1 612 - 499 - 6607</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
