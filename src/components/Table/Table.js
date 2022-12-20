import React from 'react'

import './Table.css'

const members = [
  {
    name: 'Петя',
    complex: '-',
    days: '80',
    months: '24',
    pay: '30%',
    price: '3,700,000'
  },
  {
    name: 'Вася',
    complex: '-',
    days: '90',
    months: '24',
    pay: '100%',
    price: '3,700,000'
  },
  {
    name: 'Сережа',
    complex: '-',
    days: '75',
    months: '22',
    pay: '60%',
    price: '3,700,000'
  },
]

function Table() {
  return (
    <div>
      <table className="table">
        <tr className="table__history">
          <td className="table__first-column">Параметры и требования</td>
          {members.map((member, index) => (
            <td className="table__content">Участник №{index+1}<br/>{member.name}</td>
          ))}
        </tr>
        <tr>
          <td className="table__first-column">Наличие комплекса мероприятий, повышающих страндарты качества изготовления</td>
          {members.map((member) => (
            <td className="table__content">{member.complex}</td>
          ))}
        </tr>
        <tr>
          <td className="table__first-column">Срок изготовления лота, дней</td>
          {members.map((member) => (
            <td className="table__content">{member.days}</td>
          ))}
        </tr>
        <tr>
          <td className="table__first-column">Гарантийные обязательства, мес</td>
          {members.map((member) => (
            <td className="table__content">{member.month}</td>
          ))}
        </tr>
        <tr>
          <td className="table__first-column">Условия оплаты</td>
          {members.map((member) => (
            <td className="table__content">{member.pay}</td>
          ))}
        </tr>
        <tr>
          <td className="table__first-column">Срок изготовления лота, руб. (без НДС)</td>
          {members.map((member) => (
            <td className="table__content">{member.price}</td>
          ))}
        </tr>
      </table>
    </div>
  )
}

export default Table;
