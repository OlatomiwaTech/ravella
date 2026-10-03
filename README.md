# Ravella Ultra Solution

The website for Ravella Ultra Solution, a Nigerian organic wine and herbal wellness brand. It introduces the product and brand, shares information for prospective distributors, and helps customers get in touch or place an order.



## Website

The site is a responsive, client-rendered website with pages for:

- Home
- Our product
- Our story
- Distributor opportunity
- Contact

Customers can prepare product and package enquiries on the website and send them to Ravella through WhatsApp. The brand advertises delivery across Nigeria and international enquiries for Cameroon, Ghana, Benin Republic, the USA, UK, Canada and other destinations. Confirm stock, current pricing, delivery cost and timing, payment methods, and return terms with Ravella before paying.

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
│   ├── main.tsx        # React entry point and router setup
│   └── styles.css      # Global and component styles
├── public/
│   └── products.png    # Ravella product photo
├── package.json        # Dependencies and npm scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Orders and contact

Product, package and contact forms open a prefilled WhatsApp message to the order number linked from Ravella’s published website. The visitor reviews and sends the message in WhatsApp; the site does not process payments or confirm orders. The order list is held in browser memory and is cleared when the page reloads. Ravella must confirm availability, final pricing, delivery and payment details directly.