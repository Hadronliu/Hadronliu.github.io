import React from 'react'

function Book (props) {
  return (
    <div className="book">
      <div>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.description}</p>
        <p>出版时间:{props.pubdate}</p>
        <p>评分:{props.rating}</p>
      </div>
    </div>
  )
}

function App () {
  return (
    <div className="app">
      <Book
        title="三体"
        author="刘慈欣"
        description="漫长的黑暗静待黎明到来......"
        pubdate="2008-1"
        rating={4.5}
      />
    </div>
  )
}

export default App