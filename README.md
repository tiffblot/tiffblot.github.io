# tiffblot

This is the portfolio and personal website of Tiffany Chau! View [here](https://tiffblot.com). Website created by [jynnie](https://github.com/jynnie).

## Setup

```
yarn install
yarn start
```

## Instructions

To update what art is shown, go to the [imgur album](https://imgur.com/a/Y4cGbYY) and upload art. In the description of each piece you can add tags and description (i.e. "summer watermelon #watercolor").

To update the about page, go to `pages/AboutPage.tsx` and edit the file.

To update headers:

1. Go to `components/Header.tsx` and add any additional headers to `Header` component
2. Go to `App.tsx` and add any new routes you've created
3. Make any necessary page files in `pages/`. See `pages/EventsPage.tsx` for an example of creating a specific filter gallery.

If you're testing on local, imgur might not show any photos if you just run `yarn start`... I still haven't fixed that (it also doesn't work via `yarn build`), so honestly have just been testing in prod.

### Deployment

To deploy the changes, run `yarn build`.

Copy the files from `build/` to the root folder. Then, commit and push.
