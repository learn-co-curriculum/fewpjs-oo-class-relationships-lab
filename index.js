class Song {
  constructor( title, artist, genre ) {
    this._title = title
    this._artist = artist
    this._genre = genre
  }

  get title() {
    return this._title
  }

  get artist() {
    return this._artist
  }

  get genre() {
    return this._genre
  }

  get caption() {
    return `'${this.title}' by ${this.artist.name} (${this.genre.name})`
  }
}

class Artist {
  constructor( name ) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name( name ) {
    this._name = name
  }
}

class Genre {
  constructor( name ) {
    this._name = name
  }

  get name() {
    return this._name
  }
}