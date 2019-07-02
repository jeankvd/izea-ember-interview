# IZEA Project

Ember.js app that shows a list of paginated posts. You can see it in action [here](http://jean-izea.surge.sh/posts).

![](https://res.cloudinary.com/dub9ykyuq/image/upload/v1562073646/2019-07-02_09.19.45_j4np4k.gif)

## Routes

This app only contains the `/posts` route where the application takes place.

## Components

#### post-pagination.js
Responsible for the pagination logic.

#### post.js
A component that handles the toggling of the side panel.

#### side-panel.js
Side Panel component that makes a network call to the API to display user. I would've preferred to use query params for this. If there is a more "ember" way to do this please let me know

## Challenges

1. Ember's linter didn't like my default indentation.
2. Making a network call after a component action was challenging. Not due to the call itself but because I didn't know what was the ember way of doing it. I ended up calling the API on the component `didInsertElement()` method.

## Nice Surprises

1. Coming from Vue and React, I like how "batteries included" ember.js is, it feels very robust.
2. The CLI is _really_ nice to have, especially when starting out.
3. I was surprised by Ember's `later()` method that acts as setTimeout but is aware of when it is being run on tests, it felt so nice to just change my `setTimeout` with it and see one of my tests automatically pass
