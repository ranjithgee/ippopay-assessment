import axios from "../axios/axios";
import { useEffect, useState } from "react";

const ResultsList = () => {
    const [results,setResults] = useState(null);
    const getResults = async() => {
        const resp = await axios.get('/api/demo');
        setResults(resp.data);
    }
    useEffect(()=>{
        getResults();
    },[])
  return (
    <div className="w-[380px] max-w-[100%] mx-auto my-[60px]">                
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-4">
                       Input
                    </th>
                    <th scope="col" className="px-6 py-4">
                        Result
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                   results ? results.map(item=>{
                        return(
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.password}
                                </th>
                                <td className="px-6 py-4">
                                    {item.result}
                                </td>
                            </tr>
                        )
                    }) : 
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" colSpan={'2'} className="text-center px-6 py-4 font-[700] text-gray-900 whitespace-nowrap dark:text-white">
                            Loading...
                        </th>
                    </tr>
                }
            </tbody>
        </table>
    </div>
</div>
  )
};

export default ResultsList;
