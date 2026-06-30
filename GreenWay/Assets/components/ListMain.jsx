import { ListGroup } from "react-bootstrap";
import "./Main.css";
function ListMain({list,changeFav,selectedPlaceId,moveMap,isFav}){
    if((list.length === 0 || !list)) return(
        <ListGroup.Item>
            조건에 맞는 결과가 없습니다.
        </ListGroup.Item>
    )
    else return(
        list.map((item) => ( // return
            <ListGroup.Item
            key={item.id}
            variant="light"
            onClick={() => moveMap(item)}
            style={{ cursor: "pointer" }}
            className={item.id === selectedPlaceId ? "selectedPlace":""}
            >
            {item.name}
            <button className = {(isFav ? "non_" : "") + "favorite_btn"} onClick={(e)=>{
                e.stopPropagation();
                if(localStorage.getItem(`favorite_${item.id}`) === 'true') {
                    localStorage.removeItem(`favorite_${item.id}`);
                } 
                else {
                    localStorage.setItem(`favorite_${item.id}`,'true');
                }
                changeFav();
                }}>★</button>                                    
                </ListGroup.Item>
            ))
    )
}
export default ListMain;