let money,
    time;

money = +prompt('Ваш бюджет на месяц?', '0');
time  = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD' );

let appdata = {
    budjet: money,
    timeData: time,
    expenses: {
      'ответ на первый вопрос': '',
      'ответ на второй вопрос': ''
  },
    optionalExpenses: {    },
    income: [],
    savings: false
};

appdata.expenses[0] = prompt('Введите обязательную статью расходов в этом месяце', '');
appdata.expenses[1] = prompt('Во сколько обойдется', '');

alert('бюджет на 1 день ' + money/30 + 'рублей');
