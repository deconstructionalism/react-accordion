import React, { Component } from 'react'

import './Accordion.css'

export class Accordion extends Component {

  static defaultProps = {
    sections: []
  }

  state = {
    activeSectionId: null
  }

  setActiveSection = activeSectionId => this.setState({ activeSectionId })

  render() {

    const { sections } = this.props
    const { activeSectionId } = this.state

    const AccordionSections = sections.map((section, index) => (
      <AccordionSection setActiveSection={ this.setActiveSection }
                        key={ index }
                        sectionIndex={ index }
                        active={ activeSectionId == index }
                        { ...section } />
    )                                               
   )

    return (
      <div className="Accordion">
        { AccordionSections }
      </div>
    )
  }
}

export default Accordion

const AccordionSection = (
  {
    title,
    content,
    active,
    setActiveSection,
    sectionIndex
  }) => {

  const handleSectionClick = () => {
    setActiveSection(sectionIndex)
  }

  const classes = `AccordionSection ${active && 'active'}`

  const AccordionItems = content.map((item, index) => (
    <AccordionItem { ...item } 
                   key={index}/>)
  )

  return (
    <div className={ classes }
         onClick={ handleSectionClick }>
       <h1>{ title }</h1>
       <div>{ AccordionItems }</div>
    </div>
  )
}

const AccordionItem = ({ text, href }) => {
  return (
    <p className='AccordionItem'>
      <a href={ href}>{ text }</a>
    </p>
  )
}