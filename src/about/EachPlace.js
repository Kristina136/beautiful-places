
function EachPlace({name, place, image, id}) {
   return(
             
                <div className="place">
                  <p>{name}</p>
                  <p>{place}</p>
                  <img src={image} alt="nature" className="nature"/>
                </div>
            
     )      
  }
  
  export default EachPlace;
  