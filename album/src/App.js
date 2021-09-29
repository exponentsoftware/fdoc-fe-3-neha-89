
import AddAlbums from './components/AddAlbums';
import Albums from './components/Albums';
import {BrowserRouter, Route} from 'react-router-dom'
import { useState } from 'react';
import  Navbar  from './components/Navbar';

function App() {
  const [albums, setAlbums] = useState([
    {
      id: 0,
      artist: "A.R.Rehman",
      album: "Rockstar",
      albumCover:
        "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature-306x393.jpg",
      songs: "",
    },
    {
      id: 1,
      artist: "A.R.Rehman",
      album: "Rang De Basanti",
      albumCover:
        "https://i.pinimg.com/564x/c0/d7/1a/c0d71a26ff8611ed6ea66392c6edb593.jpg",
      songs: "",
    },
    {
      id: 2,
      artist: "Shankar–Ehsaan–Loy",
      album: "Taare Zameen Par",
      albumCover:
        "https://jyoti834.files.wordpress.com/2015/11/aa.jpg",
      songs: "",
    },
    {
      id: 3,
      artist: "A.R. Rahman",
      album: "Highway",
      albumCover:
        "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/highway-et00014920-17-06-2020-12-28-06.jpg",
      songs: "",
    },
    {
      id: 4,
      artist: "A.R. Rahman",
      album: "Ranjhana",
      albumCover: "https://i.ytimg.com/vi/lfmYmTpIH4o/movieposter.jpg",
      songs: "",
    },
    {
      id: 5,
      artist: "Shantanu Moitra",
      album: "3 idiots",
      albumCover: "https://www.meinstyn.com/wp-content/uploads/2017/01/3-Idiots-Movie-Poster-Aamir-Khan-Kareena-Kapoor-R-Madhavan-Sharman-Joshi-Full-HD-Desktop-Wallpaper.jpg",
      songs: "",
    }
  ])

  const [foundAlbums, setFoundAlbums] = useState([])

  const handleAddAlbum = (newAlbum) => {
    setAlbums([...albums, {
      id: newAlbum.id,
      title: newAlbum.title,
      artist: newAlbum.artist,
      image: newAlbum.image
    }])    
    
  }

  const handleDeleteAlbum = (id) => {
    let newArray = albums.filter((item) => item.id !== id)
    setAlbums(newArray)
  }

  const handleSearchAlbum = (text) => {

    const filteredBasedOnTitle = albums.filter((item) => item.title.toLowerCase() == text.toLowerCase())
    const filteredBasedOnArtist = albums.filter((item) => item.artist.toLocaleLowerCase() == text.toLowerCase())
    if(filteredBasedOnTitle.length > 0){
      setFoundAlbums(filteredBasedOnTitle)
    }else if(filteredBasedOnArtist.length > 0) {
      setFoundAlbums(filteredBasedOnArtist)
    }else{
      setFoundAlbums("")
    }
    
   
  }

  console.log(foundAlbums)

  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar />
        <Route path="/addalbums" >
          <AddAlbums handleAddAlbum={handleAddAlbum}/>
        </Route>
        
        <Route path="/albums">
        < Albums foundAlbums={foundAlbums} handleSearchAlbum={handleSearchAlbum} handleDeleteAlbum={handleDeleteAlbum} albumList={albums}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
