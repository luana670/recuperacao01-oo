export class Progressao {
  /**
   * Retorna um vetor com uma progressão aritmética crescente com *quantidade* elementos e razão *razao* entre seus elementos, onde sempre o primeiro elemento é o número 1.
   * @param quantidade Quantidade de elementos do vetor contendo a progressão.
   * @param razao A razão entre os elementos.
   * @returns
   */
  aritmetica(quantidade: number, razao: number) {
    let a1 = 1;
    let resultado = [];

    for(let i = 0; i < quantidade; i ++) {
      resultado.push(a1 + i * razao);
    }
    return resultado;

  }

  /**
   * Retorna um vetor com uma progressão geométrica crescente com *quantidade* elementos e razão *razao* entre seus elementos, onde sempre o primeiro elemento é o número 1.
   * @param quantidade Quantidade de elementos do vetor contendo a progressão.
   * @param razao A razão entre os elementos.
   * @returns
   */
  geometrica(quantidade: number, razao: number) {
    let a1 = 1;
    let resultado = [];

    for(let i = 0; i < quantidade; i ++) {
      resultado.push(a1 * (razao**i));
    }
    return resultado;
  }
}
