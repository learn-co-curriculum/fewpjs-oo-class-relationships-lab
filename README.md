# Class Relationships Lab

## Learning Goals

- Create a simple multi class application with three related classes
- Practice class relationships by establishing dependencies between classes

## Introduction

In this lab, we're going to practice writing related classes. By storing classes
as properties of other classes, we can share data and behaviors between
classes.

## Instructions

You've been asked to create a classes to help organize a music collection. You
are tasked with creating three classes to represent artists, genres and songs.

For this application, an individual song will keep track of its artist and genre.

- The `Genre` class should take in one parameter, `name`, and assign it to a
  private property, `_name`. `Genre` should have a getter, `name`, that returns
  the private property.

- The `Artist` class should also take in one parameter, `name`, and assign it
  to a private property, `_name`. `Artist` should have a getter and setter for
  `name` to return or modify `_name`.

- The `Song` class should take in three parameters, a title, an instance of an
  artist, and an instance of a genre. These should be assigned to three private
  properties, `_title`, `_artist`, and `_genre`. `Song` should have a `caption` getter that takes the title, artist name and genre name and interpolates them
  into a single sentence. In example, for the song "Don't Stop Me Now" by "Queen":

```js
let queen = new Artist('Queen');
let popRock = new Genre('Pop Rock');
let dontStopMeNow = new Song("Don't Stop Me Now", queen, popRock);
dontStopMeNow.caption;
// => 'Don't Stop Me Now by Queen (Pop Rock)'
```

## Conclusion

Object Orientation allows us to represent systems of related data in a succinct
and organized manner. With just these three classes, we could create instances
to represent a collection of songs of any size, complete with references to
their authors and genres.
