//  Biblioteca musical
const musicLibrary = [
    {
        band: "Mad Season",
        album: "Above",
        year: 1995,
        songs: ["Wake Up", "X-Ray Mind", "River Of Deceit", "Im Above", "Artificial Red", "Lifeless Dead", "I Dont Know Anything", "Long Gone Day", "November Hotel", "All Alone" ]
    },
    {
        band: "Temple Of The Dog",
        album: "Temple Of The Dog",
        year: 1991,
        songs: ["Say Hello 2 Heaven", "Reach Down", "Hunger Strike", "Pushin Forward Back", "Call Me A Dog", "Times Of Trouble", "Wooden Jesus", "Your Saviour", "Four Walled World", "All Night Thing"]
    },
    {
        band: "Soundgarden",
        album: "Badmotorfinger",
        year: 1991,
        songs: ["Rusty Cage", "Outshined", "Slaves & Bulldozers", "Jesus Christ Pose", "Face Pollution", "Somewhere", "Searching With My Good Eye Closed", "Room A Thousand Years Wide", "Mind Riot", "Drawing Flies", "Holy Water", "New Damage"]
    },
    {
        band: "Soundgarden",
        album: "Down On The Upside",
        year: 1996,
        songs: ["Pretty Noose", "Rhinosaur", "Zero Chance", "Dusty", "Ty Cobb", "Blow Up The Outside World", "Burden In My Hand", "Never Named", "Applebite", "Never The Machine Forever", "Tighter & Tighter", "No Attention", "Switch Opens", "Overfloater", "An Unkind", "Boot Camp" ]
    },
    {
        band: "Soundgarden",
        album: "Superunknown",
        year: 1994,
        songs: ["Let Me Drown", "My Wave", "Fell On Black Days", "Mailman", "Superunknown", "Head Down", "Black Hole Sun", "Spoonman", "Limo Wreck", "The Day I Tried To Live", "Kickstand", "Fresh Tendrils", "4th Of July", "Half", "Like Suicide", "She Likes Surprises"]
    },
    {
        band: "Pearl Jam",
        album: "Ten",
        year: 1991,
        songs: ["Once", "Even Flow", "Alive", "Why Go", "Black", "Jeremy", "Ocean", "Porch", "Garden", "Deep",  "Release"]
    },
    {
        band: "Pearl Jam",
        album: "Vitalogy",
        year: 1994,
        songs: ["Last Exit", "Spin The Black Circle", "Not For You", "Tremor Christ", "Nothingman", "Whipping", "Pry, To", "Corduroy", "Bugs", "Satans Bed", "Better Man", "Aye Davanita", "Immortality", "Hey Foxymophandlemama, Thats Me"]
    },
    {
        band: "Pearl Jam",
        album: "Backspacer",
        year: 2006,
        songs: ["Gonna See My Friends", "Got Some", "The Fixer", "Johnny Guitar", "Just Breath", "Amongst The Waves", "Unthought Known", "Supersonic", "Speed Of Sound", "Force Of Nature", "The End"]
    },
    {
        band: "Mother Love Bone",
        album: "Apple",
        year: 1990,
        songs: ["This Is Shangri La", "Stardog Champion", "Holy Roller", "Bone China", "Come Bite The Apple", "Stargazer", "Heartshine", "Captain Hi-Top", "Man Of Golden Words", "Capricorn Sister", "Gentle Groove", "Mr Danny Boy", "Crown Of Thorns"]
    },
    {
        band: "Alice In Chains",
        album: "Dirt",
        year: 1992,
        songs: ["Them Bones", "Dam That River", "Rain When I Die", "Sickman", "Rooster", "Junkhead", "Dirt", "God Smack", "Iron Gland", "Hate To Feel", "Angry Chair", "Down In A Hole", "Would?"]
    },
    {
        band: "Alice In Chains",
        album: "Jar Of Flies",
        year: 1994,
        songs: ["Rotten Apple", "Nutshell", "I Stay Away", "No Excuses", "Whale & Wasp", "Dont Follow", "Swing On This"]
    },
    {
        band: "Alice In Chains",
        album: "Facelift",
        year: 1991,
        songs: ["We Die Young", "Man In The Box", "Sea Of Sorrow", "Bleed The Freak", "I Cant Remember", "Love,Hate,Love", "It Aint Like That", "Sunshine", "Put You Down", "Confusion", "I Know Something", "Real Thing"]
    },
    {
        band: "Nirvana",
        album: "Nevermind",
        year: 1991,
        songs: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Loung Act", "Stay Away", "On A Plain", "Something In The Way"]
    },
    {
        band: "Nirvana",
        album: "In Utero",
        year: 1993,
        songs: ["Serve The Servants", "Scentless Apprentice", "Heart-Shaped Box", "Rape Me", "Frances Farmer Will Have Her Revenge In Seattle", "Dumb", "Very Ape", "Milk It", "Pennyroyal Tea", "Radio Friendly Unit Shifter", "Tourettes", "All Apologies"]
    },
];
        console.log(musicLibrary)

// Definir el reproductor de música más adelante
const musicPlayer = {
    currentAlbumIndex: 0,
    currentSongIndex: 0,
    isPlaying: false,
    play: function() {
        this.isPlaying = true;
        console.log(`Reprogit statusduciendo: ${this.getCurrentSong()}`);
    },
    pause: function() {
        this.isPlaying = false;
        console.log(`Pausado: ${this.getCurrentSong()}`);
    },
    next: function() {
        this.currentSongIndex = (this.currentSongIndex + 1) % musicLibrary[this.currentAlbumIndex].songs.length;
        console.log(`Siguiente canción: ${this.getCurrentSong()}`);
    },
    previous: function() {
        this.currentSongIndex = (this.currentSongIndex - 1 + musicLibrary[this.currentAlbumIndex].songs.length) % musicLibrary[this.currentAlbumIndex].songs.length;
        console.log(`Canción anterior: ${this.getCurrentSong()}`);
    },
    getRandomSong: function() {
        const randomAlbumIndex = Math.floor(Math.random() * musicLibrary.length);
        const randomSongIndex = Math.floor(Math.random() * musicLibrary[randomAlbumIndex].songs.length);
        this.currentAlbumIndex = randomAlbumIndex;
        this.currentSongIndex = randomSongIndex;
        console.log(`Canción aleatoria: ${this.getCurrentSong()}`);
    },
    getCurrentSong: function() {
        const currentAlbum = musicLibrary[this.currentAlbumIndex];
        return `${currentAlbum.band} - ${currentAlbum.album} (${currentAlbum.year}): ${currentAlbum.songs[this.currentSongIndex]}`;
    }
};


musicPlayer.play();
musicPlayer.next();
musicPlayer.pause();
musicPlayer.previous();
musicPlayer.getRandomSong();
