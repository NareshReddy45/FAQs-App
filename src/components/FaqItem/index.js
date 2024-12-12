import {useState} from 'react'
import './index.css'

function FaqItem({faq}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <li className="faq-item">
      <div className="faq-header">
        <h2 className="question-text">{faq.questionText}</h2>
        <button className="toggle-button" onClick={toggleAnswer}>
          <img
            src={
              isOpen
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isOpen ? 'minus' : 'plus'}
            className="icon"
          />
        </button>
      </div>
      {isOpen && <p className="answer-text">{faq.answerText}</p>}
    </li>
  )
}

export default FaqItem
