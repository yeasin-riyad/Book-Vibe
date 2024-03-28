import  { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const PagesToRead = () => {

    const [books,setBooks]=useState([])
    useEffect(()=>{
        let data=localStorage.getItem('readBooks');
        setBooks(JSON.parse(data))
       
        
    },[books])

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };




  return (
    <div className='w-full h-full'>

        <ResponsiveContainer height={500} width="100%">

        <BarChart className='my-12'
    width={900}
    height="100%"
    data={books}
    margin={{
      top:20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="bookName" angle={45} textAnchor='start' height={200}/>
    <YAxis/>
    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
      {books.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
      ))}
    </Bar>
  </BarChart>
        </ResponsiveContainer>
         
  
       
    </div>
   
    
   
   
  )
}

export default PagesToRead