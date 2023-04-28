import Like from "./like";
import "./album.css";

const Album = (props)=>{
    const {cover, artist, type, song, songYear, genere}=props;

        return(
            <div className="album">
                <div>
                    <img src={cover}></img>
                </div>
                <div className="album__description">
                    <div className="album__artist"><h1>{artist}</h1></div>
                    <div className="album__type"><p>{type}</p></div>
                    <div className="album__song"><h3>{song}</h3></div>
                    <div className="album__year"><h3>{songYear}</h3></div>
                    <div className="album__genere">
                        <div className="album__genere--text"><p>{genere}</p></div>
                    </div>
                    <div className="album__like">
                        <Like/>
                    </div>
                </div>
            </div>
        );
};

export default Album