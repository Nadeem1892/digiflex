import Header from "../components/Header";
import Section from "../components/Section";
import { FaLaptopCode } from "react-icons/fa6";
import About from "../components/About";
import Projects from "../components/Projects";
import OurPartners from "../components/OurPartners";
import OurRecognition from "../components/OurRecognition";
import Footer from "../components/Footer";
import ClientFeedback from "../components/ClientFeedback";
import MeetOurTeam from "../components/MeetOurTeam";
import SubscribeSection from "../components/SubscribeSection";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <Header />
      </div>

      {/* Full-Screen Background with Content */}
      <div
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://lh4.googleusercontent.com/vO3Rey0_EnLge0U9tJqvDnIe_PX2wJhmwT8xsVfVeJriuFbl0JWJHz2_-rKgs5Ww_tp55BPrAQ805YRnpWmFFDNpbM7qes2xPhbDWQ7M06bv2ZcdKhqT16AzZrRuc2L1-UqvmWoP=s0')",
        }}
      >
        {/* Content inside background image */}
        <div className="text-center px-4">
          <h1 className="text-6xl font-semibold mb-4">Welcome to DigiFlex</h1>
          <p className="text-4xl font-bold mb-6">Creative & Minimal</p>
          <p className="text-4xl font-bold mb-6 text-yellow-500">IT AGENCY</p>
          <p className="text-lg font-semibold   mb-6">Digiflex AI excels in turning your concept into realities with its comprehensive application and web development services, which let you easily incorporate special characteristics and technology that complement your bussness strategy.</p>
          
        </div>
      </div>

      {/* Scrollable Section Content */}
      <div className="py-10 px-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Section
          Icon={FaLaptopCode} // Passing the icon as a prop
          title="Website Development"
          description="Digiflex provides full-service website development that is customized to meet your specific business objectives."
        />

        <Section
          Icon={FaLaptopCode} // Reusing the same icon or change as needed
          title="Mobile Application Development"
          description="Digiflex is a company that specializes in creating scalable and inventive mobile applications."
        />

        <Section
          Icon={FaLaptopCode} // Reusing the same icon or change as needed
          title="Ecommerce Development"
          description="Digiflex offers full e-commerce development assistance to assist firms establish an effective online presence."
        />

        <Section
          Icon={FaLaptopCode} // Reusing the same icon or change as needed
          title="Digital Marketing Services"
          description="Digiflex offers comprehensive digital marketing services to help businesses reach their target audience and drive results."
        />
      </div>

      {/* Aboute Section */}
      <div>
        <About />
      </div>

      {/* Project Section */}
      <div>
        <Projects />
      </div>

      {/* Our Partner Section */}
      <div>
        <OurPartners />
      </div>

      {/* Our Recognition Section */}
      <div>
        <OurRecognition />
      </div>

      {/* ClientFeedback Section */}
      <div>
        <ClientFeedback />
      </div>

      {/* MeetOurTeam Section */}
      <div>
        <MeetOurTeam/>
      </div>

      {/* SubscribeSection Section */}
      <div>
        <SubscribeSection/>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
