import React, {Component} from "react";
import Membro from './Components/Membro';


class App extends Component{
    render(){
        return(
            <div>
                <Membro nome="Visitante"/>
            </div>
        )
    }
}

export default App;