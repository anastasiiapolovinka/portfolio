import SideBar from "@/components/SideBar";
import AboutMe from "@/components/AboutMe";


export default function Home() {
  return (
    <main className="lg:flex min-h-screen justify-between mainBg">
      <SideBar />
      <AboutMe />
    </main>
  )
}
