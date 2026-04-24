import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div id="clients">
          <Clients />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
