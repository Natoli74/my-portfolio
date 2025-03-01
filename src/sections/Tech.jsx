const Tech = () => {
  const technologies = [
    { name: 'Java', icon: '/assets/java.png' },
    { name: 'Python', icon: '/assets/python.png' },
    { name: 'JavaScript', icon: '/assets/javascript.png' },
    { name: 'React.js', icon: '/assets/react.svg' },
    { name: 'Three.js', icon: '/assets/threejs.png' },
    { name: 'Framer Motion', icon: '/assets/framer.png' },
    { name: 'HTML', icon: '/assets/html.png' },
    { name: 'CSS', icon: '/assets/css.png' },
    { name: 'Tailwind', icon: '/assets/tailwindcss.png' },
    { name: 'Figma', icon: '/assets/figma.svg' },
    { name: 'Adobe XD', icon: '/assets/XD.png' },
    { name: 'TypeScript', icon: '/assets/typescript.png' },
    { name: 'Next.js', icon: '/assets/nextjs.png' },
    // Add more technologies as needed
  ];

  return (
    <section className="c-space my-20">
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1C] border border-[#383838] hover:border-[#4F4F4F] transition-colors"
          >
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-6 h-6 object-contain"
            />
            <span className="text-neutral-400 text-sm font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
