import { createContext, useState } from "react";
import '../Data/sample_db_0km.json' 

//creating the context

const StatesContext = createContext();

//creating the provider

function Provider({ children }) {

  //states for the two questions

  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  //functions to handle the change in the options

  const handleFirstChange = (e) => {
    setFirst(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecond(e.target.value);
  };

  //function to reset the options if the user wants to change the answer

  const resetInputs = () => {
    setFirst(null);
    setSecond(null);
  };

  //returning the provider

  return (
    <StatesContext.Provider
      value={{ first, second, handleFirstChange, handleSecondChange, resetInputs }}
    >
      {children}
    </StatesContext.Provider>
  );
}

export { Provider };
export default StatesContext;