import Cards from "../cards/cards.components";
import './card-list.styles.css';


const CardList = ({monsters}) =>(
        <div className="card-list" >
           { monsters.map((monster) =>{
             return (
                    <Cards monster={monster}/>
                      )})}
                 </div>
    )


// class CardList extends Component {
//     render(){
        

//      const { monsters} = this.props;
//         return(
//         <div className="card-list">
//              { monsters.map((monster) =>{
                 
//                  return (
//                 <Cards monster={monster}/>
                 
//                  )})}
//         </div>
//         )
//     }

// };

export default CardList;