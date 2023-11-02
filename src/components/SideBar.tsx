import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
 
const SideBar = () => {
   return (
      <aside className="lg:w-1/4 bg-sky-600 opacity-80 text-slate-200 hover:bg-sky-700 pb-10">
         <div className="flex flex-col items-center">
            <Image src="/logo.jpg" alt="Anastasiia" width={300} height={300} className="rounded-full mt-6"/>
            <div className='flex flex-col items-center mt-6'>
               <div className='text-4xl font-semibold text-center'>ANASTASIIA POLOVYNKO</div>
               <div className='text-2xl font-medium mt-2'>FRONTEND DEVELOPER</div>
            </div>
         </div>
         <ul className='flex flex-col mt-10 text-2xl items-center'>
            <li>
               <Link href="/cv" className='hover:text-sky-400'>CV</Link>
            </li>
            <li>
               <Link href="/skills" className='hover:text-sky-400'>SKILLS</Link>
            </li> 
            <li>
               <Link href="/portfolio" className='hover:text-sky-400'>PORTFOLIO</Link>
            </li>
            <li>
               <Link href="/contacts" className='hover:text-sky-400'>HIRE ME</Link>
            </li>
         </ul>
         <div className='flex flex-col items-center'>
            <div className='mt-10 text-2xl font-medium'>Get in touch</div>
            <div className='flex mt-4 justify-evenly w-full'>
               <a rel="me" href="https://www.linkedin.com/in/anastasiia-polovynko-19250624b/" title="linkedin" target="_blank">
                  <AiOutlineLinkedin size="48" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="https://wa.me/34603727522" title="whatsApp" target="_blank">
                  <AiOutlineWhatsApp size="48" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="mailto:polovinkanasta@gmail.com" title="email: polovinkanasta@gmail.com">
                  <AiOutlineMail size="48" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="https://t.me/PolovinkaN" title="telegram: @PolovinkaN" target="_blank">
                  <BsTelegram size="48" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="https://github.com/anastasiiapolovinka" title="Github" target="_blank">
                  <AiOutlineGithub size="48" className='hover:text-sky-400'/>
               </a>
            </div>
         </div>
      </aside>
   );
}

export default SideBar;