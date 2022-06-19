"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer),
/* harmony export */   "r": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ({ title , description , buttons  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "contact",
        className: "bg-white py-5 px-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-primary fw-bold",
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-sm-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: buttons.map((value, index)=>value.isPrimary ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-outline-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index)
                            )
                        })
                    ]
                })
            ]
        })
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-secondary text-center py-2 px-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container text-muted",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                children: [
                    "\xa9 2022 ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/johnsontemidev",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "johnsontemidev"
                        })
                    }),
                    ".  ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/johnsontemidev/portfolio/blob/main/LICENSE",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "MIT"
                        })
                    }),
                    " ",
                    " License"
                ]
            })
        })
    });
};


/***/ }),

/***/ 249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ seo  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: seo.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            })
        ]
    });
};


/***/ }),

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HJ": () => (/* binding */ SEO),
  "jZ": () => (/* binding */ about),
  "PX": () => (/* binding */ contact),
  "mf": () => (/* binding */ intro),
  "Ok": () => (/* binding */ links),
  "G": () => (/* binding */ navigation),
  "q": () => (/* binding */ projects),
  "ZT": () => (/* binding */ work)
});

;// CONCATENATED MODULE: ./config/profile.png
/* harmony default export */ const profile = ({"src":"/_next/static/media/profile.8289c93b.png","height":1256,"width":1242,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEWZOCOvSTapOyjJjXzczcCmNyOubE/n4tejQyzk3NDf2tKKPiqOUD7Sz8aWTDc+LTC/W0iwd2SfNCZ1SD2fkIW/gV9rLx9VR0d4cm7FvbOJgXza0MVLBuvYAAAACXBIWXMAAAsSAAALEgHS3X78AAAAQklEQVQImRXGRxIAIQgEwFFBwLw5/f+fW/apsaJs2bkBRoxZ1YE1Hg3wM+Wc8a1f+6KM8Pa7CgXQ99RkYiARSWb0A08iAlOLRy4bAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(527);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(466);
;// CONCATENATED MODULE: ./config/config.js



const navigation = {
    name: "Temilola",
    links: [
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Projects",
            link: "#projects"
        },
        {
            title: "Contact",
            link: "#contact"
        },
        {
            title: "Links",
            link: "/links"
        }, 
    ]
};
const intro = {
    title: "Hey, I'm Johnson",
    description: "An Aspiring Software Engineer. I'm currently developing my knowledge in creating static websites and mobile apps.",
    image: profile.src,
    buttons: [
        {
            title: "Contact Me",
            link: "#contact",
            isPrimary: true
        },
        {
            title: "Resume",
            link: "https://drive.google.com/file/d/1_QHXKFQxWuDUIAFcv14eDaPkwx1JtQ5B/view?usp=sharing",
            isPrimary: false
        },
        {
            title: "Certificate",
            link: "https://drive.google.com/file/d/128t3z_UvktkRSDkTJhDEQEdRSCaYCbD1/view?usp=sharing",
            isPrimary: true
        }, 
    ]
};
const about = {
    title: "About Me -- Aspiring developer at SovTech",
    link: "https://www.sovtech.co.za",
    description: [
        "I recently completed my BSc in Information Technology in 2021, and a certificate programme in Software Engineering. I'm so passionate about Tech and a passionate learner who's always willing to solve problems, and work across technologies and domains. I love to explore new technologies and leverage. I use my free time to guide and mentor upcoming students who are also passionate about Tech.",
        "The dispensation of the Tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. This has led me to pursue the passion i have as a developer at SovTech",
        "I would really love to be a developer at SovTech, because it will be a great priviledge for anyone who's passionate about Technology to work and associate with a reputable company like SovTech. I read about SovTech, and realized that I would be a great fit as a developer in the organization because I match the requirements needed to further develop my knowledge, utilize my skills and further gain experience, while enhancing the producitivity of the organization", 
    ]
};
const work = {
    title: "What I do - Area of Interest",
    cards: [
        {
            title: "Full Stack Development",
            description: "Building responsive front end websites using React | Developing Mobile applications ussing Flutter |  Creating backend application in Node & Express",
            icons: null
        },
        {
            title: "Web Development & Design",
            description: "I create responsive static websites using Reactjs | Designing attractive user friendly interface for mobile app | Customizing logo designs | Video Editing",
            icons: null
        }
    ]
};
const projects = {
    title: "Projects Currently developing my ",
    cards: [
        {
            title: "Data Analytics",
            description: "Interface with stock price datafeed for data analysis | Display data visually for traders | Using JPMorgan Chase frameworks and tools | Life Expectancy and Birth Rate data measured for each country | Implementing k-means algorithm to run and provide data",
            icons: [
                {
                    icon: free_brands_svg_icons_.faGithub,
                    link: "https://github.com/johnsontemidev/reactRepoDev"
                },
                {
                    icon: free_brands_svg_icons_.faGithub,
                    link: "https://github.com/johnsontemidev/Johnson-Projects-and-SourceCode/tree/master/MachineLearning%20k-means%20Algorithm"
                }, 
            ]
        },
        {
            title: "Linear Regression - Diabetes Dataset",
            description: "Using the diabetes dataset to perform linear regression | Splitting into trainand test data | Calculating the slope and intercept of line | Translating DNA Sequence to a Amino acids where amino acid is represented by unique letter",
            icons: [
                {
                    icon: free_brands_svg_icons_.faGithub,
                    link: "https://github.com/johnsontemidev/Johnson-Projects-and-SourceCode/tree/master/Machine%20Learning%20SCI-KIT%20LEARN"
                },
                {
                    icon: free_brands_svg_icons_.faGithub,
                    link: "https://github.com/johnsontemidev/Johnson-Projects-and-SourceCode/tree/master/SickleCellDiseasePythonProgram"
                }, 
            ]
        },
        {
            title: "Portfolio",
            description: "My mini portfolio to showcase my skills as a software developer and what i'm currently working on. I'm currently leanring and developing my knowledge with modern React frameworks, such as: Next.JS/CRA. I used Next.JS to build to this static single application",
            icons: [
                {
                    icon: free_brands_svg_icons_.faGithub,
                    link: "https://github.com/johnsontemidev/myportfolio"
                }, 
            ]
        }, 
    ]
};
const contact = {
    title: "| Let's Connect |",
    description: "Get in touch! Please do not hesitate to schedule a meeting or alternatively, feel free to reach out directly by email at johnsontemidev@gmail.com.",
    buttons: [
        {
            title: "Email Me",
            link: "mailto:johnsontemidev@gmail.com",
            isPrimary: true
        },
        {
            title: "Schedule Meeting",
            link: "",
            isPrimary: false
        }, 
    ]
};
// SEARCH ENGINE 
const SEO = {
    // 50 - 60 char  
    title: "Temilola Johnson | Software Developer | Flutter | Reactjs developer",
    description: "I'm Currently developing my knowledge in creating mobile apps and static websites. I graduated from AIU University of Sciences and Technology in 2021 with a degree in Degree in Information Technology.",
    image: profile.src
};
const links = {
    image: profile.src,
    title: "@johnsontemidev",
    description: "Software Developer | Flutter  | Reactjs Developer",
    cards: [
        {
            title: "Blog",
            link: "https://johnsontemidev.blogspot.com/"
        },
        {
            title: "GitHub",
            link: "https://github.com/johnsontemidev/"
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/johnson-temilola-adebowale-73aa5a88/"
        },
        {
            title: "SovTech",
            link: "https://www.sovtech.co.za/"
        }, 
    ]
};


/***/ })

};
;