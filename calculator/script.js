class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand
    this.currentOperand = currentOperand
    this.clear()
    this.result = false
  }

  operations(operator) {
    if(operator === 'x2') {
      const numberToSquare = parseFloat(this.currentNumber) || parseFloat(this.prevOper)
      return this.currentNumber = numberToSquare * numberToSquare
    }
    if(operator === '√') {
      return this.currentNumber = Math.sqrt(this.currentNumber) || `Не корректные данные`
    }
    if(operator === '-/+') {
      if(this.currentNumber === false) return
      if(!this.currentNumber.includes('-')) {
        return this.currentNumber = '-' + this.currentNumber
      }
      return this.currentNumber = this.currentNumber.slice(1)
    }
    if(this.currentNumber === '') {
      if(this.prevOper !== '') {
        this.prevOper = `${this.prevOper.slice(0, -2)} ${operator}`
      }
      this.operator = operator
      return
    }
    if(this.prevOper !== '' && this.currentNumber !== '') this.compute()
    this.operator = operator
    const tempOperator = this.operator === 'xy' ? '^' : this.operator
    this.prevOper = `${this.currentNumber} ${tempOperator}`
    this.currentNumber = ''
  }

  compute(equal) {
    this.equal = equal
    if(this.prevOper === '') return this.prevOper = `${this.currentNumber} ${equal}`
    if(this.currentNumber === '') return
    let result
    const prev = +(parseFloat(this.prevOper))
    const curr = +(parseFloat(this.currentNumber))
    switch(this.operator) {
      case '+':
        result = prev + curr
        break;
      case '-':
        result = prev - curr
        break;
      case '÷':
        if(curr === 0) return this.currentNumber = `Деление на ноль не возможно`
        result = prev / curr
        break;
      case '*':
        if(Number.isInteger(prev) && Number.isInteger(curr)) result = prev * curr
        result = ((prev * 100) * (curr * 100)) / (100 * 100)
        break;
      case 'xy':
        result = prev ** curr
        break;
      default: return
    }
    if(Number.isInteger(result)) {
      this.currentNumber = result
    } else {
      const decimalLength = result.toString().split('.')[1].length
      if(decimalLength > 10) {
        this.currentNumber = result.toFixed(1)
      } else {
        this.currentNumber = result
      }
    }
    this.prevOper = ''
    this.operator = undefined
    this.result = true
  }
  delete() {
    if(this.currentNumber === 'Деление на ноль не возможно') return this.currentNumber = ''
    if(this.currentNumber === 'Не корректные данные') return this.currentNumber = ''
    this.currentNumber = this.currentNumber.slice(0, -1)
  }

  clear() {
    this.prevOper = ''
    this.currentNumber = ''
    this.operator = null
  }

  addOperand(num) {
    if(this.equal === '=' ||
      this.currentNumber === 'Не корректные данные' ||
      this.currentNumber === 'Деление на ноль не возможно'
    ) {
      this.clear(), this.equal = undefined
    }
    if(this.operator === undefined) return
    if (num === '.' && this.currentNumber.includes('.')) return
    this.currentNumber = this.currentNumber.toString() + num.toString()
  }

  updateDisplay() {
    this.previousOperand.innerText = this.prevOper
    this.currentOperand.innerText = this.currentNumber
  }
}

const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand  = document.querySelector('[data-current-operand]')
const dataOperations  = document.querySelectorAll('[data-operation]')
const dataNumbers     = document.querySelectorAll('[data-number]')
const allClear        = document.querySelector('[data-all-clear]')
const dataEquals      = document.querySelector('[data-equals]')
const dataDelete      = document.querySelector('[data-delete]')

const calculator = new Calculator(previousOperand, currentOperand)


dataNumbers.forEach(el => {
  el.addEventListener('click', () => {
    calculator.addOperand(el.innerText)
    calculator.updateDisplay()
  })
})

dataOperations.forEach(el => {
  el.addEventListener('click', () => {
    calculator.operations(el.innerText)
    calculator.updateDisplay()
  })
})

allClear.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

dataDelete.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

dataEquals.addEventListener('click', () => {
  calculator.compute(dataEquals.innerText)
  calculator.updateDisplay()
})