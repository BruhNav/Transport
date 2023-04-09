import { createContext, useState } from "react";
import '../Data/sample_db_0km.json' 


const StatesContext = createContext();

function Provider({ children }) {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  const handleFirstChange = (e) => {
    setFirst(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecond(e.target.value);
  };
  const resetInputs = () => {
    setFirst(null);
    setSecond(null);
  };

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