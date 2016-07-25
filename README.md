# Cosecha.github.io

[![Join the chat at http://laplaza.movimientocosecha.com/channel/CosechaNetwork](https://dl.dropboxusercontent.com/u/16972085/cosecha/Welcome.svg)](http://laplaza.movimientocosecha.com/channel/CosechaNetwork)

This is the static site behind [movimientocosecha.com](http://movimientocosecha.com). In keeping along with our values, this site is open sourced for anyone to be able to see and propose changes.

Below are some instructions on how to participate in either web design or content contribution.

# Edit Requests

If you see a change that is needed on the site, and are not a developer, there is a process to request edits using **GitHub Issues**.

![GitHub Issues](https://dl.dropboxusercontent.com/u/16972085/cosecha/cosecha-issues.png)

Click on "New Issue":

![New Issue](https://dl.dropboxusercontent.com/u/16972085/cosecha/cosecha-new-issue.png)

It is suggested to use the Issue Template provided, as it will be used during the triage process.

![Issue Template](https://dl.dropboxusercontent.com/u/16972085/cosecha/Screenshot%20from%202016-07-25%2012-38-38.png)

After this, project maintainers will ask questions, clarify things, add appropriate labels etc.

The issue will then be ready to be taken on by anyone wishing to contribute.

If you would like to contribute with development, take a look at the following section and check out the **[open issues ready to be worked on](https://github.com/Cosecha/cosecha.github.io/issues?q=is%3Aopen+is%3Aissue+label%3Astatus-approved)**.



# For Developers
## Setup

To start hacking you first need the following installed:

1. [Node.js](https://nodejs.org/en/)
2. [Harp.js (globally)](http://harpjs.com/)
3. [Git](https://git-scm.com/)
4. [Gulp](http://gulpjs.com/)

Once you have these ready you need to fork this repo into your account, then download it onto your machine. Replace <your_username> with your GitHub username, or the account where you forked the repo into.

```
git clone https://github.com/<your_username>/cosecha.github.io.git
```

Now move to that directory:

```
cd cosecha.github.io
```

Now install all the NPM dependencies:

```
npm install
```
NOTE: if that doesn't work, you may need to prefix the command with `sudo`.

## Developing

To start hacking/developing, simply run:

```
gulp
```
Your default browser should open up to `http://localhost:3001/`. It's a good idea to keep the browser visible as you develop, as any changes you make to files within the `_harp/` directory will cause the browser to refresh as soon as you save.

#### BrowserSync

One really cool thing about this dev setup is that you can test on mobile devices pretty easily using BrowserSync, which is already running when you start your local server.

You can play with the settings at:

```
http://localhost:3002
```

As long as you're mobile device is connected to the same wifi network as your dev machine running gulp, you can use the url provided in the BrowserSync settings page under "External". The url will look something like this:

```
http://192.168.1.107:3001
```
Type that up in your phone's browser, and voila, you are visiting the dev site! This is really handy to test any edits you make.

## Compiling for GitHub Pages

This is a little more involved... two commands.

```
gulp compile
```
then
```
gulp clean
```
This copies the compiles harp site to the root directory, without overwriting existing files, the way harp does this by default.

## Getting your changes merged

Now it is time to make a pull request so that your changes are merged to the master branch of our repository.

Isn't open source beautiful?

We appreciate every contribution! New contributors will get special thanks on Twitter.
