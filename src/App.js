import Header from './myproject/common/header';
import { Footer } from './myproject/common/footer';
import { Home } from './myproject/index';
import { Blog } from './myproject/blog';
import { About } from './myproject/about';
import { Contact } from './myproject/contact';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components

function App() {    

  let arr;
   if(localStorage.getItem('data')==null){
    console.log('iff')
     arr = [];
   }else{
    // console.log('elsee')
     arr = JSON.parse(localStorage.getItem("data"));
   }

   const [addmore, setMoredata] = useState(arr);
  //  console.log(addmore);
   const insertData =  function(name,email,address,country){ 
   
      const data = {
        name: name,
        email: email,
        address: address,
        country: country
      }
      setMoredata([...addmore,data])
      // localStorage.setItem('data',JSON.stringify(data))
  }
  useEffect(function(){
    console.log('hellloo');
    localStorage.setItem('data',JSON.stringify(addmore))
  },[addmore]);

  const onDelete = (indexToDelete) => {
    // console.log("ddd "+indexToDelete)
    // console.log(addmore); return false;
    const filteredData = addmore.filter(function(value, index){  return index!==indexToDelete  });
    // console.log(filteredData)
    setMoredata(filteredData);
  }
  return (
    <Router>
      <>   
        <Header />
          <Routes>
            <Route path="/" element={<Home insert={insertData} response={addmore} delete = {onDelete} />} />         
            <Route path="/blog" element={<Blog />} />     
            <Route path="/about" element={<About />} />  
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

