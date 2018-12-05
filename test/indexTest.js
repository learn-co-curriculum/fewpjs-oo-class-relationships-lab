describe( "index.js", () => {



  describe( "Genre", () => {
    let rock
    let pop
    let soul
    before( () => {
      rock = new Genre( "Rock" )
      pop = new Genre( "Pop" )
      soul = new Genre( "Soul" )
    } )

    it( "has `name` property", () => {
      expect( rock._name ).to.equal( "Rock" )
      expect( pop._name ).to.equal( "Pop" )
      expect( soul._name ).to.equal( "Soul" )
    } )
  } )
  describe( "Artist", () => {
    let artist
    before( () => {
      artist = new Artist( "Prince" )
    } )

    it( "has a private `_name` property", () => {
      expect( artist._name ).to.equal( "Prince" )
    } )

    it( "has a `name` getter", () => {
      expect( artist.name ).to.equal( "Prince" )
    } )

    it( "has a `name` setter", () => {
      artist.name = "the artist formerly known as Prince"
      expect( artist.name ).to.equal( "the artist formerly known as Prince" )
      expect( artist._name ).to.equal( "the artist formerly known as Prince" )
    } )
  } )




  describe( "Song", () => {
    let rock
    let artist
    let purpleRain
    before( () => {
      rock = new Genre( "Rock" )
      artist = new Artist( "Prince" )
      purpleRain = new Song( "Purple Rain", artist, rock )
    } )

    it( "has a private `_title` property", () => {
      expect( purpleRain._title ).to.equal( "Purple Rain" )
    } )

    it( "has a private `_artist` property that is assigned a Genre instance", () => {
      expect( purpleRain._artist ).to.be.instanceof( Artist )
      expect( purpleRain._artist ).to.equal( artist )
      expect( purpleRain._artist._name ).to.equal( "Prince" )
    } )

    it( "has a private `_genre` property that is assigned a Genre instance", () => {
      expect( purpleRain._genre ).to.be.instanceof( Genre )
      expect( purpleRain._genre ).to.equal( rock )
      expect( purpleRain._genre._name ).to.equal( "Rock" )
    } )

    it( "has a `caption` getter that returns a String with the title and artist name", () => {
      expect( purpleRain.caption ).to.equal( "Purple Rain by Prince" )
    } )

  } )

} )