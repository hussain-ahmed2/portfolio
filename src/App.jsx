import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function App() {
	return (
		<>
			<Header />

			<main className="max-w-5xl mx-auto pt-14 overflow-hidden">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>

			<Footer />
		</>
	);
}
