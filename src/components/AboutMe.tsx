import Link from "next/link";

const AboutMe = () => {
   return (
      <div className="text-slate-200 pt-6 lg:w-3/4 px-6 pb-10 bg-slate-800 lg:bg-transparent">
         <div className='flex flex-col lg:mt-40'>
            <p className='lg:text-6xl text-3xl text-slate-300 font-semibold'>Hi, I&apos;m Anastasiia!</p>
            <p className='lg:text-2xl text-xl text-sky-600 font-medium mt-2 max-w-[800px]'>A freelance software engineer with 2 years of experience in front-end web development. You can read about my experience below.<br/> Press the buttons!</p>
         </div>
         <div className="hidden lg:flex mt-20">
            <Link href="/cv" className="text-4xl font-semibold border-2 border-solid rounded-full opacity-80 mb-4 py-3 px-12 hover:bg-sky-600 shadow-2xl">CV</Link>
            <Link href="/portfolio" className="text-4xl font-semibold border-2 border-solid rounded-full opacity-80 mb-4 py-3 px-12 hover:bg-sky-600 shadow-2xl ml-10">PORTFOLIO</Link>
            <Link href="/contacts" className="text-4xl font-semibold border-2 border-solid rounded-full opacity-80 mb-4 py-3 px-12 hover:bg-sky-600 shadow-2xlr ml-10">HIRE ME</Link>
         </div>
      </div>
   );
}

export default AboutMe;