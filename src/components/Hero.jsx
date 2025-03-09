import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
	return (
		<section
			id="home"
			className="min-h-[calc(100vh-3.5rem)] flex items-center py-24"
		>
			<div className="px-5">
				<AnimatedSection variant="fadeUp">
					<h1 className="text-5xl max-md:text-4xl max-sm:text-3xl font-bold mb-6">
						Hi, I'm{" "}
						<span className="text-emerald-500">Hussain Ahmed</span>
					</h1>
					<h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
						CSE Graduate | Full Stack Developer
						<br />
						Transforming Ideas into Functional Applications
					</h2>
				</AnimatedSection>

				<div className="flex gap-4 mb-16">
					<AnimatedSection variant="fadeRight" delay={0.5}>
						<a
							href="#contact"
							className="flex items-center gap-2 bg-emerald-500 text-white dark:text-gray-100 px-6 py-3 hover:bg-emerald-600 tc"
						>
							Get in touch
							<ArrowRight size={20} />
						</a>
					</AnimatedSection>
					<AnimatedSection variant="fadeRight" delay={0.6}>
						<a
							href="#projects"
							className="flex items-center gap-2 border-2 border-gray-900 dark:border-gray-400 bg-white dark:bg-gray-900 px-6 py-3 hover:bg-emerald-100 dark:hover:bg-gray-800 hover:text-emerald-500 hover:border-emerald-500 tc"
						>
							View work
							<ArrowRight size={20} />
						</a>
					</AnimatedSection>
				</div>

				<div className="flex gap-6">
					<AnimatedSection variant="fadeRight" delay={0.7}>
						<a
							href="https://github.com/hussain-ahmed2"
							target="_blank"
							className="block p-3 hover:bg-emerald-100 dark:hover:bg-gray-800 hover:text-emerald-500 tc"
							aria-label="GitHub"
						>
							<Github size={24} />
						</a>
					</AnimatedSection>
					<AnimatedSection variant="fadeRight" delay={0.8}>
						<a
							href="https://linkedin.com/in/yourprofile"
							target="_blank"
							className="block p-3 hover:bg-emerald-100 dark:hover:bg-gray-800 hover:text-emerald-500 tc"
							aria-label="LinkedIn"
						>
							<Linkedin size={24} />
						</a>
					</AnimatedSection>
					<AnimatedSection variant="fadeRight" delay={0.9}>
						<a
							href="mailto:you@email.com"
							className="block p-3 hover:bg-emerald-100 dark:hover:bg-gray-800 hover:text-emerald-500 tc"
							aria-label="Email"
						>
							<Mail size={24} />
						</a>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
