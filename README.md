# Solar Dashboard

I wanted to see my current solar data and power usage in one small dashboard. 
For the power usage I used the [Toon API](https://developer.toon.eu/).

APsystems does not have an API available, but it does have the option to enable a custom dashboard via a public facing webpage. 
This page is scraped by puppeteer to retrieve the data from my solar panels.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```
