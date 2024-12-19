import useAppStore from "./AppStore";
import Table, { TableRowItems } from "./Table";

function App() {

  const bears = useAppStore((state) => state.bears);
  const addBears = useAppStore((state) => state.increasePopulation);
  const removeBears = useAppStore((state) => state.removeAllBears)
  
const testItems:TableRowItems[] = [{id: 0, position: 0, name: 'chleb', category: 'pieczywo', price: 0}]

  return (
    <>
    
      <button className='p-3 bg-black text-white hover:bg-red-600' onClick={addBears}>more</button>
      <button className='p-3 bg-black text-white hover:bg-red-600' onClick={removeBears}>null</button>
      <h2>{bears}</h2>

      <Table items={testItems} title={ 'test'} />
    </>
  )
}

export default App
