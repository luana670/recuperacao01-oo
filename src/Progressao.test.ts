import { Progressao } from "./Progressao";

describe("Testes sobre a classe Progressao", () => {
  let progressao: Progressao;

  beforeEach(() => {
    progressao = new Progressao();
  });

  describe("aritmetica", () => {
    it("deve retornar uma progressão aritmética correta", () => {
      expect(progressao.aritmetica(5, 2)).toEqual([1, 3, 5, 7, 9]);
    });

    it("deve retornar um vetor com apenas 1 elemento igual a 1", () => {
      expect(progressao.aritmetica(1, 10)).toEqual([1]);
    });

    it("deve retornar um vetor vazio se quantidade for 0", () => {
      expect(progressao.aritmetica(0, 5)).toEqual([]);
    });

    it("deve funcionar com razão negativa", () => {
      expect(progressao.aritmetica(4, -2)).toEqual([1, -1, -3, -5]);
    });

    it("deve funcionar com razão zero", () => {
      expect(progressao.aritmetica(3, 0)).toEqual([1, 1, 1]);
    });
  });

  describe("geometrica", () => {
    it("deve retornar uma progressão geométrica correta", () => {
      expect(progressao.geometrica(4, 2)).toEqual([1, 2, 4, 8]);
    });

    it("deve retornar um vetor com apenas 1 elemento igual a 1", () => {
      expect(progressao.geometrica(1, 10)).toEqual([1]);
    });

    it("deve retornar um vetor vazio se quantidade for 0", () => {
      expect(progressao.geometrica(0, 3)).toEqual([]);
    });

    it("deve funcionar com razão negativa", () => {
      expect(progressao.geometrica(3, -2)).toEqual([1, -2, 4]);
    });

    it("deve funcionar com razão zero", () => {
      expect(progressao.geometrica(3, 0)).toEqual([1, 0, 0]);
    });
  });
});

// We recommend installing an extension to run jest tests.
