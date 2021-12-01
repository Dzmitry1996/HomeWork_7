/*let Calc = function() {
    this.onOff = function() {
       this.turn = confirm('Включить калькулятор?');
       if (this.turn) {
          this.get();
       }
    }
 
    this.get = function() {
       this.a = +prompt('Введите первое число: a', 4);
       this.sign = prompt('Введите знак оперции: +, -, *, /, ^, %(остаток от деления a на b)', '+');
       this.b = +prompt('Введите второе число: b', 9);
 
       this.oper();    
    }
 
    this.oper = function() {
       switch(this.sign) {
          case '+':
             this.result = this.a + this.b;
          break;
 
          case '-':
             this.result = this.a - this.b;
          break;
 
          case '*':
             this.result = this.a * this.b;
          break;
 
          case '/':
             this.result = this.a / this.b;
          break;
 
          case '^':
             this.result = Math.pow(this.a, this.b);
          break;
 
          case '%':
             this.result = this.a % this.b;
          break;
 
          default: this.result = 0;
       }

       this.show();
    }
 
    this.show = function() {
       alert(this.a + ' ' + this.sign + ' ' + this.b + ' = ' + this.result);
    }
 }
 
 let calc = new Calc();
 
 calc.onOff();*/


 let a = '';          //first number
 let b = '';          //secont number
 let sign = '';       // знак операции
 let finish = false;

 const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',];
 const action = ['-', '+', 'X', '/',];

 //экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
   a = ''; //first number and result
   b = ''; //second number
   sign = ''; //знак
   finish = false
   out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
   // нажата не кнопка
   if(!event.target.classList.contains('btn')) return;
   //нажата кноака ас
   if(!event.target.classList.contains('ac')) return;

   out.textContent = '';
   //получаю нажатую кнопку
   const key =event.target.textContent;
};