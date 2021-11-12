let Calc = function() {
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
 
 calc.onOff();