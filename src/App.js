import Accordion from './components/Accordion.js'
import React, { Component } from 'react'

import './App.css'

class App extends Component {

  render() {

    const sections = [
      {
        title: 'first section',
        content: [
          { href: 'http://www.gooogle.com', text: 'heyo here\'s some text' },
          { href: 'http://www.gooogle.com', text: 'yo' },
          { href: 'http://www.gooogle.com', text: 'almost there' },
          { href: 'http://www.gooogle.com', text: 'bye now' }
        ]
      },
      {
        title: 'second section',
        content: [
          { href: 'http://www.gooogle.com', text: 'heyo here\'s some text' },
          { href: 'http://www.gooogle.com', text: 'yo' },
          { href: 'http://www.gooogle.com', text: 'almost there' },
          { href: 'http://www.gooogle.com', text: 'bye now' }
        ]
      },
      {
        title: 'third section',
        content: [
          { href: 'http://www.gooogle.com', text: 'heyo here\'s some text' },
          { href: 'http://www.gooogle.com', text: 'yo' },
          { href: 'http://www.gooogle.com', text: 'almost there' },
          { href: 'http://www.gooogle.com', text: 'bye now' }
        ]
      },
      {
        title: 'fourth section',
        content: [
          { href: 'http://www.gooogle.com', text: 'heyo here\'s some text' },
          { href: 'http://www.gooogle.com', text: 'yo' },
          { href: 'http://www.gooogle.com', text: 'almost there' },
          { href: 'http://www.gooogle.com', text: 'bye now' }
        ]
      },
    ]
    return (
      <div className="App">
        <Accordion sections={ sections } />
      </div>
    );
  }
}

export default App
