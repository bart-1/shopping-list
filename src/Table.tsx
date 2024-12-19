
export type TableRowItems = {
  id: number;
  position: number;
  name: string;
  category: string;
  price: number;
};
 interface TableProps {
  items: TableRowItems[];
    title: string;
}

const Table = ({ items }: TableProps) => {

    const columnName = Object.keys(items[0]).map((key) => <td className="p-3 text-center font-bold">{key}<div className="flex flex-col"><button></button></div></td>)

    const row = items.map(element => { return Object.values(element).map(el => <td className="p-3 text-center">{el}</td>) });



  return (
    <>
          <table className="bg-gray-400">
              <thead className="bg-black text-white"><tr>{columnName}</tr></thead>
              <tbody><tr>{row}</tr></tbody>
          </table>
    </>
  );
};
export default Table;
