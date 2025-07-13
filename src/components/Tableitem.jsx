
const Tableitem = ({ item }) => {
  const {fingerprint_id, date, time} = item ||{}

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{fingerprint_id}</p>
					</td>
					<td className="p-3">
						<p>{date}</p>
					</td><td className="p-3">
						<p>{time}</p>
					</td>
				</tr>
  );
};
export default Tableitem;