import SayMyName from "./components/SayMyName"
import HelloWorld from "./components/HelloWorld"
import Pessoa from "./components/Pessoa"
import Item from "./components/Item"

function App() {
    const ola = "Hank";
    const nome = "Jesse Pinkman";
    
    return(
        <div>
            <HelloWorld/>
            <p>
                ola de novo
            </p>
            <HelloWorld/>
            <SayMyName nome="heisenberg"/>
            <SayMyName nome="Gus Fring"/>
            <SayMyName nome={nome}/>
            <SayMyName nome={ola}/>
            <Pessoa 
                nome="skyller"
                idade="42" 
                profissao="comida do ted"
                foto="https://via.placeholder.com/250"
            />
            <Item marca={"ferrari"} lancamento={"2003"} />
            
        </div>
        )
}
export default App