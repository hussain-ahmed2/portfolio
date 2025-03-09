import { AnimatedSection } from "./AnimatedSection";
import {
	FileText,
	Code,
	Database,
	GraduationCap,
	Award,
	ArrowUpRight,
} from "lucide-react";

export function About() {
	const technicalSkills = [
		{ name: "React/Next.js", icon: <Code /> },
		{ name: "TypeScript", icon: <Code /> },
		{ name: "Tailwind CSS", icon: <Code /> },
		{ name: "Laravel/PHP", icon: <Code /> },
		{ name: "Node.js", icon: <Code /> },
		{ name: "MySQL", icon: <Database /> },
		{ name: "REST APIs", icon: <Code /> },
		{ name: "Git/GitHub", icon: <Code /> },
		{ name: "Java/Python", icon: <Code /> },
		{ name: "Problem Solving", icon: <Code /> },
	];

	const certifications = [
		{
			name: "Responsive Web Design",
			issuer: "freeCodeCamp",
			icon: <Award />,
			url: "https://freecodecamp.org/certification/hussain-ahmed/responsive-web-design",
		},
		{
			name: "JavaScript Algorithms & Data Structures",
			issuer: "freeCodeCamp",
			icon: <Award />,
			url: "https://freecodecamp.org/certification/hussain-ahmed/javascript-algorithms-and-data-structures",
		},
		{
			name: "Frontend Developer (React)",
			issuer: "HackerRank",
			icon: <Award />,
			url: "https://www.hackerrank.com/certificates/b9fbbcb1747a",
		},
		{
			name: "SQL (Intermediate)",
			issuer: "HackerRank",
			icon: <Award />,
			url: "https://www.hackerrank.com/certificates/28c7ce20873e",
		},
	];

	return (
		<section id="about" className="py-10 border-t border-gray-200 dark:border-gray-700">
			<div className="px-5 max-w-5xl mx-auto">
				<AnimatedSection variant="fadeUp">
					<h2 className="text-4xl max-md:text-3xl font-bold mb-12">
						About <span className="text-emerald-500">Me</span>
					</h2>
				</AnimatedSection>

				<div className="flex max-md:flex-col gap-12">
					{/* Left Column */}
					<div className="flex-1 space-y-8">
						<AnimatedSection variant="fadeUp" delay={0.2}>
							<div className="flex items-center gap-4 mb-6">
								<GraduationCap
									className="text-emerald-500"
									size={32}
								/>
								<h3 className="text-2xl font-semibold">
									Education
								</h3>
							</div>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								Graduated with a BSc in Computer Science &
								Engineering from Varendra University in October
								2024, achieving a 3.93 GPA. My academic focus
								included advanced coursework in software
								architecture, database systems, and distributed
								computing.
							</p>
						</AnimatedSection>

						<AnimatedSection variant="fadeUp" delay={0.3}>
							<div className="flex items-center gap-4 mb-6">
								<Code className="text-emerald-500" size={32} />
								<h3 className="text-2xl font-semibold">
									Development Expertise
								</h3>
							</div>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								Full-stack developer with hands-on experience
								building production-grade applications including
								e-commerce platforms and job portals. Recent
								projects showcase my ability to:
							</p>
							<ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
								<li>
									Implement secure user authentication systems
								</li>
								<li>
									Design responsive UI/UX with modern
									frameworks
								</li>
								<li>
									Optimize database queries for high-traffic
									applications
								</li>
								<li>
									Integrate REST APIs for seamless data flow
								</li>
							</ul>
						</AnimatedSection>

						<AnimatedSection variant="fadeUp" delay={0.4}>
							<div className="flex items-center gap-4 mb-6">
								<Award className="text-emerald-500" size={32} />
								<h3 className="text-2xl font-semibold">
									Certifications
								</h3>
							</div>
							<div className="space-y-4">
								{certifications.map((cert, index) => (
									<AnimatedSection
										key={cert.name}
										variant="fadeRight"
										delay={0.5 + index * 0.1}
										className="bg-white dark:bg-gray-800"
									>
										<a
											href={cert.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block border border-gray-200 dark:border-gray-700 hover:border-emerald-500 tc group"
										>
											<div className="p-4">
												<div className="flex items-center gap-3">
													<span className="text-emerald-500">
														{cert.icon}
													</span>
													<div>
														<p className="font-medium group-hover:text-emerald-600 tc">
															{cert.name}
														</p>
														<p className="text-sm text-gray-500 dark:text-gray-300">
															{cert.issuer}
														</p>
														<div className="flex items-center gap-1 mt-1">
															<span className="text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
																View Credential
															</span>
															<ArrowUpRight className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
														</div>
													</div>
												</div>
											</div>
										</a>
									</AnimatedSection>
								))}
							</div>
						</AnimatedSection>
					</div>

					{/* Right Column */}
					<div className="flex-1">
						<AnimatedSection variant="fadeLeft" delay={0.5}>
							<div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
								<h3 className="text-lg md:text-2xl font-semibold mb-8">
									Technical Toolkit
								</h3>
								<div className="grid grid-cols-2 gap-4 max-sm:text-xs">
									{technicalSkills.map((skill, index) => (
										<AnimatedSection
											key={skill.name}
											variant="fadeRight"
											delay={0.6 + index * 0.1}
											className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 tc"
										>
											<span className="text-emerald-500">
												{skill.icon}
											</span>
											<span className="break-all">{skill.name}</span>
										</AnimatedSection>
									))}
								</div>
							</div>
						</AnimatedSection>

						<AnimatedSection
							variant="fadeUp"
							delay={0.7}
							className="mt-8 text-center"
						>
							<a
								href="/resume.pdf"
								target="_blank"
								className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 tc"
							>
								<FileText size={20} />
								Download Full Resume
							</a>
						</AnimatedSection>
					</div>
				</div>
			</div>
		</section>
	);
}
