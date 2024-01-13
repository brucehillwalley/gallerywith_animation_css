import data from "../data";
import "../sass/image.scss";
import 'animate.css';


const Image = () => {
  return (
    <><h1 className="header animate__animated animate__bounce">IMAGE GALLERY</h1>
    <div className="pbody">
      {data.map((item) => (
        <div className="pCards">
          <div className="pContainer">
                        
              <img src={item.src.large} alt="" />
           
          </div>

          <h1 className="animate__animated animate__bounce">{item.photographer}</h1>
        </div>
      ))}
    </div></>
  );
};

export default Image;
