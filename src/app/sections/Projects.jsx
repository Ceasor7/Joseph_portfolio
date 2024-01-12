
const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left sm:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project) => (
            <div className="w-full flex-shrink-0 snap-center">
              <img src="/cali1.PNG" alt="CALI" className="w-[100px] h-[70px]" />
              <div>
                <h4>Case Study 1 of 3: UPA Clone</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#0c5d28]/10 left-0 h-[500px] -skew-y-12"/>
    </div>
  )
}

export default Projects