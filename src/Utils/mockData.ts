import { IStory } from "../Models/IOption";

export const plans = [
	{ value: "Direct integration with QuickBooks or Xero" },
	{ value: "Unlimited Custom Fields & Workflows" },
	{ value: "Standard onboarding and support" },
	{ value: "Multi-Departments / Projects" },
	{ value: "Unlimited Document storage" },
	{ value: "Amazon Business PunchIn" },
	{ value: "Multi-Currencies" },
	{ value: "Lifetime updates" },
	{ value: "3-way matching" },
	{ value: "Multi-Locations" },
	{ value: "Budgets" },
];

export const currencies = [
	{ name: "USD", value: 35, currency: "$" },
	{ name: "EUR", value: 32, currency: "€" },
	{ name: "GBP", value: 29, currency: "£" },
];
export const storiesArray: IStory[] = [
	{
		id: 0,
		image: {
			background: "#4545F5",
		},
		tags: [
			{ value: "SMB", hoverBg: "#CDF1DA", background: "#E1F6E9", color: "#00A338" },
			{
				value: "Information Technology",
				hoverBg: "#D0D0FD",
				background: "#E3E3FE",
				color: "#4545F5",
			},
		],
		readTime: "7",
		title: "	How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions",
		author: {
			authorImage: "#4545F5",
			authorName: "Name",
			authorTitle: "Title",
		},
	},
	{
		id: 1,
		image: {
			background: "#1D2452",
		},
		tags: [
			{ value: "SMB", hoverBg: "#CDF1DA", background: "#E1F6E9", color: "#00A338" },
			{
				value: "Biotech",
				hoverBg: "#D0D0FD",
				background: "#E3E3FE",
				color: "#4545F5",
			},
		],
		readTime: "7",
		title: "How Ridgeline Discovery Reduced Invoice Processing Time by 90% in a Month",
		author: {
			authorImage: "#1D2452;",
			authorName: "Name",
			authorTitle: "Title",
		},
	},
	{
		id: 2,
		image: {
			background: "#7B61FF",
		},
		tags: [
			{ value: "Enterprise", hoverBg: "#D3F3FF", background: "#E4F8FF", color: "#00A3DE" },
			{
				value: "Textile Testing & Certification",
				hoverBg: "#D0D0FD",
				background: "#E3E3FE",
				color: "#4545F5",
			},
		],
		readTime: "5",
		title: "How TESTEX Increased Order Processing Speed by Threefold",
		author: {
			authorImage: "#7B61FF",
			authorName: "Name",
			authorTitle: "Title",
		},
	},
	{
		id: 3,
		image: {
			background: "#9747FF",
		},
		tags: [
			{ value: "SMB", hoverBg: "#CDF1DA", background: "#E1F6E9", color: "#00A338" },
			{
				value: "Textile Testing & Certification",
				hoverBg: "#D0D0FD",
				background: "#E3E3FE",
				color: "#4545F5",
			},
		],
		readTime: "3",
		title: "Cropnuts Uses Precoro to Streamline Requisitioning and Get Rid of Human Error",
		author: {
			authorImage: "#9747FF",
			authorName: "Name",
			authorTitle: "Title",
		},
	},
	{
		id: 4,
		image: {
			background: "#F5455A",
		},
		tags: [
			{ value: "Enterprise", hoverBg: "#D3F3FF", background: "#E4F8FF", color: "#00A3DE" },
			{
				value: "Insurance",
				hoverBg: "#D0D0FD",
				background: "#E3E3FE",
				color: "#4545F5",
			},
		],
		readTime: "5",
		title:
			"How PassportCard Consolidated Multiple Subsidiaries and Locations under One Sustainable Procurement Workflow",
		author: {
			authorImage: "#F5455A",
			authorName: "Name",
			authorTitle: "Title",
		},
	},
	{
		id: 5,
		image: {
			background: "#4ED0FF",
		},
		tags: [
			{ value: "SMB", hoverBg: "#CDF1DA", background: "#E1F6E9", color: "#00A338" },
			{
				value: "Travel & Tourism, Leisure ",
				hoverBg: "#D0D0FD",
				background: "#E3E3FE",
				color: "#4545F5",
			},
		],
		readTime: "4",
		title:
			"How Greater Palm Springs CVB Achieved Operational Efficiency in the Procurement Process",
		author: {
			authorImage: "#4ED0FF",
			authorName: "Name",
			authorTitle: "Title",
		},
	},
];

export const tagState: string[] = [
	"All",
	"SMB",
	"Enterprise",
	"Biotech",
	"Textile Testing & Certification",
	"Insurance",
	"Transport & Logistics",
	"Information Technology",
	"Agriculture, Laboratory Services",
	"Travel & Tourism, Leisure ",
];

export const numberArray = Array.from(Array(20), (_, i) => i + 1);
