import Image from 'next/image';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

export default function CV() {
   return (
      <div className="bg-slate-300 flex min-h-screen justify-center pt-14 pb-14">
         <div className="flex bg-slate-50 min-w-[920px] px-20 py-14">
            <div className='flex'>
               <div>
                  <div>
                     <Image src="/logo2.JPG" alt="Anastasiia" width={300} height={200}/>
                  </div>
                  <div className='text-3xl font-semibold mt-10 pl-20 text-sky-600'>CONTACTS</div>
                  <div className="flex mt-6 justify-evenly text-slate-600">
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
               <div className="pl-20">
                  <p className='text-6xl font-semibold text-sky-600'>ANASTASIIA POLOVYNKO</p>
                  <p className='text-3xl font-semibold mt-10 text-sky-600'>PERSONAL INFORMATION</p>
                  <div className='text-xl font-semibold mt-4 text-slate-600'>
                     <p>Citizenship: Ukraine, Russian Federation;</p>
                     <p>Place of residence: Vila Joiosa, Spain;</p>
                     <p>Education: Philological University;</p>
                     <p>Date of birth: 03/22/1990;</p>
                     <p>Marital status: Married</p>
                  </div>
                  <p className='text-3xl font-semibold mt-20 text-sky-600'>
                     EDUCATIUON, COURSES, TRAININGS:
                  </p>
                  <div className='text-xl font-semibold mt-2 text-slate-600'>
                     <p>1. Gorlovka State Institute of Foreign Languages. 2007-2011
                     </p>
                     <p>2. HTML Academy. Course - HTML and CSS course. January-March of 2021</p>
                     <p>3. FreeCodeCamp. Course - Adaptive layout. April-June of 2022</p>
                     <p>4. EPAM university. Course - Frotend Developer June-March of 2022-2023</p>
                  </div>
                  <div>
                     <p className='text-3xl font-semibold mt-8 text-sky-600'>SKILLS</p>
                     <div className='text-xl font-semibold mt-2 text-slate-600'>
                        <p>My technology stack:</p>
                        <p>JavaScript (ES6), TypeScript, React, Next.js, Tailwindcss, HTML5, CSS3, SASS,<br/> Webpack, GIT, Figma, Scrum.</p>
                     </div>
                  </div>
                  <div>
                     <p className='text-3xl font-semibold mt-8 text-sky-600'>EXPERIENCE</p>
                     <p className='text-xl font-semibold mt-2 text-slate-600'>Freelancing from August 2022.<br/> Experienced and responsible front-end developer.<br/> Responsibilities: Participation in analyzing and solving problems in development.<br/> Converting user stories into a functional application.<br/> Design, create and maintain efficient, reusable and reliable code JS.<br/> Estimating of user stories and development tasks. Code review.</p>
                  </div>
                  <div className='text-3xl font-semibold mt-8 text-sky-600'>ADDITIONAL INFORMATION
                  </div>
                  <p className='text-xl font-semibold mt-2 text-slate-600'>
                     Language skills:<br/>
                     Russian - native<br/>
                     Ukrainian - C2<br/>
                     English - B2<br/>
                     Spanish - B1<br/>
                     French - A1
                   </p>
                   <p className='text-xl font-semibold mt-2 text-slate-600'>Hobbies and interests:<br/>
                   I love sports and an active lifestyle. I am interested in fitness, stretching, and skiing.<br/> I go hiking and travel around the world.
                   </p>
                   <p className='text-xl font-semibold mt-2 text-slate-600'>
                   Personal qualities:<br/>
                   Attentiveness, punctuality, responsible approach to work. Sociability in moderation... this is not always appropriate!<br/> I strive to constantly develop and improve my knowledge in the field of modern technologies.<br/> I'd like to work with an interesting project and smart people!
                   </p>
               </div>
            </div>
         </div>
      </div>
   )
}