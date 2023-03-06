# Looptimize Website

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Example.astro
│   └── data/
│       └── Example.json
│   ├── layouts/
│   │   └── Example.astro
│   └── pages/
│       └── Example.astro
│   └── scripts/
│       └── Example.ts
│   └── styles/
│       └── Example.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any web components.

Any static assets, like images, can be placed in the `public/` directory.

## Updating Content

The website is built automatically based on the content found inside of the `.json` files found in the `src/data` directory of this project. Each file in there represents some core aspect of the business such as `customer_reviews.json` and `company_details.json`. These files all follow the [schema.org](https://www.schema.org) specification which is what allows search engines such as Google to deeply understand the full context of our website and in some cases change how it is shown in their search results. 

This is a part of an intentional strategy to ensure that we keep the **content** separated from the **code** which allows us to make changes to the website simply by editing these data files.

## Design System

The website also has a built in design system which allows us to maintain a consistent set of styles across the entire website where we can once again keep those kinds of decisions separated from the rest of the codebase. The design system is **based on** the [Material 3](https://m3.material.io/) specifications from Google but is set up in such a way where we can retain more or less full control over the smaller details. A good example of this would be found inside of the `src/styles/design-system/tokens.css` file which contains all of the different ways we can tweak the overall look and feel in one place. This allows us to simply say things like use the `Display Large` font-style here on the page with the `Primary Color` background and text colors and everything will just work. 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
