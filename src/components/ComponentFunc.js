const ComponentFunc = ({count,setCount}) => {

    const addOne = (count)=>{
        let x = count+1
        // console.log(x)
        return x
    }

    const reduceOne = (count)=>{
        if(count>=1){
        let x = count-1
        return x
          
        }
        return count
  }

    return ( 
        <div>
            <button onClick={()=>setCount(reduceOne(count))}>reduce 1</button>
                <h1>{count}</h1>
            <button onClick={()=>setCount(addOne(count))}>add 1</button>
        </div> 
    );
}
 
export default ComponentFunc;