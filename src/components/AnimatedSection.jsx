import { motion } from "motion/react";

export function AnimatedSection({
	children,
	className = "",
	variant = "fadeUp",
	delay = 0,
	duration = 0.5,
}) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={variants[variant]}
			transition={{ duration: duration, delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

const variants = {
	fadeUp: {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	},
	fadeLeft: {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	},
	fadeRight: {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
	},
	fadeDown: {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0 },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	},
};
