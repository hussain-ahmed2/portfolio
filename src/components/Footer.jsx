import { AnimatedSection } from "./AnimatedSection";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm max-md:text-center">
			<div className="px-5 max-w-5xl mx-auto">
				<div className="py-12 flex max-md:flex-col max-md:items-center max-md:gap-8 justify-between">
					{/* Left Section */}
					<AnimatedSection variant="fadeUp" delay={0.2}>
						<div className="space-y-4">
							<h3 className="text-2xl font-bold">
								Hussain Ahmed
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								Building digital experiences
								<br />
								that make an impact
							</p>
						</div>
					</AnimatedSection>

					{/* Middle Section - Navigation */}
					<AnimatedSection variant="fadeUp" delay={0.3}>
						<div className="flex md:flex-col gap-3">
							<span className="font-medium text-gray-900 dark:text-gray-100 mb-2">
								Navigation
							</span>
							<a
								href="#home"
								className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 tc"
							>
								Home
							</a>
							<a
								href="#about"
								className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 tc"
							>
								About
							</a>
							<a
								href="#projects"
								className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 tc"
							>
								Projects
							</a>
							<a
								href="#contact"
								className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 tc"
							>
								Contact
							</a>
						</div>
					</AnimatedSection>

					{/* Right Section - Socials */}
					<AnimatedSection variant="fadeUp" delay={0.4}>
						<div className="flex flex-col gap-4">
							<span className="font-medium text-gray-900 dark:text-gray-100">
								Let's Connect
							</span>
							<div className="flex gap-4">
								<a
									href="https://github.com/hussain-ahmed2"
									target="_blank"
									className="p-2 hover:text-emerald-500 hover:bg-emerald-100 dark:hover:bg-gray-800 tc"
									aria-label="GitHub"
								>
									<Github size={24} />
								</a>
								<a
									href="https://linkedin.com/in/yourprofile"
									target="_blank"
									className="p-2 hover:text-emerald-500 hover:bg-emerald-100 dark:hover:bg-gray-800 tc"
									aria-label="LinkedIn"
								>
									<Linkedin size={24} />
								</a>
								<a
									href="mailto:hussainahmed.vu@gmail.com"
									className="p-2 hover:text-emerald-500 hover:bg-emerald-100 dark:hover:bg-gray-800 tc"
									aria-label="Email"
								>
									<Mail size={24} />
								</a>
							</div>
						</div>
					</AnimatedSection>

					{/* Back to Top */}
					<AnimatedSection variant="fadeUp" delay={0.5}>
						<button
							onClick={scrollToTop}
							className="p-3 hover:text-emerald-500 hover:bg-emerald-100 dark:hover:bg-gray-800 tc max-md:self-center"
							aria-label="Back to top"
						>
							<ArrowUp size={24} />
						</button>
					</AnimatedSection>
				</div>

				{/* Copyright */}
				<AnimatedSection variant="fadeDown" delay={0.6}>
					<div className="py-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
						© {new Date().getFullYear()} Hussain Ahmed. All rights
						reserved.
					</div>
				</AnimatedSection>
			</div>
		</footer>
	);
}
