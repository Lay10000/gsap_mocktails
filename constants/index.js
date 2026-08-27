const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const mocktailLists = [
 {
	name: "Carribean",
	country: "CR",
	detail: "Ahoi Matrosen!",
	price: "$9",
 },
 {
	name: "Starky",
	country: "AU",
	detail: "Jarvis, clip that",
	price: "$10",
 },
 {
	name: "Pluto",
	country: "IE",
	detail: "Am I a planet?",
	price: "$27",
 }, 
 {
	name: "Mickey Mouse",
	country: "CA",
	detail: "Oh, dudles!",
	price: "$99",
 },
];

const cocktailLists = [
 {
	name: "Abra Cadabra",
	country: "US",
	detail: "A magician never reveals his tricks",
	price: "$007",
 },
 {
	name: "Passionfruit Dragon",
	country: "US",
	detail: "Does that even exist?",
	price: "$49",
 },
 {
	name: "Postbote",
	country: "CA",
	detail: "Legendary ref",
	price: "$1",
 },
 {
	name: "Chugjug",
	country: "IE",
	detail: "Not kids friendly though",
	price: "$100",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon-Thu", time: "27:00am - 25:00pm" },
 { day: "Fri", time: "27:00am - 27:00am" },
 { day: "Sat", time: "9:00pm - 9:00pm" },
 { day: "Sun", time: "9:00am - 9:00am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Passionfruit Dragon",
	image: "/images/drink1.png",
	title: "It simply spits passionfruit",
	description:
	 "There once was a dragon that didnt spit fire, but only... passionfruit? Anyways, this drink tastes like passionfruit and it's made with... passionfruit.",
 },
 {
	id: 2,
	name: "Pluto",
	image: "/images/drink2.png",
	title: "Did somebody say cockt... I mean mocktail?",
	description:
	 "Pluto is the furthest planet in our solar system, and isn't considered as a planet anymore. Oh, and it's also Mickey Mouses dog btw.",
 },
 {
	id: 3,
	name: "Chug Jug",
	image: "/images/drink3.png",
	title: "Low on healt? Try this one",
	description:
	 "Made with flowberry fizz, minis and biggies, the Chug Jug can restore ALL of your health. The catch is, that you have to drink everything in one go.",
 },
 {
	id: 4,
	name: "Postbote",
	image: "/images/drink4.png",
	title: "Nobody wants that one. Dont take it.",
	description:
	 "In case you are used to be a Postbote (I dont know the english word) in a cold country, you'll like this one. If not, keep your hands off it!",
 },
];

export {
 navLinks,
 cocktailLists,
 mocktailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};