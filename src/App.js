import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/cardList/card-list.component'
import SearchBox from './components/search-box/search-box.component';

const App = () => {
const[searchField,setSearchField] = useState('');
const [monsters,setMonsters] = useState([]);
const [filteredMonsters,setFilteredMonsters] = useState(monsters);

useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster)=>{ 
    return monster.name.toLowerCase().includes(searchField);
     });
   setFilteredMonsters(newFilteredMonsters);  
  
},[searchField,monsters])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')    // returns a promise value
  .then((response)=>response.json())
  .then((users) =>setMonsters(users));
},[])

  const onSearchChange = (event)=>{              //anonymous fn
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    }

  
        
return(
  <div className="App">
     <h1 className='app-title'>Monsters Rol0odex</h1>
     <SearchBox
       className = 'search-box'
       placeholder = 'Search Monsters' 
       onChangeHandler= {onSearchChange}/>
     <CardList monsters={filteredMonsters} /> 
    </div>

)
}

// class App extends  Component {         //1
//   constructor(){
//     super();
//     this.state ={
//       searchField:'',
//    monsters : [],
//     }
//   }

// componentDidMount(){        //will run only once in the starting        3
//   fetch('https://jsonplaceholder.typicode.com/users')    // returns a promise value

//    .then((response)=>response.json())
//    .then((users)=>
//     this.setState(
//       ()=>{
//         return {monsters : users};
//       },
      
//     ))
// }
//   onSearchChange = (event)=>{              //anonymous fn
//     const searchField = event.target.value.toLowerCase();
   
//     this.setState(()=>{                //rerenders when props change or set state is called
//     return { searchField};
//    });
//    console.log("searchchange"); }

//   render()                    //2
//   {
    
//     const { monsters,searchField } = this.state; //destructuring
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster)=>{ 
//       return monster.name.toLowerCase().includes(searchField);
//      });

     
    
//     return (
//     <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//     <SearchBox
//       className = 'search-box'
//       placeholder = 'Search Monsters' 
//       onChangeHandler= {onSearchChange}/>
//     <CardList monsters={filteredMonsters} />
//     </div>
//   );}
 
//   }

export default App;
