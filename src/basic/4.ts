function showMessage(message: string): void {
  console.log(message);
}
showMessage("Halo");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

calc(3, 2);

function customError(): never {
  throw new Error("Error");
}

customError();
