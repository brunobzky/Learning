import { question } from 'readline-sync';

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function getInput(call, operationType) {
  let ordinalNumber;

  if (operationType != 'squareRoot') {
    if (call == 1) {
      ordinalNumber = 'primer';
    }
    else if (call == 2) {
      ordinalNumber = 'segundo';
    }
    const input = question('Ingresa el ' + ordinalNumber + ' número: ');
    return input;
  }
  else if (operationType == 'squareRoot') {
    const input = question('Ingresa el número: ');
    return input;
  }
}

function showOutput(operationType, output) {
  let message;

  switch (operationType) {
    case 'addition':
      message = 'El resultado de la suma es: ' + output;
      break;
    case 'substraction':
      message = 'El resultado de la resta es: ' + output;
      break;
    case 'multiplication':
      message = 'El resultado de la multiplicación es: ' + output;
      break;
    case 'division':
      message = 'El resultado de la división es: ' + output;
      break;
    case 'squareRoot':
      message = 'Su raíz cuadrada es: ' + output;
      break;
    case 'power':
      message = 'El resultado de la suma es: ' + output;
      break;
    case 'remainder':
      message = 'El residuo es: ' + output;
      break;
    case 'compare':
      message = 'El número mayor es: ' + output;
      break;
    default:
      message = 'resultado inesperado';
  }
  return message;
}

function add(firstValue, secondValue) {
  let addition = parseInt(firstValue) + parseInt(secondValue)

  return addition;
}

function sustract(firstValue, secondValue) {
  let sustraction = parseInt(firstValue) - parseInt(secondValue);

  return sustraction;
}

function multiply(firstValue, secondValue) {
  let multiplication = parseInt(firstValue) * parseInt(secondValue);

  return multiplication;
}

function divide(firstValue, secondValue) {
  let division = parseInt(firstValue) / parseInt(secondValue);

  return division;
}

function getSquareRoot(value) {
  let squareRoot = parseFloat(Math.sqrt(value));

  return squareRoot;
}

function getPower(value, powerValue) {
  let power = parseInt(value) ** parseInt(powerValue);

  return power;
}

function getRemainder(firstValue, secondValue) {
  let remainder = firstValue % secondValue;

  return remainder;
}

function compareNumbers(firstValue, secondValue) {
  let parsedFirstValue = parseInt(firstValue);
  let parsedSecondValue = parseInt(secondValue);

  if (parsedFirstValue > parsedSecondValue) {
    return parsedFirstValue;
  } else if (parsedFirstValue < parsedSecondValue) {
    return parsedSecondValue;
  } else if (parsedFirstValue == parsedSecondValue) {
    let equivalent = parsedFirstValue;
    return equivalent;
  }
}

function exitProgram() {
  console.log('¡Hasta luego!');
  const exit = process.exit(1);
  return exit;
}

async function calculate() {
  let firstInput;
  let secondInput;
  let result;
  let output;

  do {
    console.clear();
    console.log('1- Suma');
    console.log('2- Resta');
    console.log('3- Multiplicación');
    console.log('4- División');
    console.log('5- Raíz Cuadrada');
    console.log('6- Potencia');
    console.log('7- Residuo');
    console.log('8- Comparar números');
    console.log('9- Salir');

    const option = question('Elige la opción deseada: ');

    switch (option) {
      case '1':
        firstInput = getInput(1, 'addition');
        secondInput = getInput(2, 'addition');
        result = add(firstInput, secondInput);
        output = showOutput('addition', result);
        break;
      case '2':
        firstInput = getInput(1, 'substraction');
        secondInput = getInput(2, 'substraction');
        result = sustract(firstInput, secondInput);
        output = showOutput('substraction', result);
        break;
      case '3':
        firstInput = getInput(1, 'multiplication');
        secondInput = getInput(2, 'multiplication');
        result = multiply(firstInput, secondInput);
        output = showOutput('multiplication', result);
        break;
      case '4':
        firstInput = getInput(1, 'division');
        secondInput = getInput(2, 'division');
        result = divide(firstInput, secondInput);
        output = showOutput('division', result);
        break;
      case '5':
        firstInput = getInput(1, 'squareRoot');
        result = getSquareRoot(firstInput);
        output = showOutput('squareRoot', result);
        break;
      case '6':
        firstInput = getInput(1, 'power');
        secondInput = getInput(2, 'power');
        result = getPower(firstInput, secondInput);
        output = showOutput('power', result);
        break;
      case '7':
        firstInput = getInput(1, 'remainder');
        secondInput = getInput(2, 'remainder');
        result = getRemainder(firstInput, secondInput);
        output = showOutput('remainder', result);
        break;
      case '8':
        firstInput = getInput(1, 'compare');
        secondInput = getInput(2, 'compare');
        result = compareNumbers(firstInput, secondInput);
        output = showOutput('compare', result);
        break;
      case '9':
        exitProgram();
      default:
        console.log('Pon una opción chida mamón');
        return false;
    }
    console.log(output);
    await sleep(2000);
  } while (true);
}

calculate();
