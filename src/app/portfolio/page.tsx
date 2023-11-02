import Image from 'next/image';
import { AiOutlineGithub } from "react-icons/ai";

const Portfolio = () => {
   return (
      <div className="bg-slate-100 flex min-h-screen p-16 flex-col items-center">
         <div>
            <p className="text-6xl text-sky-900 font-semibold">A little bit of visualization!</p>
            <div className="flex flex-col">
               <p className="text-xl font-semibold pt-4  text-sky-700">On this page you can get acquainted with some of my projects.
               </p>
               <div className="flex">
                  <p className="text-2xl font-semibold pt-4  text-sky-700">Look for the code on</p>  
                  <a rel="me" href="https://github.com/anastasiiapolovinka" title="Github" target="_blank">
                  <AiOutlineGithub size="48" className='hover:text-sky-400 pl-2'/>
                  </a>
               </div>
            </div>
         </div>
         <div className='pt-14'>
            <div className='flex'>
               <p className='pt-6 text-xl font-semibold text-sky-700 pr-8'> 
                  I developed a website for legal services.<br/> Technology stack for this project:<br/>TypeScript, Next.js, HTML, CSS;<br/>
                  To book meetings, integration was carried out<br/> with the 3d-party service<a rel="web" href="https://calendly.com/" title="calendly" target="_blank"><p className='hover:text-sky-400'>Calendly</p></a> using React-plugin <a rel="web" href="https://www.npmjs.com/package/react-calendly" title="calendly" target="_blank"><p className='hover:text-sky-400'>react-calendly.</p></a>
               </p>
               <a href="https://lukvirksomhed.dk/">
               <Image src="/project.png" alt="Project" className='hover:scale-150 duration-1000' width={300} height={300} />
               </a>
            </div>
         </div>
      </div>
   )
};
export default Portfolio;