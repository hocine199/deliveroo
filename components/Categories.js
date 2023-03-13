import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import SanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    const query = `*[_type == "category"]`
    SanityClient.fetch(query).then((data)=>{
      setCategories(data);
    })

  },[])

  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    
    >
        {/*CategoryCard*/}
        {categories.map(category=>(
          <CategoryCard 
            key= {category._id}
            imgUrl={urlFor(category.image.asset._ref).width(200).url()}
            title={category.name}
          />
        ))}
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing'/>
    </ScrollView>
  )
}

export default Categories