import { useEffect } from "react"
import { useState } from "react";
import ProductCard from "./ProductCard";
import Topbar from "./Topbar";
import Search from "./Search";

function Products() {
    const [apires, setApires] = useState([])
    const [list, setList] = useState([])
    const [category, setCategories] = useState([])
    const [selected, setSelection] = useState('')
    const [searchTerm,setSearchterm] = useState('')

    useEffect(() => {
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setApires(json)
                setList(json)
                const c = json.map((obj) => obj.category)
                setCategories([...new Set(c)])
            })
            .catch();
    }, []);
    
    useEffect(() => {
        if (selected === "") {
            setList(apires)
        }
        const res = apires.filter(obj => obj.category === selected)
        setList(res)
        console.log(res)
    }, [selected])

    useEffect(() => {
        if(searchTerm === '')
            {
                setList(apires);
            }
            else{
                setList(apires.filter((ele) => 
                    ele.title.toLowerCase().includes(searchTerm.toLowerCase()) 
            ));
            }
    },[searchTerm])

    console.log(category)
    return (
        <>
            <Topbar category={category} setSelection={setSelection} />
            <Search setSearchterm={setSearchterm} searchTerm={searchTerm}/>
            
            <div className="product-list">
                {list.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}
export default Products