import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

export default class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationList} = this.props

    return (
      <div className="withdraw-bg-con">
        <div className="withdraw-card">
          <div className="withdraw-profile-con">
            <dvi className="withdraw-profile-logo"> A </dvi>{' '}
            <p className="withdraw-profile-name"> Ajay </p>{' '}
          </div>
          <div className="withdraw-balance-con">
            <p className="withdraw-side-text"> Your balance </p>{' '}
            <div>
              <p className="withdraw-balance"> {balance} </p>{' '}
              <p className="withdraw-rupees-text"> In Rupees </p>{' '}
            </div>{' '}
          </div>{' '}
          <p className="withdraw-sub-heading"> Withdraw </p>{' '}
          <p className="withdraw-side-text"> CHOOSE SUM(IN RUPEES) </p>
          <ul className="denomination-items-con">
            {' '}
            {denominationList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                withdrawAmount={this.withdrawAmount}
                key={eachItem.id}
              />
            ))}{' '}
          </ul>{' '}
        </div>{' '}
      </div>
    )
  }
}
