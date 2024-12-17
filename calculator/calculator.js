import { question } from 'readline-sync';

function getInput(call, typeOfOperation) {
  let ordinalNumber;
  if (typeOfOperation != 'squareRoot') {
    if (call == 1) {
      ordinalNumber = "primer";
    }
    else if (call == 2) {
      ordinalNumber = "segundo";
    }
    const input = question('Ingresa el ' + ordinalNumber + ' número: ');
    return input;
  }
  else if (typeOfOperation == 'squareRoot') {
    const input = question('Ingresa el número: ');
    return input;
  }
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

  if (parsedFirstValue != parsedSecondValue) {
    if (parsedFirstValue > parsedSecondValue) {
      return parsedFirstValue;
    } else if (parsedFirstValue < parsedSecondValue){
      return parsedSecondValue;
    } else {
      return false;
    }
  }
}

function calculate() {

  let firstInput;
  let secondInput;
  let result;

  console.log("1- Suma");
  console.log("2- Resta");
  console.log("3- Multiplicación");
  console.log("4- División");
  console.log("5- Raíz Cuadrada");
  console.log("6- Potencia");
  console.log("7- Residuo");

  const option = question('Elige la opción deseada: ');

  switch (option) {
    case "1":
      firstInput = getInput(1, 'addition');
      secondInput = getInput(2, 'addition');
      result = add(firstInput, secondInput);
      break;
    case "2":
      firstInput = getInput(1, 'substraction');
      secondInput = getInput(2, 'substraction');
      result = sustract(firstInput, secondInput);
      break;
    case "3":
      firstInput = getInput(1, 'multiplication');
      secondInput = getInput(2, 'multiplication');
      result = multiply(firstInput, secondInput);
      break;
    case "4":
      firstInput = getInput(1, 'division');
      secondInput = getInput(2, 'division');
      result = divide(firstInput, secondInput);
      break;
    case "5":
      firstInput = getInput(1, 'squareRoot');
      result = getSquareRoot(firstInput);
      break;
    case "6":
      firstInput = getInput(1, 'power');
      secondInput = getInput(2, 'power');
      result = getPower(firstInput, secondInput);
      break;
    case "7":
      firstInput = getInput(1, 'remainder');
      secondInput = getInput(2, 'remainder');
      result = getRemainder(firstInput, secondInput);
      break
    default:
      console.log("Pon una opción chida mamón");
      return false;
  }
  console.log("Tu resultado es: " + result);
  return result;
}

calculate();
