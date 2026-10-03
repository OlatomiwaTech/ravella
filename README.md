# Ravella Ultra Solution

The website for Ravella Ultra Solution, a Nigerian organic wine and herbal wellness brand. It introduces the product and brand, shares information for prospective distributors, and helps customers get in touch or place an order.



## Website

The site is a responsive, client-rendered website with pages for:

- Home
- Our product
- Our story
- Distributor opportunity
- Contact

Customers can use the order links on the website to contact Ravella on WhatsApp. The brand advertises delivery across Nigeria and to selected international destinations; confirm availability and shipping details with the team when ordering.

## Tech stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React icons

## Getting started

### Requirements

- Node.js 18 or later
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal (typically `http://localhost:5173`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Run the TypeScript project build and create the production site in `dist/`. |
| `npm run preview` | Serve the production build locally for a preview. Run `npm run build` first. |

## Project structure

```text
.
├── index.html          # HTML entry point and page metadata
├── src/
│   ├── App.tsx         # Site layout, pages, and components
│   └── main.tsx        # React entry point and router setup
├── package.json        # Dependencies and npm scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Contact form

The contact form currently handles submission in the browser only: it logs the submitted values to the developer console, resets the form, and displays a confirmation. It is not connected to an email service or backend, so submissions are not delivered to the Ravella team.