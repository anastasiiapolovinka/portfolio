import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Contacts = () => {
   return (
      <div className="bg-slate-100 flex min-h-screen p-16 flex-col items-center">
         <div>
            <p className='text-4xl text-sky-900 font-semibold'>Wow!!!</p>
            <p className="text-xl font-semibold text-sky-800 pt-8">You&apos;ll reach this page!<br/>
This means that you want to collaborate with me!<br/> Great news - we&apos;re one step apart.<br/> Contact me in any way that is convenient for you and we&apos;ll begin our communication!<br/> See you!
            </p>        
         </div>
         <div className='flex flex-col mt-4 justify-evenly w-full text-sky-900 pt-20'>
         <div className='flex justify-evenly'>
               <a rel="me" href="https://www.linkedin.com/in/anastasiia-polovynko-19250624b/" title="linkedin" target="_blank">
                  <AiOutlineLinkedin size="72" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="https://wa.me/34603727522" title="whatsApp" target="_blank">
                  <AiOutlineWhatsApp size="72" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="mailto:polovinkanasta@gmail.com" title="email: polovinkanasta@gmail.com">
                  <AiOutlineMail size="72" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="https://t.me/PolovinkaN" title="telegram: @PolovinkaN" target="_blank">
                  <BsTelegram size="72" className='hover:text-sky-400'/>
               </a>
               <a rel="me" href="tel:+34727522" title="Github" target="_blank">
                  <AiOutlinePhone size="72" className='hover:text-sky-400'/>
               </a>
            </div>
         </div>
      </div>
   )
}
export default Contacts;