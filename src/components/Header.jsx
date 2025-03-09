import { Menu, X } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useEffect, useState } from "react";

const links = [
	{ id: "home", name: "Home", href: "#home" },
	{ id: "about", name: "About", href: "#about" },
	{ id: "projects", name: "Projects", href: "#projects" },
	{ id: "contact", name: "Contact", href: "#contact" },
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("#home");

	function toggleMenu() {
		setIsMobileMenuOpen((prev) => !prev);
	}

	function closeMenu() {
		setIsMobileMenuOpen(false);
	}

	useEffect(() => {
		const handleIntersect = (entries) => {
			let mostVisibleEntry = null;
			let highestRatio = 0;

			entries.forEach((entry) => {
				if (
					entry.isIntersecting &&
					entry.intersectionRatio > highestRatio
				) {
					highestRatio = entry.intersectionRatio;
					mostVisibleEntry = entry.target;
				}
			});

			if (mostVisibleEntry) {
				setActiveLink(`#${mostVisibleEntry.id}`);
			}
		};

		const observerOptions = {
			root: null,
			threshold: 0.1,
		};

		const observer = new IntersectionObserver(
			handleIntersect,
			observerOptions
		);
		const sections = document.querySelectorAll("section[id]");

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<AnimatedSection
			className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:backdrop-blur-sm"
			variant="fadeDown"
			duration={0.6}
		>
			<header className="">
				<nav className="px-5 max-md:pe-0 flex items-center justify-between gap-4 w-full min-h-14 max-w-5xl mx-auto">
					<a className="logo" href="#">
						Hussain<span className="text-emerald-500">.</span>
					</a>

					<div
						className={`nav-links-container ${
							isMobileMenuOpen
								? "max-md:translate-x-0"
								: "max-md:translate-x-full"
						}`}
					>
						{links.map((link) => (
							<a
								key={link.id}
								onClick={closeMenu}
								className={`nav-link ${
									activeLink === link.href
										? "text-emerald-500 max-md:hover:text-white"
										: ""
								}`}
								href={link.href}
							>
								{link.name}
							</a>
						))}
					</div>
					<button
						onClick={toggleMenu}
						className="md:hidden h-14 w-14 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-700 hover:text-emerald-500 tc"
					>
						{isMobileMenuOpen ? (
							<X size={32} />
						) : (
							<Menu size={32} />
						)}
					</button>
				</nav>
			</header>
		</AnimatedSection>
	);
}
