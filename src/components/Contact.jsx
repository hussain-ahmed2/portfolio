import { AnimatedSection } from "./AnimatedSection";
import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// TODO: Add your form submission logic here
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitSuccess(true);
			setFormData({ name: "", email: "", message: "" });
		}, 2000);
	};

	return (
		<section
			id="contact"
			className="py-10 border-t border-gray-200 dark:border-gray-700"
		>
			<div className="px-5">
				<AnimatedSection variant="fadeUp">
					<h2 className="text-4xl max-md:text-3xl font-bold mb-12">
						Get in <span className="text-emerald-500">Touch</span>
					</h2>
				</AnimatedSection>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Left Column - Contact Info */}
					<div className="space-y-8">
						<AnimatedSection variant="fadeRight" delay={0.2}>
							<p className="text-gray-600 text-lg leading-relaxed">
								Have a project in mind or just want to connect?
								Feel free to reach out through this form or via
								any of these platforms:
							</p>
						</AnimatedSection>

						<div className="flex gap-6">
							<AnimatedSection variant="fadeRight" delay={0.4}>
								<a
									href="https://github.com/hussain-ahmed2"
									target="_blank"
									className="block p-3 hover:bg-emerald-100 dark:hover:bg-gray-700 hover:text-emerald-500 tc"
									aria-label="GitHub"
								>
									<Github size={24} />
								</a>
							</AnimatedSection>
							<AnimatedSection variant="fadeRight" delay={0.5}>
								<a
									href="https://linkedin.com/in/yourprofile"
									target="_blank"
									className="block p-3 hover:bg-emerald-100 dark:hover:bg-gray-700 hover:text-emerald-500 tc"
									aria-label="LinkedIn"
								>
									<Linkedin size={24} />
								</a>
							</AnimatedSection>
							<AnimatedSection variant="fadeRight" delay={0.6}>
								<a
									href="mailto:you@email.com"
									className="block p-3 hover:bg-emerald-100 dark:hover:bg-gray-700 hover:text-emerald-500 tc"
									aria-label="Email"
								>
									<Mail size={24} />
								</a>
							</AnimatedSection>
						</div>

						<AnimatedSection variant="fadeRight" delay={0.7}>
							<div className="pt-8 border-t border-gray-200 dark:border-gray-700">
								<a
									href="/resume.pdf"
									target="_blank"
									className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-700 hover:text-emerald-500 hover:border-emerald-500 tc"
								>
									<FileText size={20} />
									Download Resume
								</a>
							</div>
						</AnimatedSection>
					</div>

					{/* Right Column - Contact Form */}
					<AnimatedSection variant="fadeLeft" delay={0.2}>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										value={formData.name}
										onChange={(e) =>
											setFormData({
												...formData,
												name: e.target.value,
											})
										}
										className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										value={formData.email}
										onChange={(e) =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
										className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
										required
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										rows="4"
										value={formData.message}
										onChange={(e) =>
											setFormData({
												...formData,
												message: e.target.value,
											})
										}
										className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
										required
									></textarea>
								</div>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white dark:text-gray-100 hover:bg-emerald-600 transition-colors disabled:bg-emerald-400 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<span className="animate-spin">↻</span>
										Sending...
									</>
								) : (
									<>
										<Send size={20} />
										Send Message
									</>
								)}
							</button>

							{submitSuccess && (
								<div className="p-4 bg-emerald-100 dark:bg-gray-800 text-emerald-600">
									Message sent successfully! I'll get back to
									you soon.
								</div>
							)}
						</form>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
