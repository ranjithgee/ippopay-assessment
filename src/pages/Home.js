import axios from "../axios/axios";
import { useState } from "react";
import strongPasswordChecker from "../functions/strongPasswordChecker";
import { toast } from "react-toastify";
import ResultsList from "../components/ResultsList";

const Home = () => {
    const [password,setPassword]=useState('');
    const [result,setResult]=useState(null);
    const [resultList,setResultList] = useState(false);
    const handleSubmit = async() => {
        const errCount = strongPasswordChecker(password);
        setResult(errCount);
        toast.info(`Input: ${password} && Output: ${errCount}`);
        const resp = await axios.post('/api/demo',{
            password:password,
            result:errCount
        }).then((res)=>{
            console.log(res);
            toast.success('Data Stored Successfully!!!. View the data in console')
        }); 
    }
  return (
    <div className="px-[20px]">
        <div className="w-[350px] max-w-[100%] flex items-center justify-between mx-auto mt-[40px]">
            <h1 className="text-center text-[25px] font-[700] my-[20px]">
                {resultList ? 'Results' : 'Password Verify'}
            </h1>
            <button type="button" className="bg-black text-white font-[600] p-[7px_18px] rounded-[8px]" onClick={()=>setResultList(!resultList)}>
                {resultList ? 'Go Back' : 'Results'}
            </button>
        </div>
        {
            resultList ? 
            <>
                <ResultsList />
            </> :
            <>
                <form className="w-[350px] max-w-[100%] mx-auto my-[60px] cs_shd p-[35px_30px] rounded-[8px]">
                    <div className="mb-[20px]">
                        <label className="block mb-[10px] font-[600] text-[18px]">Password</label>
                        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    {
                        result &&
                        <div className="mb-[25px]">
                            <label className="inline-block mr-[10px] font-[600] text-[18px]">Result: </label>
                            {result}
                        </div>
                    }
                    <div className="mt-[25px]">
                        <button type="button" className="bg-black text-white font-[600] p-[7px_18px] rounded-[8px]" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </>
        }
    </div>
  )
};

export default Home;
