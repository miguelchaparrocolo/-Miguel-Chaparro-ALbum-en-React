import Album from './Album/album'
import './App.css'

const albumes = [
  {
    cover:'https://i.postimg.cc/QxJ0jSfY/portada-album.jpg',
    artist:'Rozes',
    type:'Solista',
    song:'Under the Grave',
    songYear:'(2016)',
    genere:'Dance',
  }
];

function App(){
  return(
    <>
      {albumes.map((albumes, index)=>{
        return(
          <Album
            Key={index}
            cover={albumes.cover}
            artist={albumes.artist}
            type={albumes.type}
            song={albumes.song}
            songYear={albumes.songYear}
            genere={albumes.genere}
          />
        );
      })}
    </>
  );
}

export default App
