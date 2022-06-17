import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    //categories.push(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  

  return (
    <>
          {/* titulo */}
          <h1>GifExpertApp</h1>

          {/* input */}
          <AddCategory
              onNewCategory={ onAddCategory }
          />
        
          {/* Listado de Gifs */}
            { categories.map( (category) => (
                 <GifGrid key={ category } 
                          category={ category }
                 />
              ))
            } 
           
          {/* Gif Item */}
    </>
  )
}
