const IIFEsetAttribute = (() => {
    function private (url, id){
        id.setAttribute("src", url)
    }

    return{
        public(url, id){
            private(url, id)
        }
    }
})()

class Multimedia {
  constructor(url) {
    let _url = url;

    this.setUrl = (value) => (_url = value);
    this.getUrl = () => _url;
  }

  get url() {
    return this.getUrl();
  }

  set url(value) {
    this.setUrl(value);
  }

  setInicio() {
    return "Este metodo es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id
    }

    playMultimedia(){
        IIFEsetAttribute.public(this.getUrl(), this._id)
    }
    setInicio(tiempo){
        IIFEsetAttribute.public(`${this.getUrl()}?start=${tiempo}`, this._id)
    }
}


const videoMusica = document.querySelector("#musica");
const videoPelicula = document.querySelector("#peliculas");
const videoSerie = document.querySelector("#series");

  const video01 = new Reproductor(
    "https://www.youtube.com/embed/g2N0TkfrQhY",
    videoMusica
  );
  video01.setInicio(91);

  const video02 = new Reproductor(
    "https://www.youtube.com/embed/vM-Bja2Gy04",
    videoPelicula
  );
  video02.playMultimedia();

  const video03 = new Reproductor(
    "https://www.youtube.com/embed/VWMP2Xb7B7A",
    videoSerie
  );
  video03.playMultimedia();
