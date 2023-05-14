


const SearchBar = ({...rest}) => {
  return (
   
    <div className="flex justify-center m-4"> 
       
        <input className="bg-slate-600 border-none p-4 rounded-lg h-[100%] w-auto text-white"  {...rest} />
    
    </div>

  )
}

export default SearchBar