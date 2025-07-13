import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Tableitem from './components/Tableitem';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.2.143:5001/fingerprint')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Attendance list</h2>
	<div className="overflow-x-auto">
		{
      items.length?<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">ID</th>
					<th className="p-3">Date</th>
          <th className="p-3">Time</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item, index) => (
          <Tableitem key={index} item={item} />
        ))}

			</tbody>
		</table>:"No data found"
    }
	</div>
</div>
    </>
  )
}

export default App
