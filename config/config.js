
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Temilola",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Johnson",
	description: "An Aspiring Software Engineer. I'm currently developing my knowledge in creating static websites and mobile apps.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1_QHXKFQxWuDUIAFcv14eDaPkwx1JtQ5B/view?usp=sharing",
			isPrimary: false,
		},
		{
			title: "Certificate",
			link: "https://drive.google.com/file/d/128t3z_UvktkRSDkTJhDEQEdRSCaYCbD1/view?usp=sharing",
			isPrimary: true,
		},
	],
}

export const about = {
	title: "About Me -- Aspiring developer at SovTech",
	link: "https://www.sovtech.co.za",
	description: [

		"I recently completed my BSc in Information Technology in 2021, and a certificate programme in Software Engineering. I'm so passionate about Tech and a passionate learner who's always willing to solve problems, and work across technologies and domains. I love to explore new technologies and leverage. I use my free time to guide and mentor upcoming students who are also passionate about Tech.",
		"The dispensation of the Tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. This has led me to pursue the passion i have as a developer at SovTech",
		"I would really love to be a developer at SovTech, because it will be a great priviledge for anyone who's passionate about Technology to work and associate with a reputable company like SovTech. I read about SovTech, and realized that I would be a great fit as a developer in the organization because I match the requirements needed to further develop my knowledge, utilize my skills and further gain experience, while enhancing the producitivity of the organization",

	],
}

export const work = {
	title: "What I do - Area of Interest",
	cards: [
		{
			title: "Full Stack Development",
			description: "Building responsive front end websites using React | Developing Mobile applications ussing Flutter |  Creating backend application in Node & Express",
			icons: null,
		},
		{
			title: "Web Development & Design",
			description: "I create responsive static websites using Reactjs | Designing attractive user friendly interface for mobile app | Customizing logo designs | Video Editing",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects Currently developing my ",
	cards: [
		{
			title: "Data Analytics",
			description: "Interface with stock price datafeed for data analysis | Display data visually for traders | Using JPMorgan Chase frameworks and tools | Life Expectancy and Birth Rate data measured for each country | Implementing k-means algorithm to run and provide data",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/johnsontemidev/reactRepoDev",
				},
				{
					icon: faGithub,
					link: "https://github.com/johnsontemidev/Johnson-Projects-and-SourceCode/tree/master/MachineLearning%20k-means%20Algorithm",
				},
			]
		},
		{
			title: "Linear Regression - Diabetes Dataset",
			description: "Using the diabetes dataset to perform linear regression | Splitting into trainand test data | Calculating the slope and intercept of line | Translating DNA Sequence to a Amino acids where amino acid is represented by unique letter",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/johnsontemidev/Johnson-Projects-and-SourceCode/tree/master/Machine%20Learning%20SCI-KIT%20LEARN",
				},
				{
					icon: faGithub,
					link: "https://github.com/johnsontemidev/Johnson-Projects-and-SourceCode/tree/master/SickleCellDiseasePythonProgram",
				},
			]
		},
		{
			title: "Portfolio",
			description: "My mini portfolio to showcase my skills as a software developer and what i'm currently working on. I'm currently leanring and developing my knowledge with modern React frameworks, such as: Next.JS/CRA. I used Next.JS to build to this static single application",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/johnsontemidev/myportfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "| Let's Connect |",
	description: "Get in touch! Please do not hesitate to schedule a meeting or alternatively, feel free to reach out directly by email at johnsontemidev@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:johnsontemidev@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Temilola Johnson | Software Developer | Flutter | Reactjs developer",
	description: "I'm Currently developing my knowledge in creating mobile apps and static websites. I graduated from AIU University of Sciences and Technology in 2021 with a degree in Degree in Information Technology.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@johnsontemidev",
	description: "Software Developer | Flutter  | Reactjs Developer",
	cards: [
		{
			title: "Blog",
			link: "https://johnsontemidev.blogspot.com/",
		},

		{
			title: "GitHub",
			link: "https://github.com/johnsontemidev/",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/johnson-temilola-adebowale-73aa5a88/",
		},
		{
			title: "SovTech",
			link: "https://www.sovtech.co.za/",
		},
	]
}