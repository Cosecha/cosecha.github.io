# Cosecha.github.io

[![Join the chat at http://laplaza.movimientocosecha.com/channel/CosechaNetwork](https://dl.dropboxusercontent.com/u/16972085/cosecha/Welcome.svg)](http://laplaza.movimientocosecha.com/channel/CosechaNetwork)

This is the static site behind [movimientocosecha.com](http://movimientocosecha.com). In keeping along with our values, this site is open sourced for anyone to be able to see and propose changes.

Below are some instructions on how to participate in either web design or content contribution.

### Why Harp?

Harp has some really cool features. It is fairly easy to learn for beginners.

# Getting Started
## Setup

To start hacking you first need the following installed:

1. Node.js
2. Harp.js (globally)
3. Git

Once you have these ready you need to clone this repo into your machine:

```
git clone https://github.com/cosecha/cosecha.github.io.git
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

Now it is time to make a pull request so that your changes are merged to the master branch of our repository. Isn't open source beautiful?
