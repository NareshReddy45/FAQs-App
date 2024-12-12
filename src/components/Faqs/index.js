import FaqItem from '../FaqItem'
import './index.css'

function Faqs({faqsList}) {
  return (
    <div className="bg-container">
      <div className="container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="faq-list">
          {faqsList.map(faq => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
