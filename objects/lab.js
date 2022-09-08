let radio = {
    stations : [
        {
            name : 'power 105.1',
            songs : [
                {
                    title : 'champangne poetry',
                    artist : 'drake'
                },
                {
                    title : 'voodoo',
                    artist : 'the game'
                },
                {
                    title : 'amari',
                    artist : 'j.cole'
                }
            ]
        },
        {
            name :'hot 97.1',
            songs : [
                {
                    title : 'junya',
                    artist : 'kanye west'
                },
                {
                    title : 'N95',
                    artist : 'kendrick lamar'
                },
                {
                    title : 'dior',
                    artist : 'pop smoke'
                }
            ]
        }
    ],changeStation : () => {
        let randomStation = Math.floor((Math.random() * 100)) % 2;
        console.log(randomStation);
        let randomSong = Math.floor((Math.random() * 100)) % 3;
        console.log(randomSong);
        let randomBoth = radio.stations[randomStation].songs[randomSong];
        console.log('Now Playing' +  randomBoth.title  + 'by' + randomBoth.artist + '!');
    }

}

radio.changeStation();
console.log(Math.floor(Math.random()*10)%3)
