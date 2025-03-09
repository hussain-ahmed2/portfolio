import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
	Github,
	ExternalLink,
	Code,
	Smartphone,
	ShoppingCart,
	Briefcase,
} from "lucide-react";

export function Projects() {
	const projects = [
		{
			title: "Phone Shop E-Commerce",
			description:
				"Full-stack mobile marketplace with user auth, product management, and payment integration",
			tech: ["Laravel", "MySQL", "Tailwind CSS", "Blade", "JavaScript"],
			github: "#",
			live: "#",
			icon: <Smartphone />,
		},
		{
			title: "Job Portal Platform",
			description:
				"Dynamic job board with advanced search, application tracking, and employer dashboards",
			tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
			github: "#",
			live: "#",
			icon: <Briefcase />,
		},
		{
			title: "E-Commerce Application",
			description:
				"Modern shopping platform with cart functionality and seamless checkout experience",
			tech: [
				"Next.js",
				"TypeScript",
				"Stripe",
				"Tailwind CSS",
				"Framer Motion",
			],
			github: "#",
			live: "#",
			icon: <ShoppingCart />,
		},
		{
			title: "Music Academy Website",
			description:
				"Interactive learning platform with course management and video streaming",
			tech: [
				"Next.js",
				"Aceternity UI",
				"Tailwind CSS",
				"Shadcn",
				"React Query",
			],
			github: "#",
			live: "#",
			icon: <Code />,
		},
	];

	return (
		<section
			id="projects"
			className="py-10 border-t border-gray-200 dark:border-gray-700"
		>
			<div className="px-5 max-w-5xl mx-auto">
				<AnimatedSection variant="fadeUp">
					<h2 className="text-4xl max-md:text-3xl font-bold mb-12">
						Featured{" "}
						<span className="text-emerald-500">Projects</span>
					</h2>
				</AnimatedSection>

				<div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
					{projects.map((project, index) => (
						<AnimatedSection
							key={project.title}
							variant="fadeUp"
							delay={0.2 + index * 0.1}
                            className="bg-white dark:bg-gray-800"
						>
							<div className="group relative h-full border border-gray-200 dark:border-gray-700 p-6 hover:border-emerald-500 tc">
								<div className="flex items-start gap-4 mb-4">
									<span className="text-emerald-500 p-3 bg-emerald-100 dark:bg-gray-700">
										{project.icon}
									</span>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											{project.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											{project.description}
										</p>
									</div>
								</div>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4 mt-auto">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-500 tc"
									>
										<Github size={18} />
										<span className="text-sm">Code</span>
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-500 tc"
									>
										<ExternalLink size={18} />
										<span className="text-sm">
											Live Demo
										</span>
									</a>
								</div>
							</div>
						</AnimatedSection>
					))}
				</div>

				<AnimatedSection
					variant="fadeUp"
					delay={0.6}
					className="mt-12 text-center"
				>
					<a
						href="https://github.com/hussain-ahmed2"
						target="_blank"
						className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-emerald-100 dark:hover:bg-gray-800 hover:text-emerald-500 hover:border-emerald-500 tc"
					>
						<Github size={20} />
						View All Projects on GitHub
					</a>
				</AnimatedSection>
			</div>
		</section>
	);
}
